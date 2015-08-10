module.exports = {
  options: {
    separator: '\r\n\r\n',
  },
  header: {
    src: ['<%= concatHead %>'],
    dest: '<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/header.tmp.js',
    nonull: true
  },
  header_ie: {
    src: ['<%= concatHeadIE %>'],
    dest: '<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/header_ie.tmp.js',
    nonull: true
  },
  footer: {
    src: ['<%= concatFoot %>'],
    dest: '<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/footer.tmp.js',
    nonull: true
  }
};
