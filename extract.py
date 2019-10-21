import re
import os
import zipfile
import xml.etree.ElementTree as ET


def is_newline(elem):
    return elem.tag == '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}pPr'


def is_codesnippet_end(attr):
    return attr == 'Para' or attr == 'FeatureType'


def convert_title_to_directory_name(raw_header):
    # Break title into component words
    words_array = re.split(r'[\s|-]+', raw_header)

    # Strip special characters
    words_array = list(map(lambda x: ''.join(
        e for e in x if e.isalnum()), words_array))

    # Remove empty strings
    while('' in words_array):
        words_array.remove('')

    # Capitalize each word
    words_array = map(lambda x: x.capitalize()
                      if not x[0].istitle() else x, words_array)

    return ''.join(words_array)


def get_directory_path_from_stack(stack):
    return '/'.join(map(lambda x: x['title'], stack))


def get_full_file_path_from_stack(stack, file_extension):
    path = get_directory_path_from_stack(stack)

    top_of_stack = stack[-1]

    # 0-padded number
    next_file_number = str(top_of_stack['next_index'])
    if len(next_file_number) == 1:
        next_file_number = '0' + next_file_number

    top_of_stack['next_index'] += 1

    return f'''{path}/{top_of_stack['title']}Example{next_file_number}.{file_extension}'''


def guess_file_extension(buffer):
    html_snippets = (
        '<html>',
        '<script',
        '<div>',
        '<span>',
        '<p>',
    )
    for snippet in html_snippets:
        if snippet in buffer:
            return 'html'

    return 'js'


DOCX_FILES = [f'''src/c{'0' if x < 10 else ''}{x}.docx''' for x in range(
    1, 29)] + [f'src/appendix{x}.docx' for x in list('ABCD')]

for filename in DOCX_FILES:
    xml_directory = filename.split('.')[0]

    with zipfile.ZipFile(filename, 'r') as zip_ref:
        zip_ref.extractall(xml_directory)

    tree = ET.parse(f'{xml_directory}/word/document.xml')
    root = tree.getroot()

    header_text_buffer = ''
    code_text_buffer = ''
    inside_header_tag = False
    inside_code_snippet = False
    expected_stack_height = 0
    stack = []

    for elem in root.iter():
        attr = None
        try:
            attr = elem.attrib['{http://schemas.openxmlformats.org/wordprocessingml/2006/main}val']
        except Exception as e:
            pass

        if attr == 'H1' or attr == 'H2' or attr == 'H3' or attr == 'H4' or attr == 'ChapterTitle' or attr == 'AppendixTitle':
            inside_header_tag = True
            inside_code_snippet = False
            if attr == 'ChapterTitle' or attr == 'AppendixTitle':
                expected_stack_height = 1
            elif attr == 'H1':
                expected_stack_height = 2
            elif attr == 'H2':
                expected_stack_height = 3
            elif attr == 'H3':
                expected_stack_height = 4
            elif attr == 'H4':
                expected_stack_height = 5

        if attr == 'CodeSnippet':
            inside_header_tag = False
            inside_code_snippet = True

        if inside_header_tag and is_newline(elem):
            inside_header_tag = False

            title = convert_title_to_directory_name(header_text_buffer)
            if expected_stack_height == len(stack) + 1:
                pass
            elif expected_stack_height == len(stack):
                stack.pop()
            elif expected_stack_height < len(stack):
                while expected_stack_height <= len(stack):
                    stack.pop()
            else:
                raise 'This should never happen!'

            stack.append({
                'title': title,
                'next_index': 1
            })

            header_text_buffer = ''
            code_text_buffer = ''

        if inside_code_snippet and is_codesnippet_end(attr):
            inside_code_snippet = False
            try:
                os.makedirs(get_directory_path_from_stack(stack))
            except Exception as e:
                pass

            file_extension = guess_file_extension(code_text_buffer)

            f = open(get_full_file_path_from_stack(stack, file_extension), "a")
            f.write(code_text_buffer)
            f.close()

            header_text_buffer = ''
            code_text_buffer = ''

        if inside_header_tag:
            if elem.text is not None:
                header_text_buffer += elem.text

        if inside_code_snippet:
            if elem.text is not None:
                code_text_buffer += elem.text
            elif is_newline(elem):
                code_text_buffer += '\n'
