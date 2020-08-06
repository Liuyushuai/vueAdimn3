module.exports = {
  /**
   * @type {string} 'XXX 后台管理系统'
   * @description systemName
   */
  title: 'EA数据分析平台',
  enTitle: 'EA Data platform',

  /**
   * @type {boolean} true | false
   * @description  Whether secondary menu use icon
   */
  useSecondaryMenuIcon: false,

  /**
   * @type {boolean} true | false
   * @description  Whether need check browser
   */
  needCheckBrowser: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showSettings: false,

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: true,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production',
  /**
   * @type {boolean} true | false
   * @description Whether need breadcrumb
   */
  needBreadCrumb: true
}
