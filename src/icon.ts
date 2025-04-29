import type { StarlightIcon } from '@astrojs/starlight/types';

// 这个函数用于获取图标的标签文本
function getIconLabel(icon: StarlightIcon): string {
  // 这里可以根据图标名称返回对应的标签文本
  switch (icon) {
    // 箭头和导航
    case 'up-caret': return '向上箭头';
    case 'down-caret': return '向下箭头';
    case 'right-caret': return '向右箭头';
    case 'left-caret': return '向左箭头';
    case 'up-arrow': return '向上箭头';
    case 'down-arrow': return '向下箭头';
    case 'right-arrow': return '向右箭头';
    case 'left-arrow': return '向左箭头';
    case 'bars': return '菜单';
    case 'translate': return '翻译';
    
    // 编辑和文档
    case 'pencil': return '编辑';
    case 'pen': return '笔';
    case 'document': return '文档';
    case 'add-document': return '添加文档';
    case 'setting': return '设置';
    case 'external': return '外部链接';
    case 'download': return '下载';
    case 'cloud-download': return '云下载';
    
    // 界面元素
    case 'moon': return '月亮';
    case 'sun': return '太阳';
    case 'laptop': return '笔记本电脑';
    case 'open-book': return '打开的书';
    case 'information': return '信息';
    case 'magnifier': return '放大镜';
    case 'forward-slash': return '斜杠';
    case 'close': return '关闭';
    case 'error': return '错误';
    case 'warning': return '警告';
    case 'approve-check-circle': return '确认圆圈';
    case 'approve-check': return '确认';
    case 'rocket': return '火箭';
    case 'star': return '星星';
    case 'puzzle': return '拼图';
    case 'list-format': return '列表格式';
    case 'random': return '随机';
    
    // 社交和评论
    case 'comment': return '评论';
    case 'comment-alt': return '评论';
    case 'heart': return '心形';
    
    // 社交媒体
    case 'github': return 'GitHub';
    case 'gitlab': return 'GitLab';
    case 'bitbucket': return 'Bitbucket';
    case 'codePen': return 'CodePen';
    case 'farcaster': return 'Farcaster';
    case 'discord': return 'Discord';
    case 'gitter': return 'Gitter';
    case 'twitter': return 'Twitter';
    case 'x.com': return 'X.com';
    case 'mastodon': return 'Mastodon';
    case 'codeberg': return 'Codeberg';
    case 'youtube': return 'YouTube';
    case 'threads': return 'Threads';
    case 'linkedin': return 'LinkedIn';
    case 'twitch': return 'Twitch';
    case 'azureDevOps': return 'Azure DevOps';
    case 'microsoftTeams': return 'Microsoft Teams';
    case 'instagram': return 'Instagram';
    case 'stackOverflow': return 'Stack Overflow';
    case 'telegram': return 'Telegram';
    case 'rss': return 'RSS';
    case 'facebook': return 'Facebook';
    case 'email': return '电子邮件';
    case 'phone': return '电话';
    case 'reddit': return 'Reddit';
    case 'patreon': return 'Patreon';
    case 'signal': return 'Signal';
    case 'slack': return 'Slack';
    case 'matrix': return 'Matrix';
    case 'hackerOne': return 'HackerOne';
    case 'openCollective': return 'Open Collective';
    case 'blueSky': return 'BlueSky';
    case 'discourse': return 'Discourse';
    case 'zulip': return 'Zulip';
    case 'pinterest': return 'Pinterest';
    case 'tiktok': return 'TikTok';
    
    // 技术栈
    case 'astro': return 'Astro';
    case 'alpine': return 'Alpine';
    case 'pnpm': return 'pnpm';
    case 'biome': return 'Biome';
    case 'bun': return 'Bun';
    case 'mdx': return 'MDX';
    case 'apple': return 'Apple';
    case 'linux': return 'Linux';
    case 'homebrew': return 'Homebrew';
    case 'nix': return 'Nix';
    case 'starlight': return 'Starlight';
    case 'pkl': return 'PKL';
    case 'node': return 'Node.js';
    case 'cloudflare': return 'Cloudflare';
    case 'vercel': return 'Vercel';
    case 'netlify': return 'Netlify';
    case 'deno': return 'Deno';
    case 'jsr': return 'JSR';
    case 'nostr': return 'Nostr';
    case 'backstage': return 'Backstage';
    case 'confluence': return 'Confluence';
    case 'jira': return 'Jira';
    case 'storybook': return 'Storybook';
    case 'vscode': return 'VS Code';
    case 'jetbrains': return 'JetBrains';
    case 'zed': return 'Zed';
    case 'vim': return 'Vim';
    case 'figma': return 'Figma';
    case 'sketch': return 'Sketch';
    case 'npm': return 'npm';
    case 'sourcehut': return 'SourceHut';
    case 'substack': return 'Substack';
    
    // Seti 图标
    case 'seti:folder': return '文件夹';
    case 'seti:bsl': return 'BSL';
    case 'seti:mdo': return 'MDO';
    case 'seti:salesforce': return 'Salesforce';
    case 'seti:asm': return 'Assembly';
    case 'seti:bicep': return 'Bicep';
    case 'seti:bazel': return 'Bazel';
    case 'seti:c': return 'C';
    case 'seti:c-sharp': return 'C#';
    case 'seti:html': return 'HTML';
    case 'seti:cpp': return 'C++';
    case 'seti:clojure': return 'Clojure';
    case 'seti:coldfusion': return 'ColdFusion';
    case 'seti:config': return '配置';
    case 'seti:crystal': return 'Crystal';
    case 'seti:crystal_embedded': return 'Crystal Embedded';
    case 'seti:json': return 'JSON';
    case 'seti:css': return 'CSS';
    case 'seti:csv': return 'CSV';
    case 'seti:xls': return 'Excel';
    case 'seti:cu': return 'CU';
    case 'seti:cake': return 'Cake';
    case 'seti:cake_php': return 'CakePHP';
    case 'seti:d': return 'D';
    case 'seti:word': return 'Word';
    case 'seti:elixir': return 'Elixir';
    case 'seti:elixir_script': return 'Elixir Script';
    case 'seti:hex': return 'Hex';
    case 'seti:elm': return 'Elm';
    case 'seti:favicon': return 'Favicon';
    case 'seti:f-sharp': return 'F#';
    case 'seti:git': return 'Git';
    case 'seti:go': return 'Go';
    case 'seti:godot': return 'Godot';
    case 'seti:gradle': return 'Gradle';
    case 'seti:grails': return 'Grails';
    case 'seti:graphql': return 'GraphQL';
    case 'seti:hacklang': return 'Hack';
    case 'seti:haml': return 'HAML';
    case 'seti:mustache': return 'Mustache';
    case 'seti:haskell': return 'Haskell';
    case 'seti:haxe': return 'Haxe';
    case 'seti:jade': return 'Jade';
    case 'seti:java': return 'Java';
    case 'seti:javascript': return 'JavaScript';
    case 'seti:jinja': return 'Jinja';
    case 'seti:julia': return 'Julia';
    case 'seti:karma': return 'Karma';
    case 'seti:kotlin': return 'Kotlin';
    case 'seti:dart': return 'Dart';
    case 'seti:liquid': return 'Liquid';
    case 'seti:livescript': return 'LiveScript';
    case 'seti:lua': return 'Lua';
    case 'seti:markdown': return 'Markdown';
    case 'seti:argdown': return 'Argdown';
    case 'seti:info': return '信息';
    case 'seti:clock': return '时钟';
    case 'seti:maven': return 'Maven';
    case 'seti:nim': return 'Nim';
    case 'seti:notebook': return '笔记本';
    case 'seti:nunjucks': return 'Nunjucks';
    case 'seti:ocaml': return 'OCaml';
    case 'seti:odata': return 'OData';
    case 'seti:perl': return 'Perl';
    case 'seti:php': return 'PHP';
    case 'seti:pipeline': return 'Pipeline';
    case 'seti:pddl': return 'PDDL';
    case 'seti:plan': return '计划';
    case 'seti:happenings': return '事件';
    case 'seti:powershell': return 'PowerShell';
    case 'seti:prisma': return 'Prisma';
    case 'seti:pug': return 'Pug';
    case 'seti:puppet': return 'Puppet';
    case 'seti:purescript': return 'PureScript';
    case 'seti:python': return 'Python';
    case 'seti:react': return 'React';
    case 'seti:rescript': return 'ReScript';
    case 'seti:R': return 'R';
    case 'seti:ruby': return 'Ruby';
    case 'seti:rust': return 'Rust';
    case 'seti:sass': return 'Sass';
    case 'seti:spring': return 'Spring';
    case 'seti:slim': return 'Slim';
    case 'seti:smarty': return 'Smarty';
    case 'seti:sbt': return 'SBT';
    case 'seti:scala': return 'Scala';
    case 'seti:ethereum': return 'Ethereum';
    case 'seti:stylus': return 'Stylus';
    case 'seti:svelte': return 'Svelte';
    case 'seti:swift': return 'Swift';
    case 'seti:db': return '数据库';
    case 'seti:terraform': return 'Terraform';
    case 'seti:tex': return 'TeX';
    case 'seti:default': return '默认';
    case 'seti:twig': return 'Twig';
    case 'seti:typescript': return 'TypeScript';
    case 'seti:tsconfig': return 'TSConfig';
    case 'seti:vala': return 'Vala';
    case 'seti:vite': return 'Vite';
    case 'seti:vue': return 'Vue';
    case 'seti:wasm': return 'WebAssembly';
    case 'seti:wat': return 'WAT';
    case 'seti:xml': return 'XML';
    case 'seti:yml': return 'YAML';
    case 'seti:prolog': return 'Prolog';
    case 'seti:zig': return 'Zig';
    case 'seti:zip': return 'ZIP';
    case 'seti:wgt': return 'WGT';
    
    // 设计工具
    case 'seti:illustrator': return 'Illustrator';
    case 'seti:photoshop': return 'Photoshop';
    case 'seti:pdf': return 'PDF';
    case 'seti:font': return '字体';
    case 'seti:image': return '图片';
    case 'seti:svg': return 'SVG';
    case 'seti:sublime': return 'Sublime Text';
    case 'seti:code-search': return '代码搜索';
    case 'seti:shell': return 'Shell';
    case 'seti:video': return '视频';
    case 'seti:audio': return '音频';
    case 'seti:windows': return 'Windows';
    
    // 开发工具
    case 'seti:jenkins': return 'Jenkins';
    case 'seti:babel': return 'Babel';
    case 'seti:bower': return 'Bower';
    case 'seti:docker': return 'Docker';
    case 'seti:code-climate': return 'Code Climate';
    case 'seti:eslint': return 'ESLint';
    case 'seti:firebase': return 'Firebase';
    case 'seti:firefox': return 'Firefox';
    case 'seti:grunt': return 'Grunt';
    case 'seti:gulp': return 'Gulp';
    case 'seti:ionic': return 'Ionic';
    case 'seti:platformio': return 'PlatformIO';
    case 'seti:rollup': return 'Rollup';
    case 'seti:stylelint': return 'Stylelint';
    case 'seti:yarn': return 'Yarn';
    case 'seti:webpack': return 'Webpack';
    case 'seti:lock': return '锁';
    case 'seti:license': return '许可证';
    case 'seti:makefile': return 'Makefile';
    case 'seti:heroku': return 'Heroku';
    case 'seti:todo': return '待办事项';
    case 'seti:ignored': return '忽略';
    
    default:
      return icon;
  }
}

export { getIconLabel }; 
