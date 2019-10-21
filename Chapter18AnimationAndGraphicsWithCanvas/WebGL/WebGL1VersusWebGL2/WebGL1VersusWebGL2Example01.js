let ext = gl.getExtension('WEBGL_draw_buffers');

if (!ext) {
  // handle missing extension
} else {
  ext.drawBuffersWEBGL([...])
}
