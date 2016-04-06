



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>react-native/Libraries/ReactIOS/NativeMethodsMixin.js at master · facebook/react-native · GitHub</title>
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

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="A2E429B6:26AB:140741C4:565DFBC6" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/blame" data-pjax-transient="true" name="analytics-location" />
<meta content="Rails, view, blob#blame" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged Out">
    <meta class="js-ga-set" name="dimension4" content="New repo nav">




    <meta name="is-dotcom" content="true">
        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="bd526cada6815af38b2286a4f5fef38fad17b9d8" name="form-nonce" />

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
      <a class="btn" href="/login?return_to=%2Ffacebook%2Freact-native%2Fblame%2Fmaster%2FLibraries%2FReactIOS%2FNativeMethodsMixin.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
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

    
<a href="/facebook/react-native/blame/b0e39d26aecce2b5aa33888ca3172205a879ed98/Libraries/ReactIOS/NativeMethodsMixin.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<div class="breadcrumb css-truncate blame-breadcrumb js-zeroclipboard-container">
  <span class="css-truncate-target js-zeroclipboard-target"><span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/facebook/react-native" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">react-native</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/facebook/react-native/tree/master/Libraries" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">Libraries</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/facebook/react-native/tree/master/Libraries/ReactIOS" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">ReactIOS</span></a></span><span class="separator">/</span><strong class="final-path">NativeMethodsMixin.js</strong></span>
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
        <a href="/facebook/react-native/raw/master/Libraries/ReactIOS/NativeMethodsMixin.js" class="btn btn-sm" id="raw-url">Raw</a>
        <a href="/facebook/react-native/blob/master/Libraries/ReactIOS/NativeMethodsMixin.js" class="btn btn-sm js-update-url-with-hash">Normal view</a>
        <a href="/facebook/react-native/commits/master/Libraries/ReactIOS/NativeMethodsMixin.js" class="btn btn-sm" rel="nofollow">History</a>
      </div>
    </div>



    <div class="file-info">
      <span class="octicon octicon-file-text"></span>
      <span class="file-mode" title="File Mode">100644</span>
      <span class="file-info-divider"></span>
        191 lines (175 sloc)
        <span class="file-info-divider"></span>
      5.8 KB
    </div>
  </div>

  <div class="blob-wrapper">
    <table class="blame-container highlight data js-file-line-container">
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-sha">efae175</a>
            <img alt="@sahrens" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1509831?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-commit-title" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
            <div class="blame-commit-meta">
              <a href="/sahrens" class="muted-link" rel="contributor">sahrens</a> authored
              <time datetime="2015-02-20T04:10:52Z" is="relative-time">Feb 19, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L1">1</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC1"><span class="pl-c">/**</span></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="7">
            <a href="/facebook/react-native/commit/e1ef0328d9e8aa5437bb3b2b9602247d41fe9465" class="blame-sha">e1ef032</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/e1ef0328d9e8aa5437bb3b2b9602247d41fe9465" class="blame-commit-title" title="[ReactNative] Expanded license on js files">[ReactNative] Expanded license on js files</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-23T20:35:08Z" is="relative-time">Mar 23, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L2">2</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC2"><span class="pl-c"> * Copyright (c) 2015-present, Facebook, Inc.</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L3">3</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC3"><span class="pl-c"> * All rights reserved.</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L4">4</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC4"><span class="pl-c"> *</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L5">5</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC5"><span class="pl-c"> * This source code is licensed under the BSD-style license found in the</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L6">6</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC6"><span class="pl-c"> * LICENSE file in the root directory of this source tree. An additional grant</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L7">7</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC7"><span class="pl-c"> * of patent rights can be found in the PATENTS file in the same directory.</span></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="3">
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-sha">efae175</a>
            <img alt="@sahrens" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1509831?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-commit-title" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
            <div class="blame-commit-meta">
              <a href="/sahrens" class="muted-link" rel="contributor">sahrens</a> authored
              <time datetime="2015-02-20T04:10:52Z" is="relative-time">Feb 20, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L8">8</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC8"><span class="pl-c"> *</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L9">9</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC9"><span class="pl-c"> * @providesModule NativeMethodsMixin</span></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/7ffa7942aac63767372a632f98a2e12b8847b09a" class="blame-sha">7ffa794</a>
            <img alt="@mroch" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/3012?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/7ffa7942aac63767372a632f98a2e12b8847b09a" class="blame-commit-title" title="flowify Libraries/ReactIOS">flowify Libraries/ReactIOS</a>
            <div class="blame-commit-meta">
              <a href="/mroch" class="muted-link" rel="contributor">mroch</a> authored
              <time datetime="2015-03-26T00:49:46Z" is="relative-time">Mar 25, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L10">10</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC10"><span class="pl-c"> * @flow</span></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="4">
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-sha">efae175</a>
            <img alt="@sahrens" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1509831?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-commit-title" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
            <div class="blame-commit-meta">
              <a href="/sahrens" class="muted-link" rel="contributor">sahrens</a> authored
              <time datetime="2015-02-20T04:10:52Z" is="relative-time">Feb 20, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L11">11</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC11"><span class="pl-c"> */</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L12">12</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC12"><span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L13">13</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC13"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/6c5024ec585662cfba8391f98d23cb12ed8256ad" class="blame-sha">6c5024e</a>
            <img alt="@sebmarkbage" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/63648?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/6c5024ec585662cfba8391f98d23cb12ed8256ad" class="blame-commit-title" title="Refactor Attribute Processing (Step 1)

Summary: Concolidate the creation of the &quot;update payload&quot; into
ReactNativeAttributePayload which now has a create
and a diff version. The create version can be used by
both mountComponent and setNativeProps. This means that
diffRawProperties moves into ReactNativeAttributePayload.

Instead of storing previousFlattenedStyle as memoized
state in the component tree, I recalculate it every
time. This allows better use of the generational GC.
However, it is still probably a fairly expensive
technique so I will follow it up with a diff that
walks both nested array trees to do the diffing in a
follow up.

This is the first diff of several steps.

@​public

Reviewed By: @vjeux

Differential Revision: D2440644

fb-gh-sync-id: 1d0da4f6e2bf716f33e119df947c044abb918471">Refactor Attribute Processing (Step 1)</a>
            <div class="blame-commit-meta">
              <a href="/sebmarkbage" class="muted-link" rel="contributor">sebmarkbage</a> authored
              <time datetime="2015-10-06T02:19:16Z" is="relative-time">Oct 5, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L14">14</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC14"><span class="pl-k">var</span> ReactNativeAttributePayload <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>ReactNativeAttributePayload<span class="pl-pds">&#39;</span></span>);</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-sha">efae175</a>
            <img alt="@sahrens" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1509831?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-commit-title" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
            <div class="blame-commit-meta">
              <a href="/sahrens" class="muted-link" rel="contributor">sahrens</a> authored
              <time datetime="2015-02-20T04:10:52Z" is="relative-time">Feb 20, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L15">15</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC15"><span class="pl-k">var</span> TextInputState <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>TextInputState<span class="pl-pds">&#39;</span></span>);</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/60db876f666e256eba8527251ce7035cfbca6014" class="blame-sha">60db876</a>
            <img alt="@nicklockwood" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/546885?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/60db876f666e256eba8527251ce7035cfbca6014" class="blame-commit-title" title="Wrapped UIManager native module for better abstraction

Summary: public

RCTUIManager is a public module with several useful methods, however, unlike most such modules, it does not have a JS wrapper that would allow it to be required directly.

Besides making it more cumbersome to use, this also makes it impossible to modify the UIManager API, or smooth over differences between platforms in the JS layer without breaking all of the call sites.

This diff adds a simple JS wrapper file for the UIManager module to make it easier to work with.

Reviewed By: tadeuzagallo

Differential Revision: D2700348

fb-gh-sync-id: dd9030eface100b1baf756da11bae355dc0f266f">Wrapped UIManager native module for better abstraction</a>
            <div class="blame-commit-meta">
              <a href="/nicklockwood" class="muted-link" rel="contributor">nicklockwood</a> authored
              <time datetime="2015-11-27T13:39:00Z" is="relative-time">Nov 27, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="1"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L16">16</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC16"><span class="pl-k">var</span> UIManager <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>UIManager<span class="pl-pds">&#39;</span></span>);</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-sha">efae175</a>
            <img alt="@sahrens" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1509831?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-commit-title" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
            <div class="blame-commit-meta">
              <a href="/sahrens" class="muted-link" rel="contributor">sahrens</a> authored
              <time datetime="2015-02-20T04:10:52Z" is="relative-time">Feb 20, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L17">17</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC17"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/a0440daf98d525f77e21148c1702b92c577b7592" class="blame-sha">a0440da</a>
            <img alt="@spicyj" class="avatar blame-commit-avatar" height="32" src="https://avatars2.githubusercontent.com/u/6820?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/a0440daf98d525f77e21148c1702b92c577b7592" class="blame-commit-title" title="[react-native] Codemod .getNodeHandle, .getNativeNode to React.findNodeHandle">[react-native] Codemod .getNodeHandle, .getNativeNode to React.findNo…</a>
            <div class="blame-commit-meta">
              <a href="/spicyj" class="muted-link" rel="contributor">spicyj</a> authored
              <time datetime="2015-05-13T01:55:13Z" is="relative-time">May 12, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L18">18</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC18"><span class="pl-k">var</span> findNodeHandle <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>findNodeHandle<span class="pl-pds">&#39;</span></span>);</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="3">
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-sha">efae175</a>
            <img alt="@sahrens" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1509831?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-commit-title" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
            <div class="blame-commit-meta">
              <a href="/sahrens" class="muted-link" rel="contributor">sahrens</a> authored
              <time datetime="2015-02-20T04:10:52Z" is="relative-time">Feb 20, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L19">19</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC19"><span class="pl-k">var</span> invariant <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>invariant<span class="pl-pds">&#39;</span></span>);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L20">20</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC20"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="17">
            <a href="/facebook/react-native/commit/7ffa7942aac63767372a632f98a2e12b8847b09a" class="blame-sha">7ffa794</a>
            <img alt="@mroch" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/3012?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/7ffa7942aac63767372a632f98a2e12b8847b09a" class="blame-commit-title" title="flowify Libraries/ReactIOS">flowify Libraries/ReactIOS</a>
            <div class="blame-commit-meta">
              <a href="/mroch" class="muted-link" rel="contributor">mroch</a> authored
              <time datetime="2015-03-26T00:49:46Z" is="relative-time">Mar 26, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L21">21</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC21">type MeasureOnSuccessCallback <span class="pl-k">=</span> (</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L22">22</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC22">  x<span class="pl-k">:</span> number,</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L23">23</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC23">  y<span class="pl-k">:</span> number,</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L24">24</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC24">  width<span class="pl-k">:</span> number,</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L25">25</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC25">  height<span class="pl-k">:</span> number,</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L26">26</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC26">  pageX<span class="pl-k">:</span> number,</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L27">27</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC27">  pageY<span class="pl-k">:</span> number</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L28">28</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC28">) <span class="pl-k">=&gt;</span> <span class="pl-k">void</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L29">29</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC29"></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L30">30</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC30">type MeasureLayoutOnSuccessCallback <span class="pl-k">=</span> (</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L31">31</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC31">  left<span class="pl-k">:</span> number,</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L32">32</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC32">  top<span class="pl-k">:</span> number,</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L33">33</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC33">  width<span class="pl-k">:</span> number,</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L34">34</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC34">  height<span class="pl-k">:</span> number</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L35">35</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC35">) <span class="pl-k">=&gt;</span> <span class="pl-k">void</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L36">36</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC36"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="13">
            <a href="/facebook/react-native/commit/2ea3b9378498913b85691c69bad29acd89c08334" class="blame-sha">2ea3b93</a>
            <img alt="@sebmarkbage" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/63648?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/2ea3b9378498913b85691c69bad29acd89c08334" class="blame-commit-title" title="Add warning to setNativeProps and Animated for non-nested styles

Summary: These were accidentally supported because they were merged at a lower
level. That&#39;s an implementation detail. setNativeProps should still
normalize the API.

I fixed some callers.

Setting props the normal way used to ignore these. Unfortunately we can&#39;t
warn for those cases because lots of extra props are spread. (The classic
transferPropsTo issue.)

@​public

Reviewed By: @vjeux

Differential Revision: D2514228

fb-gh-sync-id: 00ed6073827dc1924da20f3d80cbdf68d8a8a8fc">Add warning to setNativeProps and Animated for non-nested styles</a>
            <div class="blame-commit-meta">
              <a href="/sebmarkbage" class="muted-link" rel="contributor">sebmarkbage</a> authored
              <time datetime="2015-10-06T22:19:58Z" is="relative-time">Oct 6, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L37">37</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC37"><span class="pl-k">function</span> <span class="pl-en">warnForStyleProps</span>(<span class="pl-smi">props</span>, <span class="pl-smi">validAttributes</span>) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L38">38</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC38">  <span class="pl-k">for</span> (<span class="pl-k">var</span> key <span class="pl-k">in</span> <span class="pl-smi">validAttributes</span>.<span class="pl-c1">style</span>) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L39">39</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC39">    <span class="pl-k">if</span> (<span class="pl-k">!</span>(validAttributes[key] <span class="pl-k">||</span> props[key] <span class="pl-k">===</span> <span class="pl-c1">undefined</span>)) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L40">40</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC40">      <span class="pl-en">console</span>.<span class="pl-c1">error</span>(</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L41">41</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC41">        <span class="pl-s"><span class="pl-pds">&#39;</span>You are setting the style `{ <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> key <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>: ... }` as a prop. You <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L42">42</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC42">        <span class="pl-s"><span class="pl-pds">&#39;</span>should nest it in a style object. <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L43">43</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC43">        <span class="pl-s"><span class="pl-pds">&#39;</span>E.g. `{ style: { <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> key <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>: ... } }`<span class="pl-pds">&#39;</span></span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L44">44</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC44">      );</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L45">45</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC45">    }</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L46">46</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC46">  }</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L47">47</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC47">}</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L48">48</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC48"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="13">
            <a href="/facebook/react-native/commit/381e2acd184fc4ba80a240ba3d7dda0464c6416b" class="blame-sha">381e2ac</a>
            <img alt="@corbt" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/176426?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/381e2acd184fc4ba80a240ba3d7dda0464c6416b" class="blame-commit-title" title="Document NativeMethodsMixin

Summary: This is related to the discussion in #3155.

I&#39;ve documented the methods in this mixin, and pointed to other appropriate documentation where necessary as well.

I didn&#39;t end up adding any examples. I wanted to add a `focus()`/`blur()` example to the UIExplorer app, but the app seems to be broken on master at the moment (`Requiring unknown module &quot;event-target-shim&quot;`) and I didn&#39;t bother trying to fix it. I think the last thing necessary for making the usage of these methods clear is an example of calling one or more of them on a `ref` or view captured in some other way. However, `setNativeProps` is well documented in the &quot;Direct Manipulation&quot; guide, which I link to from this page, so by extension it should be possible to figure out the functionality of the other methods.

cc @mkonicek @​astreet
Closes https://github.com/facebook/react-native/pull/3238

Reviewed By: @​svcscm

Differential Revision: D2517187

Pulled By: @mkonicek

fb-gh-sync-id: 4e68b2bc44ace83f06ae2e364ca0c23a7c461b20">Document NativeMethodsMixin</a>
            <div class="blame-commit-meta">
              <a href="/corbt" class="muted-link" rel="contributor">corbt</a> authored
              <time datetime="2015-10-07T16:32:35Z" is="relative-time">Oct 7, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L49">49</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC49"><span class="pl-c">/**</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L50">50</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC50"><span class="pl-c"> * `NativeMethodsMixin` provides methods to access the underlying native</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L51">51</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC51"><span class="pl-c"> * component directly. This can be useful in cases when you want to focus</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L52">52</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC52"><span class="pl-c"> * a view or measure its on-screen dimensions, for example.</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L53">53</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC53"><span class="pl-c"> *</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L54">54</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC54"><span class="pl-c"> * The methods described here are available on most of the default components</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L55">55</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC55"><span class="pl-c"> * provided by React Native. Note, however, that they are *not* available on</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L56">56</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC56"><span class="pl-c"> * composite components that aren&#39;t directly backed by a native view. This will</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L57">57</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC57"><span class="pl-c"> * generally include most components that you define in your own app. For more</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L58">58</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC58"><span class="pl-c"> * information, see [Direct</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L59">59</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC59"><span class="pl-c"> * Manipulation](/react-native/docs/direct-manipulation.html).</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L60">60</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC60"><span class="pl-c"> */</span></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-sha">efae175</a>
            <img alt="@sahrens" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1509831?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-commit-title" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
            <div class="blame-commit-meta">
              <a href="/sahrens" class="muted-link" rel="contributor">sahrens</a> authored
              <time datetime="2015-02-20T04:10:52Z" is="relative-time">Feb 20, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L61">61</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC61"><span class="pl-k">var</span> NativeMethodsMixin <span class="pl-k">=</span> {</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="18">
            <a href="/facebook/react-native/commit/381e2acd184fc4ba80a240ba3d7dda0464c6416b" class="blame-sha">381e2ac</a>
            <img alt="@corbt" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/176426?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/381e2acd184fc4ba80a240ba3d7dda0464c6416b" class="blame-commit-title" title="Document NativeMethodsMixin

Summary: This is related to the discussion in #3155.

I&#39;ve documented the methods in this mixin, and pointed to other appropriate documentation where necessary as well.

I didn&#39;t end up adding any examples. I wanted to add a `focus()`/`blur()` example to the UIExplorer app, but the app seems to be broken on master at the moment (`Requiring unknown module &quot;event-target-shim&quot;`) and I didn&#39;t bother trying to fix it. I think the last thing necessary for making the usage of these methods clear is an example of calling one or more of them on a `ref` or view captured in some other way. However, `setNativeProps` is well documented in the &quot;Direct Manipulation&quot; guide, which I link to from this page, so by extension it should be possible to figure out the functionality of the other methods.

cc @mkonicek @​astreet
Closes https://github.com/facebook/react-native/pull/3238

Reviewed By: @​svcscm

Differential Revision: D2517187

Pulled By: @mkonicek

fb-gh-sync-id: 4e68b2bc44ace83f06ae2e364ca0c23a7c461b20">Document NativeMethodsMixin</a>
            <div class="blame-commit-meta">
              <a href="/corbt" class="muted-link" rel="contributor">corbt</a> authored
              <time datetime="2015-10-07T16:32:35Z" is="relative-time">Oct 7, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L62">62</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC62">  <span class="pl-c">/**</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L63">63</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC63"><span class="pl-c">   * Determines the location on screen, width, and height of the given view and</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L64">64</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC64"><span class="pl-c">   * returns the values via an async callback. If successful, the callback will</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L65">65</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC65"><span class="pl-c">   * be called with the following arguments:</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L66">66</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC66"><span class="pl-c">   *</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L67">67</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC67"><span class="pl-c">   *  - x</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L68">68</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC68"><span class="pl-c">   *  - y</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L69">69</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC69"><span class="pl-c">   *  - width</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L70">70</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC70"><span class="pl-c">   *  - height</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L71">71</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC71"><span class="pl-c">   *  - pageX</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L72">72</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC72"><span class="pl-c">   *  - pageY</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L73">73</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC73"><span class="pl-c">   *</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L74">74</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC74"><span class="pl-c">   * Note that these measurements are not available until after the rendering</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L75">75</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC75"><span class="pl-c">   * has been completed in native. If you need the measurements as soon as</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L76">76</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC76"><span class="pl-c">   * possible, consider using the [`onLayout`</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L77">77</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC77"><span class="pl-c">   * prop](/react-native/docs/view.html#onlayout) instead.</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L78">78</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC78"><span class="pl-c">   */</span></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/7ffa7942aac63767372a632f98a2e12b8847b09a" class="blame-sha">7ffa794</a>
            <img alt="@mroch" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/3012?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/7ffa7942aac63767372a632f98a2e12b8847b09a" class="blame-commit-title" title="flowify Libraries/ReactIOS">flowify Libraries/ReactIOS</a>
            <div class="blame-commit-meta">
              <a href="/mroch" class="muted-link" rel="contributor">mroch</a> authored
              <time datetime="2015-03-26T00:49:46Z" is="relative-time">Mar 26, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L79">79</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC79">  <span class="pl-en">measure</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">callback</span>: <span class="pl-smi">MeasureOnSuccessCallback</span>) {</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/60db876f666e256eba8527251ce7035cfbca6014" class="blame-sha">60db876</a>
            <img alt="@nicklockwood" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/546885?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/60db876f666e256eba8527251ce7035cfbca6014" class="blame-commit-title" title="Wrapped UIManager native module for better abstraction

Summary: public

RCTUIManager is a public module with several useful methods, however, unlike most such modules, it does not have a JS wrapper that would allow it to be required directly.

Besides making it more cumbersome to use, this also makes it impossible to modify the UIManager API, or smooth over differences between platforms in the JS layer without breaking all of the call sites.

This diff adds a simple JS wrapper file for the UIManager module to make it easier to work with.

Reviewed By: tadeuzagallo

Differential Revision: D2700348

fb-gh-sync-id: dd9030eface100b1baf756da11bae355dc0f266f">Wrapped UIManager native module for better abstraction</a>
            <div class="blame-commit-meta">
              <a href="/nicklockwood" class="muted-link" rel="contributor">nicklockwood</a> authored
              <time datetime="2015-11-27T13:39:00Z" is="relative-time">Nov 27, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="1"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L80">80</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC80">    <span class="pl-smi">UIManager</span>.<span class="pl-en">measure</span>(</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="4">
            <a href="/facebook/react-native/commit/6e179fb7cd68c92f8abd94d381f85c41298c828c" class="blame-sha">6e179fb</a>
            <img alt="@sahrens" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1509831?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/6e179fb7cd68c92f8abd94d381f85c41298c828c" class="blame-commit-title" title="[ReactNative] introduce mountSafeCallback

Summary:
`mountSafeCallback` simply wraps a callback in an `isMounted()` check to prevent crashes when old callbacks are called on unmounted components.

@public

Test Plan:
Added logging and made sure callbacks were getting called through
`mountSafeCallback` and that things worked (e.g. photo viewer rotation etc).">[ReactNative] introduce mountSafeCallback</a>
            <div class="blame-commit-meta">
              <a href="/sahrens" class="muted-link" rel="contributor">sahrens</a> authored
              <time datetime="2015-05-14T01:33:43Z" is="relative-time">May 13, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L81">81</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC81">      <span class="pl-en">findNodeHandle</span>(<span class="pl-v">this</span>),</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L82">82</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC82">      <span class="pl-en">mountSafeCallback</span>(<span class="pl-v">this</span>, callback)</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L83">83</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC83">    );</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="3">
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-sha">efae175</a>
            <img alt="@sahrens" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1509831?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-commit-title" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
            <div class="blame-commit-meta">
              <a href="/sahrens" class="muted-link" rel="contributor">sahrens</a> authored
              <time datetime="2015-02-20T04:10:52Z" is="relative-time">Feb 20, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L84">84</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC84">  },</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L85">85</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC85"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="9">
            <a href="/facebook/react-native/commit/381e2acd184fc4ba80a240ba3d7dda0464c6416b" class="blame-sha">381e2ac</a>
            <img alt="@corbt" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/176426?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/381e2acd184fc4ba80a240ba3d7dda0464c6416b" class="blame-commit-title" title="Document NativeMethodsMixin

Summary: This is related to the discussion in #3155.

I&#39;ve documented the methods in this mixin, and pointed to other appropriate documentation where necessary as well.

I didn&#39;t end up adding any examples. I wanted to add a `focus()`/`blur()` example to the UIExplorer app, but the app seems to be broken on master at the moment (`Requiring unknown module &quot;event-target-shim&quot;`) and I didn&#39;t bother trying to fix it. I think the last thing necessary for making the usage of these methods clear is an example of calling one or more of them on a `ref` or view captured in some other way. However, `setNativeProps` is well documented in the &quot;Direct Manipulation&quot; guide, which I link to from this page, so by extension it should be possible to figure out the functionality of the other methods.

cc @mkonicek @​astreet
Closes https://github.com/facebook/react-native/pull/3238

Reviewed By: @​svcscm

Differential Revision: D2517187

Pulled By: @mkonicek

fb-gh-sync-id: 4e68b2bc44ace83f06ae2e364ca0c23a7c461b20">Document NativeMethodsMixin</a>
            <div class="blame-commit-meta">
              <a href="/corbt" class="muted-link" rel="contributor">corbt</a> authored
              <time datetime="2015-10-07T16:32:35Z" is="relative-time">Oct 7, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L86">86</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC86">  <span class="pl-c">/**</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L87">87</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC87"><span class="pl-c">   * Like [`measure()`](#measure), but measures the view relative an ancestor,</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L88">88</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC88"><span class="pl-c">   * specified as `relativeToNativeNode`. This means that the returned x, y</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L89">89</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC89"><span class="pl-c">   * are relative to the origin x, y of the ancestor view.</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L90">90</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC90"><span class="pl-c">   *</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L91">91</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC91"><span class="pl-c">   * As always, to obtain a native node handle for a component, you can use</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L92">92</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC92"><span class="pl-c">   * `React.findNodeHandle(component)`.</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L93">93</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC93"><span class="pl-c">   */</span></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="6">
            <a href="/facebook/react-native/commit/7ffa7942aac63767372a632f98a2e12b8847b09a" class="blame-sha">7ffa794</a>
            <img alt="@mroch" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/3012?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/7ffa7942aac63767372a632f98a2e12b8847b09a" class="blame-commit-title" title="flowify Libraries/ReactIOS">flowify Libraries/ReactIOS</a>
            <div class="blame-commit-meta">
              <a href="/mroch" class="muted-link" rel="contributor">mroch</a> authored
              <time datetime="2015-03-26T00:49:46Z" is="relative-time">Mar 26, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L94">94</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC94">  <span class="pl-en">measureLayout</span><span class="pl-k">:</span> <span class="pl-k">function</span>(</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L95">95</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC95">    <span class="pl-smi">relativeToNativeNode</span>: <span class="pl-smi">number</span>,</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L96">96</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC96">    <span class="pl-smi">onSuccess</span>: <span class="pl-smi">MeasureLayoutOnSuccessCallback</span>,</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L97">97</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC97">    <span class="pl-smi">onFail</span>: () <span class="pl-k">=&gt;</span> <span class="pl-k">void</span> <span class="pl-c">/* currently unused */</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L98">98</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC98">  ) {</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/60db876f666e256eba8527251ce7035cfbca6014" class="blame-sha">60db876</a>
            <img alt="@nicklockwood" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/546885?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/60db876f666e256eba8527251ce7035cfbca6014" class="blame-commit-title" title="Wrapped UIManager native module for better abstraction

Summary: public

RCTUIManager is a public module with several useful methods, however, unlike most such modules, it does not have a JS wrapper that would allow it to be required directly.

Besides making it more cumbersome to use, this also makes it impossible to modify the UIManager API, or smooth over differences between platforms in the JS layer without breaking all of the call sites.

This diff adds a simple JS wrapper file for the UIManager module to make it easier to work with.

Reviewed By: tadeuzagallo

Differential Revision: D2700348

fb-gh-sync-id: dd9030eface100b1baf756da11bae355dc0f266f">Wrapped UIManager native module for better abstraction</a>
            <div class="blame-commit-meta">
              <a href="/nicklockwood" class="muted-link" rel="contributor">nicklockwood</a> authored
              <time datetime="2015-11-27T13:39:00Z" is="relative-time">Nov 27, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="1"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L99">99</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC99">    <span class="pl-smi">UIManager</span>.<span class="pl-en">measureLayout</span>(</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/a0440daf98d525f77e21148c1702b92c577b7592" class="blame-sha">a0440da</a>
            <img alt="@spicyj" class="avatar blame-commit-avatar" height="32" src="https://avatars2.githubusercontent.com/u/6820?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/a0440daf98d525f77e21148c1702b92c577b7592" class="blame-commit-title" title="[react-native] Codemod .getNodeHandle, .getNativeNode to React.findNodeHandle">[react-native] Codemod .getNodeHandle, .getNativeNode to React.findNo…</a>
            <div class="blame-commit-meta">
              <a href="/spicyj" class="muted-link" rel="contributor">spicyj</a> authored
              <time datetime="2015-05-13T01:55:13Z" is="relative-time">May 13, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L100">100</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC100">      <span class="pl-en">findNodeHandle</span>(<span class="pl-v">this</span>),</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-sha">efae175</a>
            <img alt="@sahrens" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1509831?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-commit-title" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
            <div class="blame-commit-meta">
              <a href="/sahrens" class="muted-link" rel="contributor">sahrens</a> authored
              <time datetime="2015-02-20T04:10:52Z" is="relative-time">Feb 20, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L101">101</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC101">      relativeToNativeNode,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="3">
            <a href="/facebook/react-native/commit/6e179fb7cd68c92f8abd94d381f85c41298c828c" class="blame-sha">6e179fb</a>
            <img alt="@sahrens" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1509831?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/6e179fb7cd68c92f8abd94d381f85c41298c828c" class="blame-commit-title" title="[ReactNative] introduce mountSafeCallback

Summary:
`mountSafeCallback` simply wraps a callback in an `isMounted()` check to prevent crashes when old callbacks are called on unmounted components.

@public

Test Plan:
Added logging and made sure callbacks were getting called through
`mountSafeCallback` and that things worked (e.g. photo viewer rotation etc).">[ReactNative] introduce mountSafeCallback</a>
            <div class="blame-commit-meta">
              <a href="/sahrens" class="muted-link" rel="contributor">sahrens</a> authored
              <time datetime="2015-05-14T01:33:43Z" is="relative-time">May 14, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L102">102</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC102">      <span class="pl-en">mountSafeCallback</span>(<span class="pl-v">this</span>, onFail),</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L103">103</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC103">      <span class="pl-en">mountSafeCallback</span>(<span class="pl-v">this</span>, onSuccess)</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="5">
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-sha">efae175</a>
            <img alt="@sahrens" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1509831?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-commit-title" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
            <div class="blame-commit-meta">
              <a href="/sahrens" class="muted-link" rel="contributor">sahrens</a> authored
              <time datetime="2015-02-20T04:10:52Z" is="relative-time">Feb 20, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L104">104</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC104">    );</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L105">105</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC105">  },</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L106">106</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC106"></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L107">107</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC107">  <span class="pl-c">/**</span></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="5">
            <a href="/facebook/react-native/commit/381e2acd184fc4ba80a240ba3d7dda0464c6416b" class="blame-sha">381e2ac</a>
            <img alt="@corbt" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/176426?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/381e2acd184fc4ba80a240ba3d7dda0464c6416b" class="blame-commit-title" title="Document NativeMethodsMixin

Summary: This is related to the discussion in #3155.

I&#39;ve documented the methods in this mixin, and pointed to other appropriate documentation where necessary as well.

I didn&#39;t end up adding any examples. I wanted to add a `focus()`/`blur()` example to the UIExplorer app, but the app seems to be broken on master at the moment (`Requiring unknown module &quot;event-target-shim&quot;`) and I didn&#39;t bother trying to fix it. I think the last thing necessary for making the usage of these methods clear is an example of calling one or more of them on a `ref` or view captured in some other way. However, `setNativeProps` is well documented in the &quot;Direct Manipulation&quot; guide, which I link to from this page, so by extension it should be possible to figure out the functionality of the other methods.

cc @mkonicek @​astreet
Closes https://github.com/facebook/react-native/pull/3238

Reviewed By: @​svcscm

Differential Revision: D2517187

Pulled By: @mkonicek

fb-gh-sync-id: 4e68b2bc44ace83f06ae2e364ca0c23a7c461b20">Document NativeMethodsMixin</a>
            <div class="blame-commit-meta">
              <a href="/corbt" class="muted-link" rel="contributor">corbt</a> authored
              <time datetime="2015-10-07T16:32:35Z" is="relative-time">Oct 7, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L108">108</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC108"><span class="pl-c">   * This function sends props straight to native. They will not participate in</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L109">109</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC109"><span class="pl-c">   * future diff process - this means that if you do not include them in the</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L110">110</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC110"><span class="pl-c">   * next render, they will remain active (see [Direct</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L111">111</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC111"><span class="pl-c">   * Manipulation](/react-native/docs/direct-manipulation.html)).</span></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-sha">efae175</a>
            <img alt="@sahrens" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1509831?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-commit-title" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
            <div class="blame-commit-meta">
              <a href="/sahrens" class="muted-link" rel="contributor">sahrens</a> authored
              <time datetime="2015-02-20T04:10:52Z" is="relative-time">Feb 20, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L112">112</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC112"><span class="pl-c">   */</span></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/7ffa7942aac63767372a632f98a2e12b8847b09a" class="blame-sha">7ffa794</a>
            <img alt="@mroch" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/3012?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/7ffa7942aac63767372a632f98a2e12b8847b09a" class="blame-commit-title" title="flowify Libraries/ReactIOS">flowify Libraries/ReactIOS</a>
            <div class="blame-commit-meta">
              <a href="/mroch" class="muted-link" rel="contributor">mroch</a> authored
              <time datetime="2015-03-26T00:49:46Z" is="relative-time">Mar 26, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L113">113</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC113">  <span class="pl-en">setNativeProps</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">nativeProps</span>: <span class="pl-smi">Object</span>) {</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="5">
            <a href="/facebook/react-native/commit/2ea3b9378498913b85691c69bad29acd89c08334" class="blame-sha">2ea3b93</a>
            <img alt="@sebmarkbage" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/63648?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/2ea3b9378498913b85691c69bad29acd89c08334" class="blame-commit-title" title="Add warning to setNativeProps and Animated for non-nested styles

Summary: These were accidentally supported because they were merged at a lower
level. That&#39;s an implementation detail. setNativeProps should still
normalize the API.

I fixed some callers.

Setting props the normal way used to ignore these. Unfortunately we can&#39;t
warn for those cases because lots of extra props are spread. (The classic
transferPropsTo issue.)

@​public

Reviewed By: @vjeux

Differential Revision: D2514228

fb-gh-sync-id: 00ed6073827dc1924da20f3d80cbdf68d8a8a8fc">Add warning to setNativeProps and Animated for non-nested styles</a>
            <div class="blame-commit-meta">
              <a href="/sebmarkbage" class="muted-link" rel="contributor">sebmarkbage</a> authored
              <time datetime="2015-10-06T22:19:58Z" is="relative-time">Oct 6, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L114">114</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC114">    <span class="pl-k">if</span> (__DEV__) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L115">115</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC115">      <span class="pl-en">warnForStyleProps</span>(nativeProps, <span class="pl-smi">this</span>.<span class="pl-smi">viewConfig</span>.<span class="pl-smi">validAttributes</span>);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L116">116</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC116">    }</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L117">117</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC117"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="3">
            <a href="/facebook/react-native/commit/6c5024ec585662cfba8391f98d23cb12ed8256ad" class="blame-sha">6c5024e</a>
            <img alt="@sebmarkbage" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/63648?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/6c5024ec585662cfba8391f98d23cb12ed8256ad" class="blame-commit-title" title="Refactor Attribute Processing (Step 1)

Summary: Concolidate the creation of the &quot;update payload&quot; into
ReactNativeAttributePayload which now has a create
and a diff version. The create version can be used by
both mountComponent and setNativeProps. This means that
diffRawProperties moves into ReactNativeAttributePayload.

Instead of storing previousFlattenedStyle as memoized
state in the component tree, I recalculate it every
time. This allows better use of the generational GC.
However, it is still probably a fairly expensive
technique so I will follow it up with a diff that
walks both nested array trees to do the diffing in a
follow up.

This is the first diff of several steps.

@​public

Reviewed By: @vjeux

Differential Revision: D2440644

fb-gh-sync-id: 1d0da4f6e2bf716f33e119df947c044abb918471">Refactor Attribute Processing (Step 1)</a>
            <div class="blame-commit-meta">
              <a href="/sebmarkbage" class="muted-link" rel="contributor">sebmarkbage</a> authored
              <time datetime="2015-10-06T02:19:16Z" is="relative-time">Oct 6, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L118">118</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC118">    <span class="pl-k">var</span> updatePayload <span class="pl-k">=</span> <span class="pl-smi">ReactNativeAttributePayload</span>.<span class="pl-en">create</span>(</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L119">119</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC119">      nativeProps,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="3">
            <a href="/facebook/react-native/commit/9a2d05d9b2aea459ef3b3e92376cf15bca4d17fa" class="blame-sha">9a2d05d</a>
            <img alt="@a2" class="avatar blame-commit-avatar" height="32" src="https://avatars2.githubusercontent.com/u/241156?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/9a2d05d9b2aea459ef3b3e92376cf15bca4d17fa" class="blame-commit-title" title="Move color processing to JS

Reviewed By: @vjeux

Differential Revision: D2346353">Move color processing to JS</a>
            <div class="blame-commit-meta">
              <a href="/a2" class="muted-link" rel="contributor">a2</a> authored
              <time datetime="2015-09-17T15:36:08Z" is="relative-time">Sep 17, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L120">120</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC120">      <span class="pl-smi">this</span>.<span class="pl-smi">viewConfig</span>.<span class="pl-smi">validAttributes</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L121">121</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC121">    );</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-sha">efae175</a>
            <img alt="@sahrens" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1509831?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-commit-title" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
            <div class="blame-commit-meta">
              <a href="/sahrens" class="muted-link" rel="contributor">sahrens</a> authored
              <time datetime="2015-02-20T04:10:52Z" is="relative-time">Feb 20, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L122">122</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC122"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/60db876f666e256eba8527251ce7035cfbca6014" class="blame-sha">60db876</a>
            <img alt="@nicklockwood" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/546885?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/60db876f666e256eba8527251ce7035cfbca6014" class="blame-commit-title" title="Wrapped UIManager native module for better abstraction

Summary: public

RCTUIManager is a public module with several useful methods, however, unlike most such modules, it does not have a JS wrapper that would allow it to be required directly.

Besides making it more cumbersome to use, this also makes it impossible to modify the UIManager API, or smooth over differences between platforms in the JS layer without breaking all of the call sites.

This diff adds a simple JS wrapper file for the UIManager module to make it easier to work with.

Reviewed By: tadeuzagallo

Differential Revision: D2700348

fb-gh-sync-id: dd9030eface100b1baf756da11bae355dc0f266f">Wrapped UIManager native module for better abstraction</a>
            <div class="blame-commit-meta">
              <a href="/nicklockwood" class="muted-link" rel="contributor">nicklockwood</a> authored
              <time datetime="2015-11-27T13:39:00Z" is="relative-time">Nov 27, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="1"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L123">123</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC123">    <span class="pl-smi">UIManager</span>.<span class="pl-en">updateView</span>(</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/a0440daf98d525f77e21148c1702b92c577b7592" class="blame-sha">a0440da</a>
            <img alt="@spicyj" class="avatar blame-commit-avatar" height="32" src="https://avatars2.githubusercontent.com/u/6820?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/a0440daf98d525f77e21148c1702b92c577b7592" class="blame-commit-title" title="[react-native] Codemod .getNodeHandle, .getNativeNode to React.findNodeHandle">[react-native] Codemod .getNodeHandle, .getNativeNode to React.findNo…</a>
            <div class="blame-commit-meta">
              <a href="/spicyj" class="muted-link" rel="contributor">spicyj</a> authored
              <time datetime="2015-05-13T01:55:13Z" is="relative-time">May 13, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L124">124</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC124">      <span class="pl-en">findNodeHandle</span>(<span class="pl-v">this</span>),</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-sha">efae175</a>
            <img alt="@sahrens" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1509831?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-commit-title" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
            <div class="blame-commit-meta">
              <a href="/sahrens" class="muted-link" rel="contributor">sahrens</a> authored
              <time datetime="2015-02-20T04:10:52Z" is="relative-time">Feb 20, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L125">125</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC125">      <span class="pl-smi">this</span>.<span class="pl-smi">viewConfig</span>.<span class="pl-smi">uiViewClassName</span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/6c5024ec585662cfba8391f98d23cb12ed8256ad" class="blame-sha">6c5024e</a>
            <img alt="@sebmarkbage" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/63648?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/6c5024ec585662cfba8391f98d23cb12ed8256ad" class="blame-commit-title" title="Refactor Attribute Processing (Step 1)

Summary: Concolidate the creation of the &quot;update payload&quot; into
ReactNativeAttributePayload which now has a create
and a diff version. The create version can be used by
both mountComponent and setNativeProps. This means that
diffRawProperties moves into ReactNativeAttributePayload.

Instead of storing previousFlattenedStyle as memoized
state in the component tree, I recalculate it every
time. This allows better use of the generational GC.
However, it is still probably a fairly expensive
technique so I will follow it up with a diff that
walks both nested array trees to do the diffing in a
follow up.

This is the first diff of several steps.

@​public

Reviewed By: @vjeux

Differential Revision: D2440644

fb-gh-sync-id: 1d0da4f6e2bf716f33e119df947c044abb918471">Refactor Attribute Processing (Step 1)</a>
            <div class="blame-commit-meta">
              <a href="/sebmarkbage" class="muted-link" rel="contributor">sebmarkbage</a> authored
              <time datetime="2015-10-06T02:19:16Z" is="relative-time">Oct 6, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L126">126</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC126">      updatePayload</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="4">
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-sha">efae175</a>
            <img alt="@sahrens" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1509831?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-commit-title" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
            <div class="blame-commit-meta">
              <a href="/sahrens" class="muted-link" rel="contributor">sahrens</a> authored
              <time datetime="2015-02-20T04:10:52Z" is="relative-time">Feb 20, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L127">127</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC127">    );</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L128">128</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC128">  },</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L129">129</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC129"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="5">
            <a href="/facebook/react-native/commit/381e2acd184fc4ba80a240ba3d7dda0464c6416b" class="blame-sha">381e2ac</a>
            <img alt="@corbt" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/176426?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/381e2acd184fc4ba80a240ba3d7dda0464c6416b" class="blame-commit-title" title="Document NativeMethodsMixin

Summary: This is related to the discussion in #3155.

I&#39;ve documented the methods in this mixin, and pointed to other appropriate documentation where necessary as well.

I didn&#39;t end up adding any examples. I wanted to add a `focus()`/`blur()` example to the UIExplorer app, but the app seems to be broken on master at the moment (`Requiring unknown module &quot;event-target-shim&quot;`) and I didn&#39;t bother trying to fix it. I think the last thing necessary for making the usage of these methods clear is an example of calling one or more of them on a `ref` or view captured in some other way. However, `setNativeProps` is well documented in the &quot;Direct Manipulation&quot; guide, which I link to from this page, so by extension it should be possible to figure out the functionality of the other methods.

cc @mkonicek @​astreet
Closes https://github.com/facebook/react-native/pull/3238

Reviewed By: @​svcscm

Differential Revision: D2517187

Pulled By: @mkonicek

fb-gh-sync-id: 4e68b2bc44ace83f06ae2e364ca0c23a7c461b20">Document NativeMethodsMixin</a>
            <div class="blame-commit-meta">
              <a href="/corbt" class="muted-link" rel="contributor">corbt</a> authored
              <time datetime="2015-10-07T16:32:35Z" is="relative-time">Oct 7, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L130">130</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC130">  <span class="pl-c">/**</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L131">131</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC131"><span class="pl-c">   * Requests focus for the given input or view. The exact behavior triggered</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L132">132</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC132"><span class="pl-c">   * will depend on the platform and type of view.</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L133">133</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC133"><span class="pl-c">   */</span></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-sha">efae175</a>
            <img alt="@sahrens" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1509831?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-commit-title" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
            <div class="blame-commit-meta">
              <a href="/sahrens" class="muted-link" rel="contributor">sahrens</a> authored
              <time datetime="2015-02-20T04:10:52Z" is="relative-time">Feb 20, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L134">134</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC134">  <span class="pl-en">focus</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/a0440daf98d525f77e21148c1702b92c577b7592" class="blame-sha">a0440da</a>
            <img alt="@spicyj" class="avatar blame-commit-avatar" height="32" src="https://avatars2.githubusercontent.com/u/6820?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/a0440daf98d525f77e21148c1702b92c577b7592" class="blame-commit-title" title="[react-native] Codemod .getNodeHandle, .getNativeNode to React.findNodeHandle">[react-native] Codemod .getNodeHandle, .getNativeNode to React.findNo…</a>
            <div class="blame-commit-meta">
              <a href="/spicyj" class="muted-link" rel="contributor">spicyj</a> authored
              <time datetime="2015-05-13T01:55:13Z" is="relative-time">May 13, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L135">135</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC135">    <span class="pl-smi">TextInputState</span>.<span class="pl-en">focusTextInput</span>(<span class="pl-en">findNodeHandle</span>(<span class="pl-v">this</span>));</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="3">
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-sha">efae175</a>
            <img alt="@sahrens" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1509831?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-commit-title" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
            <div class="blame-commit-meta">
              <a href="/sahrens" class="muted-link" rel="contributor">sahrens</a> authored
              <time datetime="2015-02-20T04:10:52Z" is="relative-time">Feb 20, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L136">136</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC136">  },</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L137">137</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC137"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="4">
            <a href="/facebook/react-native/commit/381e2acd184fc4ba80a240ba3d7dda0464c6416b" class="blame-sha">381e2ac</a>
            <img alt="@corbt" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/176426?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/381e2acd184fc4ba80a240ba3d7dda0464c6416b" class="blame-commit-title" title="Document NativeMethodsMixin

Summary: This is related to the discussion in #3155.

I&#39;ve documented the methods in this mixin, and pointed to other appropriate documentation where necessary as well.

I didn&#39;t end up adding any examples. I wanted to add a `focus()`/`blur()` example to the UIExplorer app, but the app seems to be broken on master at the moment (`Requiring unknown module &quot;event-target-shim&quot;`) and I didn&#39;t bother trying to fix it. I think the last thing necessary for making the usage of these methods clear is an example of calling one or more of them on a `ref` or view captured in some other way. However, `setNativeProps` is well documented in the &quot;Direct Manipulation&quot; guide, which I link to from this page, so by extension it should be possible to figure out the functionality of the other methods.

cc @mkonicek @​astreet
Closes https://github.com/facebook/react-native/pull/3238

Reviewed By: @​svcscm

Differential Revision: D2517187

Pulled By: @mkonicek

fb-gh-sync-id: 4e68b2bc44ace83f06ae2e364ca0c23a7c461b20">Document NativeMethodsMixin</a>
            <div class="blame-commit-meta">
              <a href="/corbt" class="muted-link" rel="contributor">corbt</a> authored
              <time datetime="2015-10-07T16:32:35Z" is="relative-time">Oct 7, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L138">138</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC138">  <span class="pl-c">/**</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L139">139</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC139"><span class="pl-c">   * Removes focus from an input or view. This is the opposite of `focus()`.</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L140">140</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC140"><span class="pl-c">   */</span></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-sha">efae175</a>
            <img alt="@sahrens" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1509831?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-commit-title" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
            <div class="blame-commit-meta">
              <a href="/sahrens" class="muted-link" rel="contributor">sahrens</a> authored
              <time datetime="2015-02-20T04:10:52Z" is="relative-time">Feb 20, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L141">141</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC141">  <span class="pl-en">blur</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/a0440daf98d525f77e21148c1702b92c577b7592" class="blame-sha">a0440da</a>
            <img alt="@spicyj" class="avatar blame-commit-avatar" height="32" src="https://avatars2.githubusercontent.com/u/6820?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/a0440daf98d525f77e21148c1702b92c577b7592" class="blame-commit-title" title="[react-native] Codemod .getNodeHandle, .getNativeNode to React.findNodeHandle">[react-native] Codemod .getNodeHandle, .getNativeNode to React.findNo…</a>
            <div class="blame-commit-meta">
              <a href="/spicyj" class="muted-link" rel="contributor">spicyj</a> authored
              <time datetime="2015-05-13T01:55:13Z" is="relative-time">May 13, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L142">142</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC142">    <span class="pl-smi">TextInputState</span>.<span class="pl-en">blurTextInput</span>(<span class="pl-en">findNodeHandle</span>(<span class="pl-v">this</span>));</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="18">
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-sha">efae175</a>
            <img alt="@sahrens" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1509831?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-commit-title" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
            <div class="blame-commit-meta">
              <a href="/sahrens" class="muted-link" rel="contributor">sahrens</a> authored
              <time datetime="2015-02-20T04:10:52Z" is="relative-time">Feb 20, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L143">143</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC143">  }</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L144">144</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC144">};</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L145">145</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC145"></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L146">146</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC146"><span class="pl-k">function</span> <span class="pl-en">throwOnStylesProp</span>(<span class="pl-smi">component</span>, <span class="pl-smi">props</span>) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L147">147</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC147">  <span class="pl-k">if</span> (<span class="pl-smi">props</span>.<span class="pl-smi">styles</span> <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L148">148</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC148">    <span class="pl-k">var</span> owner <span class="pl-k">=</span> <span class="pl-smi">component</span>.<span class="pl-smi">_owner</span> <span class="pl-k">||</span> <span class="pl-c1">null</span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L149">149</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC149">    <span class="pl-k">var</span> name <span class="pl-k">=</span> <span class="pl-smi">component</span>.<span class="pl-c1">constructor</span>.<span class="pl-smi">displayName</span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L150">150</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC150">    <span class="pl-k">var</span> msg <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>`styles` is not a supported property of `<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> name <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>`, did <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L151">151</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC151">      <span class="pl-s"><span class="pl-pds">&#39;</span>you mean `style` (singular)?<span class="pl-pds">&#39;</span></span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L152">152</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC152">    <span class="pl-k">if</span> (owner <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">owner</span>.<span class="pl-c1">constructor</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">owner</span>.<span class="pl-c1">constructor</span>.<span class="pl-smi">displayName</span>) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L153">153</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC153">      msg <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\n\n</span>Check the `<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">owner</span>.<span class="pl-c1">constructor</span>.<span class="pl-smi">displayName</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>` parent <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L154">154</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC154">        <span class="pl-s"><span class="pl-pds">&#39;</span> component.<span class="pl-pds">&#39;</span></span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L155">155</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC155">    }</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L156">156</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC156">    <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(msg);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L157">157</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC157">  }</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L158">158</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC158">}</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L159">159</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC159"><span class="pl-k">if</span> (__DEV__) {</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="5">
            <a href="/facebook/react-native/commit/7ffa7942aac63767372a632f98a2e12b8847b09a" class="blame-sha">7ffa794</a>
            <img alt="@mroch" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/3012?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/7ffa7942aac63767372a632f98a2e12b8847b09a" class="blame-commit-title" title="flowify Libraries/ReactIOS">flowify Libraries/ReactIOS</a>
            <div class="blame-commit-meta">
              <a href="/mroch" class="muted-link" rel="contributor">mroch</a> authored
              <time datetime="2015-03-26T00:49:46Z" is="relative-time">Mar 26, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L160">160</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC160">  <span class="pl-c">// hide this from Flow since we can&#39;t define these properties outside of</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L161">161</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC161">  <span class="pl-c">// __DEV__ without actually implementing them (setting them to undefined</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L162">162</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC162">  <span class="pl-c">// isn&#39;t allowed by ReactClass)</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L163">163</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC163">  <span class="pl-k">var</span> NativeMethodsMixin_DEV <span class="pl-k">=</span> (NativeMethodsMixin<span class="pl-k">:</span> any);</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-sha">efae175</a>
            <img alt="@sahrens" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1509831?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-commit-title" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
            <div class="blame-commit-meta">
              <a href="/sahrens" class="muted-link" rel="contributor">sahrens</a> authored
              <time datetime="2015-02-20T04:10:52Z" is="relative-time">Feb 20, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L164">164</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC164">  <span class="pl-en">invariant</span>(</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="3">
            <a href="/facebook/react-native/commit/7ffa7942aac63767372a632f98a2e12b8847b09a" class="blame-sha">7ffa794</a>
            <img alt="@mroch" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/3012?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/7ffa7942aac63767372a632f98a2e12b8847b09a" class="blame-commit-title" title="flowify Libraries/ReactIOS">flowify Libraries/ReactIOS</a>
            <div class="blame-commit-meta">
              <a href="/mroch" class="muted-link" rel="contributor">mroch</a> authored
              <time datetime="2015-03-26T00:49:46Z" is="relative-time">Mar 26, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L165">165</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC165">    <span class="pl-k">!</span><span class="pl-smi">NativeMethodsMixin_DEV</span>.<span class="pl-smi">componentWillMount</span> <span class="pl-k">&amp;&amp;</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L166">166</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC166">    <span class="pl-k">!</span><span class="pl-smi">NativeMethodsMixin_DEV</span>.<span class="pl-smi">componentWillReceiveProps</span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="3">
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-sha">efae175</a>
            <img alt="@sahrens" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1509831?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-commit-title" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
            <div class="blame-commit-meta">
              <a href="/sahrens" class="muted-link" rel="contributor">sahrens</a> authored
              <time datetime="2015-02-20T04:10:52Z" is="relative-time">Feb 20, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L167">167</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC167">    <span class="pl-s"><span class="pl-pds">&#39;</span>Do not override existing functions.<span class="pl-pds">&#39;</span></span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L168">168</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC168">  );</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/7ffa7942aac63767372a632f98a2e12b8847b09a" class="blame-sha">7ffa794</a>
            <img alt="@mroch" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/3012?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/7ffa7942aac63767372a632f98a2e12b8847b09a" class="blame-commit-title" title="flowify Libraries/ReactIOS">flowify Libraries/ReactIOS</a>
            <div class="blame-commit-meta">
              <a href="/mroch" class="muted-link" rel="contributor">mroch</a> authored
              <time datetime="2015-03-26T00:49:46Z" is="relative-time">Mar 26, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L169">169</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC169">  <span class="pl-c1">NativeMethodsMixin_DEV</span>.<span class="pl-en">componentWillMount</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="3">
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-sha">efae175</a>
            <img alt="@sahrens" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1509831?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-commit-title" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
            <div class="blame-commit-meta">
              <a href="/sahrens" class="muted-link" rel="contributor">sahrens</a> authored
              <time datetime="2015-02-20T04:10:52Z" is="relative-time">Feb 20, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L170">170</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC170">    <span class="pl-en">throwOnStylesProp</span>(<span class="pl-v">this</span>, <span class="pl-smi">this</span>.<span class="pl-smi">props</span>);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L171">171</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC171">  };</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/7ffa7942aac63767372a632f98a2e12b8847b09a" class="blame-sha">7ffa794</a>
            <img alt="@mroch" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/3012?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/7ffa7942aac63767372a632f98a2e12b8847b09a" class="blame-commit-title" title="flowify Libraries/ReactIOS">flowify Libraries/ReactIOS</a>
            <div class="blame-commit-meta">
              <a href="/mroch" class="muted-link" rel="contributor">mroch</a> authored
              <time datetime="2015-03-26T00:49:46Z" is="relative-time">Mar 26, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L172">172</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC172">  <span class="pl-c1">NativeMethodsMixin_DEV</span>.<span class="pl-en">componentWillReceiveProps</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">newProps</span>) {</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="5">
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-sha">efae175</a>
            <img alt="@sahrens" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1509831?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-commit-title" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
            <div class="blame-commit-meta">
              <a href="/sahrens" class="muted-link" rel="contributor">sahrens</a> authored
              <time datetime="2015-02-20T04:10:52Z" is="relative-time">Feb 20, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L173">173</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC173">    <span class="pl-en">throwOnStylesProp</span>(<span class="pl-v">this</span>, newProps);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L174">174</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC174">  };</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L175">175</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC175">}</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L176">176</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC176"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="14">
            <a href="/facebook/react-native/commit/4771806c449f0cb9f861055819de8d883cbd845b" class="blame-sha">4771806</a>
            <img alt="@sahrens" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1509831?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/4771806c449f0cb9f861055819de8d883cbd845b" class="blame-commit-title" title="[ReactNative] Fix some mount callback issues">[ReactNative] Fix some mount callback issues</a>
            <div class="blame-commit-meta">
              <a href="/sahrens" class="muted-link" rel="contributor">sahrens</a> authored
              <time datetime="2015-05-15T17:54:25Z" is="relative-time">May 15, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L177">177</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC177"><span class="pl-c">/**</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L178">178</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC178"><span class="pl-c"> * In the future, we should cleanup callbacks by cancelling them instead of</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L179">179</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC179"><span class="pl-c"> * using this.</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L180">180</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC180"><span class="pl-c"> */</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L181">181</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC181"><span class="pl-k">var</span> <span class="pl-en">mountSafeCallback</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">context</span>: <span class="pl-smi">ReactComponent</span>, <span class="pl-smi">callback</span>: ?<span class="pl-smi">Function</span>)<span class="pl-k">:</span> any {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L182">182</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC182">  <span class="pl-k">return</span> <span class="pl-k">function</span>() {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L183">183</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC183">    <span class="pl-k">if</span> (<span class="pl-k">!</span>callback <span class="pl-k">||</span> (<span class="pl-smi">context</span>.<span class="pl-smi">isMounted</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">context</span>.<span class="pl-en">isMounted</span>())) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L184">184</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC184">      <span class="pl-k">return</span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L185">185</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC185">    }</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L186">186</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC186">    <span class="pl-k">return</span> <span class="pl-smi">callback</span>.<span class="pl-c1">apply</span>(context, arguments);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L187">187</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC187">  };</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L188">188</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC188">};</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L189">189</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC189"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-sha">efae175</a>
            <img alt="@sahrens" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1509831?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="blame-commit-title" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
            <div class="blame-commit-meta">
              <a href="/sahrens" class="muted-link" rel="contributor">sahrens</a> authored
              <time datetime="2015-02-20T04:10:52Z" is="relative-time">Feb 20, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L190">190</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC190"><span class="pl-smi">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> NativeMethodsMixin;</td>
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
      <li>&copy; 2015 <span title="0.05716s from github-fe134-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
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

