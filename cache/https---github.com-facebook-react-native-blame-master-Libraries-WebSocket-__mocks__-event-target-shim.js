



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>react-native/Libraries/WebSocket/__mocks__/event-target-shim.js at master · facebook/react-native · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="facebook/react-native" name="twitter:title" /><meta content="react-native - A framework for building native apps with React." name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/69631?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/69631?v=3&amp;s=400" property="og:image" /><meta content="facebook/react-native" property="og:title" /><meta content="https://github.com/facebook/react-native" property="og:url" /><meta content="react-native - A framework for building native apps with React." property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="A2E429B6:19DF:1C7B4217:565DFD26" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/blame" data-pjax-transient="true" name="analytics-location" />
<meta content="Rails, view, blob#blame" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged Out">
    <meta class="js-ga-set" name="dimension4" content="New repo nav">




    <meta name="is-dotcom" content="true">
        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="625524aced9fd06fa576e2bbc2af4c66e346d708" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-5e2d1232bc97970f293f259bcb6ab137945cb5635b398c2a81027bf21f0255c8.css" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-bcce22057877160838a39c51a6270cf95fb927fc317253965cdbc182f32be960.css" media="all" rel="stylesheet" />
    
    
    


    <meta http-equiv="x-pjax-version" content="3cf195f8aa0cc4097aecade8ff90cc36">

      
  <meta name="description" content="react-native - A framework for building native apps with React.">
  <meta name="go-import" content="github.com/facebook/react-native git https://github.com/facebook/react-native.git">

  <meta content="69631" name="octolytics-dimension-user_id" /><meta content="facebook" name="octolytics-dimension-user_login" /><meta content="29028775" name="octolytics-dimension-repository_id" /><meta content="facebook/react-native" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="29028775" name="octolytics-dimension-repository_network_root_id" /><meta content="facebook/react-native" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/facebook/react-native/commits/master.atom" rel="alternate" title="Recent Commits to react-native:master" type="application/atom+xml">

  </head>


  <body class="logged_out   env-production  vis-public">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="btn btn-primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="btn" href="/login?return_to=%2Ffacebook%2Freact-native%2Fblame%2Fmaster%2FLibraries%2FWebSocket%2F__mocks__%2Fevent-target-shim.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/facebook/react-native/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/facebook/react-native/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/pricing" data-ga-click="(Logged out) Header, go to pricing, text:pricing">Pricing</a>
          </li>
      </ul>

  </div>
</div>



    <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div id="js-repo-pjax-container" class="context-loader-container js-repo-nav-next" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Ffacebook%2Freact-native"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="/facebook/react-native/watchers">
    1,621
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Ffacebook%2Freact-native"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/facebook/react-native/stargazers">
      23,212
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Ffacebook%2Freact-native"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>

    <a href="/facebook/react-native/network" class="social-count">
      3,760
    </a>
  </li>
</ul>

    <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span class="octicon octicon-repo"></span>
  <span class="author"><a href="/facebook" class="url fn" itemprop="url" rel="author"><span itemprop="title">facebook</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/facebook/react-native" data-pjax="#js-repo-pjax-container">react-native</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/facebook/react-native/issues/counts">

  <a href="/facebook/react-native" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /facebook/react-native">
    <span class="octicon octicon-code"></span>
    Code
</a>
    <a href="/facebook/react-native/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /facebook/react-native/issues">
      <span class="octicon octicon-issue-opened"></span>
      Issues
      <span class="counter">853</span>

</a>
  <a href="/facebook/react-native/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /facebook/react-native/pulls">
    <span class="octicon octicon-git-pull-request"></span>
    Pull requests
    <span class="counter">189</span>

</a>

  <a href="/facebook/react-native/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /facebook/react-native/pulse">
    <span class="octicon octicon-pulse"></span>
    Pulse
</a>
  <a href="/facebook/react-native/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /facebook/react-native/graphs">
    <span class="octicon octicon-graph"></span>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container repo-container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
<a href="/facebook/react-native/blame/b0e39d26aecce2b5aa33888ca3172205a879ed98/Libraries/WebSocket/__mocks__/event-target-shim.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<div class="breadcrumb css-truncate blame-breadcrumb js-zeroclipboard-container">
  <span class="css-truncate-target js-zeroclipboard-target"><span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/facebook/react-native" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">react-native</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/facebook/react-native/tree/master/Libraries" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">Libraries</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/facebook/react-native/tree/master/Libraries/WebSocket" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">WebSocket</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/facebook/react-native/tree/master/Libraries/WebSocket/__mocks__" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">__mocks__</span></a></span><span class="separator">/</span><strong class="final-path">event-target-shim.js</strong></span>
  <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
</div>

<div class="line-age-legend">
  <span>Newer</span>
  <ol>
      <li class="heat" data-heat="1"></li>
      <li class="heat" data-heat="2"></li>
      <li class="heat" data-heat="3"></li>
      <li class="heat" data-heat="4"></li>
      <li class="heat" data-heat="5"></li>
      <li class="heat" data-heat="6"></li>
      <li class="heat" data-heat="7"></li>
      <li class="heat" data-heat="8"></li>
      <li class="heat" data-heat="9"></li>
      <li class="heat" data-heat="10"></li>
  </ol>
  <span>Older</span>
</div>

<div class="file">
  <div class="file-header">
    <div class="file-actions">
      <div class="btn-group">
        <a href="/facebook/react-native/raw/master/Libraries/WebSocket/__mocks__/event-target-shim.js" class="btn btn-sm" id="raw-url">Raw</a>
        <a href="/facebook/react-native/blob/master/Libraries/WebSocket/__mocks__/event-target-shim.js" class="btn btn-sm js-update-url-with-hash">Normal view</a>
        <a href="/facebook/react-native/commits/master/Libraries/WebSocket/__mocks__/event-target-shim.js" class="btn btn-sm" rel="nofollow">History</a>
      </div>
    </div>



    <div class="file-info">
      <span class="octicon octicon-file-text"></span>
      <span class="file-mode" title="File Mode">100644</span>
      <span class="file-info-divider"></span>
        10 lines (8 sloc)
        <span class="file-info-divider"></span>
      233 Bytes
    </div>
  </div>

  <div class="blob-wrapper">
    <table class="blame-container highlight data js-file-line-container">
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="10">
            <a href="/facebook/react-native/commit/6f84ccf51acd443a7d50526c99ad9866e68c5796" class="blame-sha">6f84ccf</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/6f84ccf51acd443a7d50526c99ad9866e68c5796" class="blame-commit-title" title="Fix tests related to event-target-shim

Summary: @​public

Jest has an issue where if you export `Symbol` it crashes badly. Since event-target-shim does that, it breaks everything. Mocking that module fixes the issue until @cpojer comes back from vacation and fixes the bug in Jest itself.

Reviewed By: @jingc

Differential Revision: D2503562">Fix tests related to event-target-shim</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-10-02T19:27:10Z" is="relative-time">Oct 2, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L1">1</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC1"><span class="pl-c">// Jest fatals for the following statement (minimal repro case)</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L2">2</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC2"><span class="pl-c">//</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L3">3</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC3"><span class="pl-c">//   exports.something = Symbol;</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L4">4</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC4"><span class="pl-c">//</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L5">5</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC5"><span class="pl-c">// Until it is fixed, mocking the entire node module makes the</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L6">6</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC6"><span class="pl-c">// problem go away.</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L7">7</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC7"></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L8">8</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC8"><span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L9">9</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC9"><span class="pl-c1">module</span>.<span class="pl-en">exports</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {};</td>
          </tr>
    </table>
  </div>
</div>


  </div>
  <div class="modal-backdrop"></div>
</div>

    </div>
  </div>

    </div>

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.09335s from github-fe145-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-ca4183ce112a8e8984270469e316f4700bbe45a08e1545d359a2df9ba18a85b6.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-07413b5e0147434fe39f7f96545ef359ef45ca5051a44ec3b8e8d410a4a47988.js"></script>
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

