// Ensures this element is visible
document.forms[0].scrollIntoView();

// These behave identically
document.forms[0].scrollIntoView(true); 
document.forms[0].scrollIntoView({block: true});

// This attempts to scroll the element smoothly into view:
document.forms[0].scrollIntoView({behavior: 'smooth', block: true});
