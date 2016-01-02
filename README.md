# tabAid
Selectively include non-links with hover states in the natural tabbing order, for accessibility.

## Settings
- **tabbing** can take multiple selectors; defaults to '.tabAid'
- **onClass** sets the class that will be added to the artificially-tabbed items when they receive focus; defaults to 'on'

## Usage
$(document).tabAid({tabbing:'header nav li, .bio', onClass: 'focused'});
