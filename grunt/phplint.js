module.exports =  {
  plugins: ['<%= wpPlugins %>'],
  theme: ['<%= wpInfo.wp_content %>/themes/<%= wpInfo.theme_name %>/**/*.php']
};
