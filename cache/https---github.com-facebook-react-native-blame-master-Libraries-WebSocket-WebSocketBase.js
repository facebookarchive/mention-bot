



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>react-native/Libraries/WebSocket/WebSocketBase.js at master · facebook/react-native · GitHub</title>
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

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="A2E429B6:19DE:1B57F065:565DFD26" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/blame" data-pjax-transient="true" name="analytics-location" />
<meta content="Rails, view, blob#blame" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged Out">
    <meta class="js-ga-set" name="dimension4" content="New repo nav">




    <meta name="is-dotcom" content="true">
        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="281ddab5f923f3b75accfb7b07f1991e29567b16" name="form-nonce" />

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
      <a class="btn" href="/login?return_to=%2Ffacebook%2Freact-native%2Fblame%2Fmaster%2FLibraries%2FWebSocket%2FWebSocketBase.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
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

    
<a href="/facebook/react-native/blame/b0e39d26aecce2b5aa33888ca3172205a879ed98/Libraries/WebSocket/WebSocketBase.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<div class="breadcrumb css-truncate blame-breadcrumb js-zeroclipboard-container">
  <span class="css-truncate-target js-zeroclipboard-target"><span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/facebook/react-native" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">react-native</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/facebook/react-native/tree/master/Libraries" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">Libraries</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/facebook/react-native/tree/master/Libraries/WebSocket" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">WebSocket</span></a></span><span class="separator">/</span><strong class="final-path">WebSocketBase.js</strong></span>
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
        <a href="/facebook/react-native/raw/master/Libraries/WebSocket/WebSocketBase.js" class="btn btn-sm" id="raw-url">Raw</a>
        <a href="/facebook/react-native/blob/master/Libraries/WebSocket/WebSocketBase.js" class="btn btn-sm js-update-url-with-hash">Normal view</a>
        <a href="/facebook/react-native/commits/master/Libraries/WebSocket/WebSocketBase.js" class="btn btn-sm" rel="nofollow">History</a>
      </div>
    </div>



    <div class="file-info">
      <span class="octicon octicon-file-text"></span>
      <span class="file-mode" title="File Mode">100644</span>
      <span class="file-info-divider"></span>
        106 lines (86 sloc)
        <span class="file-info-divider"></span>
      2.36 KB
    </div>
  </div>

  <div class="blob-wrapper">
    <table class="blame-container highlight data js-file-line-container">
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="13">
            <a href="/facebook/react-native/commit/babdc2161445f839e76c35365dfa35b199d60dbe" class="blame-sha">babdc21</a>
            <img alt="@hharnisc" class="avatar blame-commit-avatar" height="32" src="https://avatars2.githubusercontent.com/u/1388079?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/babdc2161445f839e76c35365dfa35b199d60dbe" class="blame-commit-title" title="WebSocket polyfill

Summary:
- Added as a library in /Libraries/WebSocket
- Drag and drop to add to project (similar to adding Geolocation polyfill)
- Exposed as `window.WebSocket` which conforms with https://developer.mozilla.org/en-US/docs/Web/API/WebSocket specs
Closes https://github.com/facebook/react-native/pull/890
Github Author: Harrison Harnisch &lt;hharnisc@gmail.com&gt;

Test Plan: Imported from GitHub, without a `Test Plan:` line.">WebSocket polyfill</a>
            <div class="blame-commit-meta">
              <a href="/hharnisc" class="muted-link" rel="contributor">hharnisc</a> authored
              <time datetime="2015-05-14T16:28:09Z" is="relative-time">May 14, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L1">1</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC1"><span class="pl-c">/**</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L2">2</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC2"><span class="pl-c"> * Copyright (c) 2015-present, Facebook, Inc.</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L3">3</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC3"><span class="pl-c"> * All rights reserved.</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L4">4</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC4"><span class="pl-c"> *</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L5">5</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC5"><span class="pl-c"> * This source code is licensed under the BSD-style license found in the</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L6">6</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC6"><span class="pl-c"> * LICENSE file in the root directory of this source tree. An additional grant</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L7">7</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC7"><span class="pl-c"> * of patent rights can be found in the PATENTS file in the same directory.</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L8">8</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC8"><span class="pl-c"> *</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L9">9</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC9"><span class="pl-c"> * @providesModule WebSocketBase</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L10">10</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC10"><span class="pl-c"> */</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L11">11</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC11"><span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L12">12</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC12"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="3">
            <a href="/facebook/react-native/commit/626b551ff2e09f2770bac71a5d14d139f1b09226" class="blame-sha">626b551</a>
            <img alt="@leeyeh" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/175227?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/626b551ff2e09f2770bac71a5d14d139f1b09226" class="blame-commit-title" title="Implement EventTarget interface for WebSocket.

Summary: close #2583Closes https://github.com/facebook/react-native/pull/2599

Reviewed By: @​svcscm

Differential Revision: D2498641

Pulled By: @vjeux">Implement EventTarget interface for WebSocket.</a>
            <div class="blame-commit-meta">
              <a href="/leeyeh" class="muted-link" rel="contributor">leeyeh</a> authored
              <time datetime="2015-10-02T00:38:40Z" is="relative-time">Oct 1, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L13">13</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC13"><span class="pl-k">var</span> EventTarget <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>event-target-shim<span class="pl-pds">&#39;</span></span>);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L14">14</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC14"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="4">
            <a href="/facebook/react-native/commit/babdc2161445f839e76c35365dfa35b199d60dbe" class="blame-sha">babdc21</a>
            <img alt="@hharnisc" class="avatar blame-commit-avatar" height="32" src="https://avatars2.githubusercontent.com/u/1388079?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/babdc2161445f839e76c35365dfa35b199d60dbe" class="blame-commit-title" title="WebSocket polyfill

Summary:
- Added as a library in /Libraries/WebSocket
- Drag and drop to add to project (similar to adding Geolocation polyfill)
- Exposed as `window.WebSocket` which conforms with https://developer.mozilla.org/en-US/docs/Web/API/WebSocket specs
Closes https://github.com/facebook/react-native/pull/890
Github Author: Harrison Harnisch &lt;hharnisc@gmail.com&gt;

Test Plan: Imported from GitHub, without a `Test Plan:` line.">WebSocket polyfill</a>
            <div class="blame-commit-meta">
              <a href="/hharnisc" class="muted-link" rel="contributor">hharnisc</a> authored
              <time datetime="2015-05-14T16:28:09Z" is="relative-time">May 14, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L15">15</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC15"><span class="pl-c">/**</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L16">16</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC16"><span class="pl-c"> * Shared base for platform-specific WebSocket implementations.</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L17">17</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC17"><span class="pl-c"> */</span></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/626b551ff2e09f2770bac71a5d14d139f1b09226" class="blame-sha">626b551</a>
            <img alt="@leeyeh" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/175227?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/626b551ff2e09f2770bac71a5d14d139f1b09226" class="blame-commit-title" title="Implement EventTarget interface for WebSocket.

Summary: close #2583Closes https://github.com/facebook/react-native/pull/2599

Reviewed By: @​svcscm

Differential Revision: D2498641

Pulled By: @vjeux">Implement EventTarget interface for WebSocket.</a>
            <div class="blame-commit-meta">
              <a href="/leeyeh" class="muted-link" rel="contributor">leeyeh</a> authored
              <time datetime="2015-10-02T00:38:40Z" is="relative-time">Oct 2, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L18">18</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC18"><span class="pl-k">class</span> <span class="pl-en">WebSocketBase</span> <span class="pl-k">extends</span> <span class="pl-en">EventTarget</span> {</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="19">
            <a href="/facebook/react-native/commit/babdc2161445f839e76c35365dfa35b199d60dbe" class="blame-sha">babdc21</a>
            <img alt="@hharnisc" class="avatar blame-commit-avatar" height="32" src="https://avatars2.githubusercontent.com/u/1388079?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/babdc2161445f839e76c35365dfa35b199d60dbe" class="blame-commit-title" title="WebSocket polyfill

Summary:
- Added as a library in /Libraries/WebSocket
- Drag and drop to add to project (similar to adding Geolocation polyfill)
- Exposed as `window.WebSocket` which conforms with https://developer.mozilla.org/en-US/docs/Web/API/WebSocket specs
Closes https://github.com/facebook/react-native/pull/890
Github Author: Harrison Harnisch &lt;hharnisc@gmail.com&gt;

Test Plan: Imported from GitHub, without a `Test Plan:` line.">WebSocket polyfill</a>
            <div class="blame-commit-meta">
              <a href="/hharnisc" class="muted-link" rel="contributor">hharnisc</a> authored
              <time datetime="2015-05-14T16:28:09Z" is="relative-time">May 14, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L19">19</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC19">  CONNECTING<span class="pl-k">:</span> number;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L20">20</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC20">  OPEN<span class="pl-k">:</span> number;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L21">21</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC21">  CLOSING<span class="pl-k">:</span> number;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L22">22</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC22">  CLOSED<span class="pl-k">:</span> number;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L23">23</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC23"></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L24">24</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC24">  onclose<span class="pl-k">:</span> <span class="pl-k">?</span><span class="pl-c1">Function</span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L25">25</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC25">  onerror<span class="pl-k">:</span> <span class="pl-k">?</span><span class="pl-c1">Function</span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L26">26</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC26">  onmessage<span class="pl-k">:</span> <span class="pl-k">?</span><span class="pl-c1">Function</span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L27">27</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC27">  onopen<span class="pl-k">:</span> <span class="pl-k">?</span><span class="pl-c1">Function</span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L28">28</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC28"></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L29">29</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC29">  binaryType<span class="pl-k">:</span> <span class="pl-k">?</span>string;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L30">30</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC30">  bufferedAmount<span class="pl-k">:</span> number;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L31">31</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC31">  extension<span class="pl-k">:</span> <span class="pl-k">?</span>string;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L32">32</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC32">  protocol<span class="pl-k">:</span> <span class="pl-k">?</span>string;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L33">33</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC33">  readyState<span class="pl-k">:</span> number;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L34">34</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC34">  url<span class="pl-k">:</span> <span class="pl-k">?</span>string;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L35">35</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC35"></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L36">36</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC36">  <span class="pl-en">constructor</span>(<span class="pl-smi">url</span>: <span class="pl-smi">string</span>, <span class="pl-smi">protocols</span>: ?<span class="pl-smi">any</span>) {</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/626b551ff2e09f2770bac71a5d14d139f1b09226" class="blame-sha">626b551</a>
            <img alt="@leeyeh" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/175227?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/626b551ff2e09f2770bac71a5d14d139f1b09226" class="blame-commit-title" title="Implement EventTarget interface for WebSocket.

Summary: close #2583Closes https://github.com/facebook/react-native/pull/2599

Reviewed By: @​svcscm

Differential Revision: D2498641

Pulled By: @vjeux">Implement EventTarget interface for WebSocket.</a>
            <div class="blame-commit-meta">
              <a href="/leeyeh" class="muted-link" rel="contributor">leeyeh</a> authored
              <time datetime="2015-10-02T00:38:40Z" is="relative-time">Oct 2, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L37">37</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC37">    <span class="pl-v">super</span>();</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="10">
            <a href="/facebook/react-native/commit/babdc2161445f839e76c35365dfa35b199d60dbe" class="blame-sha">babdc21</a>
            <img alt="@hharnisc" class="avatar blame-commit-avatar" height="32" src="https://avatars2.githubusercontent.com/u/1388079?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/babdc2161445f839e76c35365dfa35b199d60dbe" class="blame-commit-title" title="WebSocket polyfill

Summary:
- Added as a library in /Libraries/WebSocket
- Drag and drop to add to project (similar to adding Geolocation polyfill)
- Exposed as `window.WebSocket` which conforms with https://developer.mozilla.org/en-US/docs/Web/API/WebSocket specs
Closes https://github.com/facebook/react-native/pull/890
Github Author: Harrison Harnisch &lt;hharnisc@gmail.com&gt;

Test Plan: Imported from GitHub, without a `Test Plan:` line.">WebSocket polyfill</a>
            <div class="blame-commit-meta">
              <a href="/hharnisc" class="muted-link" rel="contributor">hharnisc</a> authored
              <time datetime="2015-05-14T16:28:09Z" is="relative-time">May 14, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L38">38</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC38">    <span class="pl-smi">this</span>.<span class="pl-c1">CONNECTING</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L39">39</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC39">    <span class="pl-smi">this</span>.<span class="pl-c1">OPEN</span> <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L40">40</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC40">    <span class="pl-smi">this</span>.<span class="pl-c1">CLOSING</span> <span class="pl-k">=</span> <span class="pl-c1">2</span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L41">41</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC41">    <span class="pl-smi">this</span>.<span class="pl-c1">CLOSED</span> <span class="pl-k">=</span> <span class="pl-c1">3</span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L42">42</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC42"></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L43">43</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC43">    <span class="pl-k">if</span> (<span class="pl-k">!</span>protocols) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L44">44</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC44">      protocols <span class="pl-k">=</span> [];</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L45">45</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC45">    }</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L46">46</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC46"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/e6372719eafa5675e39f0e0f32f17dda1f458397" class="blame-sha">e637271</a>
            <img alt="@kenwheeler" class="avatar blame-commit-avatar" height="32" src="https://avatars2.githubusercontent.com/u/286616?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/e6372719eafa5675e39f0e0f32f17dda1f458397" class="blame-commit-title" title="Fixes #3846

Summary: This fixes a  leak in regards to web sockets, detailed in #3846 . The connection state constants referenced the class rather than the instance and were coming back undefined.

cc brentvatne stephenelliot
Closes https://github.com/facebook/react-native/pull/3896

Reviewed By: svcscm

Differential Revision: D2626399

Pulled By: vjeux

fb-gh-sync-id: f42670003b68ed5b86f078d7ed74c2695f30fc69">Fixes #3846</a>
            <div class="blame-commit-meta">
              <a href="/kenwheeler" class="muted-link" rel="contributor">kenwheeler</a> authored
              <time datetime="2015-11-06T19:23:29Z" is="relative-time">Nov 6, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="1"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L47">47</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC47">    <span class="pl-smi">this</span>.<span class="pl-c1">readyState</span> <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-c1">CONNECTING</span>;</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="5">
            <a href="/facebook/react-native/commit/babdc2161445f839e76c35365dfa35b199d60dbe" class="blame-sha">babdc21</a>
            <img alt="@hharnisc" class="avatar blame-commit-avatar" height="32" src="https://avatars2.githubusercontent.com/u/1388079?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/babdc2161445f839e76c35365dfa35b199d60dbe" class="blame-commit-title" title="WebSocket polyfill

Summary:
- Added as a library in /Libraries/WebSocket
- Drag and drop to add to project (similar to adding Geolocation polyfill)
- Exposed as `window.WebSocket` which conforms with https://developer.mozilla.org/en-US/docs/Web/API/WebSocket specs
Closes https://github.com/facebook/react-native/pull/890
Github Author: Harrison Harnisch &lt;hharnisc@gmail.com&gt;

Test Plan: Imported from GitHub, without a `Test Plan:` line.">WebSocket polyfill</a>
            <div class="blame-commit-meta">
              <a href="/hharnisc" class="muted-link" rel="contributor">hharnisc</a> authored
              <time datetime="2015-05-14T16:28:09Z" is="relative-time">May 14, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L48">48</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC48">    <span class="pl-smi">this</span>.<span class="pl-en">connectToSocketImpl</span>(url);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L49">49</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC49">  }</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L50">50</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC50"></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L51">51</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC51">  <span class="pl-en">close</span>()<span class="pl-k">:</span> <span class="pl-k">void</span> {</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="3">
            <a href="/facebook/react-native/commit/e6372719eafa5675e39f0e0f32f17dda1f458397" class="blame-sha">e637271</a>
            <img alt="@kenwheeler" class="avatar blame-commit-avatar" height="32" src="https://avatars2.githubusercontent.com/u/286616?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/e6372719eafa5675e39f0e0f32f17dda1f458397" class="blame-commit-title" title="Fixes #3846

Summary: This fixes a  leak in regards to web sockets, detailed in #3846 . The connection state constants referenced the class rather than the instance and were coming back undefined.

cc brentvatne stephenelliot
Closes https://github.com/facebook/react-native/pull/3896

Reviewed By: svcscm

Differential Revision: D2626399

Pulled By: vjeux

fb-gh-sync-id: f42670003b68ed5b86f078d7ed74c2695f30fc69">Fixes #3846</a>
            <div class="blame-commit-meta">
              <a href="/kenwheeler" class="muted-link" rel="contributor">kenwheeler</a> authored
              <time datetime="2015-11-06T19:23:29Z" is="relative-time">Nov 6, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="1"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L52">52</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC52">    <span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">readyState</span> <span class="pl-k">===</span> <span class="pl-smi">this</span>.<span class="pl-c1">CLOSING</span> <span class="pl-k">||</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="1"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L53">53</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC53">        <span class="pl-smi">this</span>.<span class="pl-c1">readyState</span> <span class="pl-k">===</span> <span class="pl-smi">this</span>.<span class="pl-c1">CLOSED</span>) {</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="4">
            <a href="/facebook/react-native/commit/babdc2161445f839e76c35365dfa35b199d60dbe" class="blame-sha">babdc21</a>
            <img alt="@hharnisc" class="avatar blame-commit-avatar" height="32" src="https://avatars2.githubusercontent.com/u/1388079?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/babdc2161445f839e76c35365dfa35b199d60dbe" class="blame-commit-title" title="WebSocket polyfill

Summary:
- Added as a library in /Libraries/WebSocket
- Drag and drop to add to project (similar to adding Geolocation polyfill)
- Exposed as `window.WebSocket` which conforms with https://developer.mozilla.org/en-US/docs/Web/API/WebSocket specs
Closes https://github.com/facebook/react-native/pull/890
Github Author: Harrison Harnisch &lt;hharnisc@gmail.com&gt;

Test Plan: Imported from GitHub, without a `Test Plan:` line.">WebSocket polyfill</a>
            <div class="blame-commit-meta">
              <a href="/hharnisc" class="muted-link" rel="contributor">hharnisc</a> authored
              <time datetime="2015-05-14T16:28:09Z" is="relative-time">May 14, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L54">54</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC54">      <span class="pl-k">return</span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L55">55</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC55">    }</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L56">56</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC56"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/e6372719eafa5675e39f0e0f32f17dda1f458397" class="blame-sha">e637271</a>
            <img alt="@kenwheeler" class="avatar blame-commit-avatar" height="32" src="https://avatars2.githubusercontent.com/u/286616?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/e6372719eafa5675e39f0e0f32f17dda1f458397" class="blame-commit-title" title="Fixes #3846

Summary: This fixes a  leak in regards to web sockets, detailed in #3846 . The connection state constants referenced the class rather than the instance and were coming back undefined.

cc brentvatne stephenelliot
Closes https://github.com/facebook/react-native/pull/3896

Reviewed By: svcscm

Differential Revision: D2626399

Pulled By: vjeux

fb-gh-sync-id: f42670003b68ed5b86f078d7ed74c2695f30fc69">Fixes #3846</a>
            <div class="blame-commit-meta">
              <a href="/kenwheeler" class="muted-link" rel="contributor">kenwheeler</a> authored
              <time datetime="2015-11-06T19:23:29Z" is="relative-time">Nov 6, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="1"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L57">57</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC57">    <span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">readyState</span> <span class="pl-k">===</span> <span class="pl-smi">this</span>.<span class="pl-c1">CONNECTING</span>) {</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="4">
            <a href="/facebook/react-native/commit/babdc2161445f839e76c35365dfa35b199d60dbe" class="blame-sha">babdc21</a>
            <img alt="@hharnisc" class="avatar blame-commit-avatar" height="32" src="https://avatars2.githubusercontent.com/u/1388079?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/babdc2161445f839e76c35365dfa35b199d60dbe" class="blame-commit-title" title="WebSocket polyfill

Summary:
- Added as a library in /Libraries/WebSocket
- Drag and drop to add to project (similar to adding Geolocation polyfill)
- Exposed as `window.WebSocket` which conforms with https://developer.mozilla.org/en-US/docs/Web/API/WebSocket specs
Closes https://github.com/facebook/react-native/pull/890
Github Author: Harrison Harnisch &lt;hharnisc@gmail.com&gt;

Test Plan: Imported from GitHub, without a `Test Plan:` line.">WebSocket polyfill</a>
            <div class="blame-commit-meta">
              <a href="/hharnisc" class="muted-link" rel="contributor">hharnisc</a> authored
              <time datetime="2015-05-14T16:28:09Z" is="relative-time">May 14, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L58">58</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC58">      <span class="pl-smi">this</span>.<span class="pl-en">cancelConnectionImpl</span>();</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L59">59</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC59">    }</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L60">60</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC60"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/e6372719eafa5675e39f0e0f32f17dda1f458397" class="blame-sha">e637271</a>
            <img alt="@kenwheeler" class="avatar blame-commit-avatar" height="32" src="https://avatars2.githubusercontent.com/u/286616?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/e6372719eafa5675e39f0e0f32f17dda1f458397" class="blame-commit-title" title="Fixes #3846

Summary: This fixes a  leak in regards to web sockets, detailed in #3846 . The connection state constants referenced the class rather than the instance and were coming back undefined.

cc brentvatne stephenelliot
Closes https://github.com/facebook/react-native/pull/3896

Reviewed By: svcscm

Differential Revision: D2626399

Pulled By: vjeux

fb-gh-sync-id: f42670003b68ed5b86f078d7ed74c2695f30fc69">Fixes #3846</a>
            <div class="blame-commit-meta">
              <a href="/kenwheeler" class="muted-link" rel="contributor">kenwheeler</a> authored
              <time datetime="2015-11-06T19:23:29Z" is="relative-time">Nov 6, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="1"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L61">61</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC61">    <span class="pl-smi">this</span>.<span class="pl-c1">readyState</span> <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-c1">CLOSING</span>;</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="5">
            <a href="/facebook/react-native/commit/babdc2161445f839e76c35365dfa35b199d60dbe" class="blame-sha">babdc21</a>
            <img alt="@hharnisc" class="avatar blame-commit-avatar" height="32" src="https://avatars2.githubusercontent.com/u/1388079?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/babdc2161445f839e76c35365dfa35b199d60dbe" class="blame-commit-title" title="WebSocket polyfill

Summary:
- Added as a library in /Libraries/WebSocket
- Drag and drop to add to project (similar to adding Geolocation polyfill)
- Exposed as `window.WebSocket` which conforms with https://developer.mozilla.org/en-US/docs/Web/API/WebSocket specs
Closes https://github.com/facebook/react-native/pull/890
Github Author: Harrison Harnisch &lt;hharnisc@gmail.com&gt;

Test Plan: Imported from GitHub, without a `Test Plan:` line.">WebSocket polyfill</a>
            <div class="blame-commit-meta">
              <a href="/hharnisc" class="muted-link" rel="contributor">hharnisc</a> authored
              <time datetime="2015-05-14T16:28:09Z" is="relative-time">May 14, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L62">62</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC62">    <span class="pl-smi">this</span>.<span class="pl-en">closeConnectionImpl</span>();</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L63">63</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC63">  }</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L64">64</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC64"></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L65">65</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC65">  <span class="pl-c1">send</span>(data<span class="pl-k">:</span> any)<span class="pl-k">:</span> <span class="pl-k">void</span> {</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/e6372719eafa5675e39f0e0f32f17dda1f458397" class="blame-sha">e637271</a>
            <img alt="@kenwheeler" class="avatar blame-commit-avatar" height="32" src="https://avatars2.githubusercontent.com/u/286616?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/e6372719eafa5675e39f0e0f32f17dda1f458397" class="blame-commit-title" title="Fixes #3846

Summary: This fixes a  leak in regards to web sockets, detailed in #3846 . The connection state constants referenced the class rather than the instance and were coming back undefined.

cc brentvatne stephenelliot
Closes https://github.com/facebook/react-native/pull/3896

Reviewed By: svcscm

Differential Revision: D2626399

Pulled By: vjeux

fb-gh-sync-id: f42670003b68ed5b86f078d7ed74c2695f30fc69">Fixes #3846</a>
            <div class="blame-commit-meta">
              <a href="/kenwheeler" class="muted-link" rel="contributor">kenwheeler</a> authored
              <time datetime="2015-11-06T19:23:29Z" is="relative-time">Nov 6, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="1"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L66">66</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC66">    <span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">readyState</span> <span class="pl-k">===</span> <span class="pl-smi">this</span>.<span class="pl-c1">CONNECTING</span>) {</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="34">
            <a href="/facebook/react-native/commit/babdc2161445f839e76c35365dfa35b199d60dbe" class="blame-sha">babdc21</a>
            <img alt="@hharnisc" class="avatar blame-commit-avatar" height="32" src="https://avatars2.githubusercontent.com/u/1388079?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/babdc2161445f839e76c35365dfa35b199d60dbe" class="blame-commit-title" title="WebSocket polyfill

Summary:
- Added as a library in /Libraries/WebSocket
- Drag and drop to add to project (similar to adding Geolocation polyfill)
- Exposed as `window.WebSocket` which conforms with https://developer.mozilla.org/en-US/docs/Web/API/WebSocket specs
Closes https://github.com/facebook/react-native/pull/890
Github Author: Harrison Harnisch &lt;hharnisc@gmail.com&gt;

Test Plan: Imported from GitHub, without a `Test Plan:` line.">WebSocket polyfill</a>
            <div class="blame-commit-meta">
              <a href="/hharnisc" class="muted-link" rel="contributor">hharnisc</a> authored
              <time datetime="2015-05-14T16:28:09Z" is="relative-time">May 14, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L67">67</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC67">      <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>INVALID_STATE_ERR<span class="pl-pds">&#39;</span></span>);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L68">68</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC68">    }</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L69">69</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC69"></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L70">70</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC70">    <span class="pl-k">if</span> (<span class="pl-k">typeof</span> data <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L71">71</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC71">      <span class="pl-smi">this</span>.<span class="pl-en">sendStringImpl</span>(data);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L72">72</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC72">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (data <span class="pl-k">instanceof</span> ArrayBuffer) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L73">73</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC73">      <span class="pl-smi">this</span>.<span class="pl-en">sendArrayBufferImpl</span>(data);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L74">74</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC74">    } <span class="pl-k">else</span> {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L75">75</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC75">      <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Not supported data type<span class="pl-pds">&#39;</span></span>);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L76">76</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC76">    }</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L77">77</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC77">  }</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L78">78</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC78"></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L79">79</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC79">  <span class="pl-en">closeConnectionImpl</span>()<span class="pl-k">:</span> <span class="pl-k">void</span> {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L80">80</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC80">    <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Subclass must define closeConnectionImpl method<span class="pl-pds">&#39;</span></span>);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L81">81</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC81">  }</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L82">82</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC82"></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L83">83</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC83">  <span class="pl-en">connectToSocketImpl</span>()<span class="pl-k">:</span> <span class="pl-k">void</span> {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L84">84</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC84">    <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Subclass must define connectToSocketImpl method<span class="pl-pds">&#39;</span></span>);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L85">85</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC85">  }</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L86">86</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC86"></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L87">87</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC87">  <span class="pl-en">cancelConnectionImpl</span>()<span class="pl-k">:</span> <span class="pl-k">void</span> {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L88">88</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC88">    <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Subclass must define cancelConnectionImpl method<span class="pl-pds">&#39;</span></span>);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L89">89</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC89">  }</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L90">90</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC90"></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L91">91</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC91">  <span class="pl-en">sendStringImpl</span>()<span class="pl-k">:</span> <span class="pl-k">void</span> {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L92">92</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC92">    <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Subclass must define sendStringImpl method<span class="pl-pds">&#39;</span></span>);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L93">93</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC93">  }</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L94">94</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC94"></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L95">95</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC95">  <span class="pl-en">sendArrayBufferImpl</span>()<span class="pl-k">:</span> <span class="pl-k">void</span> {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L96">96</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC96">    <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Subclass must define sendArrayBufferImpl method<span class="pl-pds">&#39;</span></span>);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L97">97</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC97">  }</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L98">98</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC98">}</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L99">99</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC99"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="6">
            <a href="/facebook/react-native/commit/e6372719eafa5675e39f0e0f32f17dda1f458397" class="blame-sha">e637271</a>
            <img alt="@kenwheeler" class="avatar blame-commit-avatar" height="32" src="https://avatars2.githubusercontent.com/u/286616?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/e6372719eafa5675e39f0e0f32f17dda1f458397" class="blame-commit-title" title="Fixes #3846

Summary: This fixes a  leak in regards to web sockets, detailed in #3846 . The connection state constants referenced the class rather than the instance and were coming back undefined.

cc brentvatne stephenelliot
Closes https://github.com/facebook/react-native/pull/3896

Reviewed By: svcscm

Differential Revision: D2626399

Pulled By: vjeux

fb-gh-sync-id: f42670003b68ed5b86f078d7ed74c2695f30fc69">Fixes #3846</a>
            <div class="blame-commit-meta">
              <a href="/kenwheeler" class="muted-link" rel="contributor">kenwheeler</a> authored
              <time datetime="2015-11-06T19:23:29Z" is="relative-time">Nov 6, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="1"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L100">100</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC100"><span class="pl-smi">WebSocketBase</span>.<span class="pl-c1">CONNECTING</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="1"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L101">101</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC101"><span class="pl-smi">WebSocketBase</span>.<span class="pl-c1">OPEN</span> <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="1"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L102">102</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC102"><span class="pl-smi">WebSocketBase</span>.<span class="pl-c1">CLOSING</span> <span class="pl-k">=</span> <span class="pl-c1">2</span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="1"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L103">103</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC103"><span class="pl-smi">WebSocketBase</span>.<span class="pl-c1">CLOSED</span> <span class="pl-k">=</span> <span class="pl-c1">3</span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="1"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L104">104</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC104"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/babdc2161445f839e76c35365dfa35b199d60dbe" class="blame-sha">babdc21</a>
            <img alt="@hharnisc" class="avatar blame-commit-avatar" height="32" src="https://avatars2.githubusercontent.com/u/1388079?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/babdc2161445f839e76c35365dfa35b199d60dbe" class="blame-commit-title" title="WebSocket polyfill

Summary:
- Added as a library in /Libraries/WebSocket
- Drag and drop to add to project (similar to adding Geolocation polyfill)
- Exposed as `window.WebSocket` which conforms with https://developer.mozilla.org/en-US/docs/Web/API/WebSocket specs
Closes https://github.com/facebook/react-native/pull/890
Github Author: Harrison Harnisch &lt;hharnisc@gmail.com&gt;

Test Plan: Imported from GitHub, without a `Test Plan:` line.">WebSocket polyfill</a>
            <div class="blame-commit-meta">
              <a href="/hharnisc" class="muted-link" rel="contributor">hharnisc</a> authored
              <time datetime="2015-05-14T16:28:09Z" is="relative-time">May 14, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L105">105</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC105"><span class="pl-smi">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> WebSocketBase;</td>
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
      <li>&copy; 2015 <span title="0.10986s from github-fe131-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
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

