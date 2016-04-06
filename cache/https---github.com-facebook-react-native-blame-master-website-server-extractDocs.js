



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>react-native/website/server/extractDocs.js at master · facebook/react-native · GitHub</title>
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

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="A2E429B6:26A8:6B80E83:565DFBC7" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/blame" data-pjax-transient="true" name="analytics-location" />
<meta content="Rails, view, blob#blame" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged Out">
    <meta class="js-ga-set" name="dimension4" content="New repo nav">




    <meta name="is-dotcom" content="true">
        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="e19e7d81d06359c08cb26489b65cf6ca68bd7c7b" name="form-nonce" />

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
      <a class="btn" href="/login?return_to=%2Ffacebook%2Freact-native%2Fblame%2Fmaster%2Fwebsite%2Fserver%2FextractDocs.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
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

    
<a href="/facebook/react-native/blame/b0e39d26aecce2b5aa33888ca3172205a879ed98/website/server/extractDocs.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<div class="breadcrumb css-truncate blame-breadcrumb js-zeroclipboard-container">
  <span class="css-truncate-target js-zeroclipboard-target"><span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/facebook/react-native" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">react-native</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/facebook/react-native/tree/master/website" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">website</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/facebook/react-native/tree/master/website/server" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">server</span></a></span><span class="separator">/</span><strong class="final-path">extractDocs.js</strong></span>
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
        <a href="/facebook/react-native/raw/master/website/server/extractDocs.js" class="btn btn-sm" id="raw-url">Raw</a>
        <a href="/facebook/react-native/blob/master/website/server/extractDocs.js" class="btn btn-sm js-update-url-with-hash">Normal view</a>
        <a href="/facebook/react-native/commits/master/website/server/extractDocs.js" class="btn btn-sm" rel="nofollow">History</a>
      </div>
    </div>



    <div class="file-info">
      <span class="octicon octicon-file-text"></span>
      <span class="file-mode" title="File Mode">100644</span>
      <span class="file-info-divider"></span>
        281 lines (245 sloc)
        <span class="file-info-divider"></span>
      8.52 KB
    </div>
  </div>

  <div class="blob-wrapper">
    <table class="blame-container highlight data js-file-line-container">
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="10">
            <a href="/facebook/react-native/commit/e811181034a3a90170f7cd73c4b8e09a40ef4976" class="blame-sha">e811181</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/e811181034a3a90170f7cd73c4b8e09a40ef4976" class="blame-commit-title" title="Add copyright header on website files">Add copyright header on website files</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-23T17:55:49Z" is="relative-time">Mar 23, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L1">1</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC1"><span class="pl-c">/**</span></td>
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
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L8">8</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC8"><span class="pl-c"> */</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L9">9</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC9"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="3">
            <a href="/facebook/react-native/commit/d5f670d19cde39aaa5064e9c12a2731feaaa8566" class="blame-sha">d5f670d</a>
            <img alt="@fkling" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/179026?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/d5f670d19cde39aaa5064e9c12a2731feaaa8566" class="blame-commit-title" title="Add logic to show style props in docs">Add logic to show style props in docs</a>
            <div class="blame-commit-meta">
              <a href="/fkling" class="muted-link" rel="contributor">fkling</a> authored
              <time datetime="2015-03-19T21:05:07Z" is="relative-time">Mar 19, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L10">10</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC10"><span class="pl-k">var</span> docgen <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>react-docgen<span class="pl-pds">&#39;</span></span>);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L11">11</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC11"><span class="pl-k">var</span> docgenHelpers <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>./docgenHelpers<span class="pl-pds">&#39;</span></span>);</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="4">
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-sha">70f2833</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-commit-title" title="Initial version of the automatically generated docs">Initial version of the automatically generated docs</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-02-12T22:43:41Z" is="relative-time">Feb 12, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L12">12</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC12"><span class="pl-k">var</span> fs <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>fs<span class="pl-pds">&#39;</span></span>);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L13">13</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC13"><span class="pl-k">var</span> path <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>path<span class="pl-pds">&#39;</span></span>);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L14">14</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC14"><span class="pl-k">var</span> slugify <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>../core/slugify<span class="pl-pds">&#39;</span></span>);</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/28aa691d135e9fd201f86816a0a2d635361c5b64" class="blame-sha">28aa691</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/28aa691d135e9fd201f86816a0a2d635361c5b64" class="blame-commit-title" title="Updates from Fri 13 Mar

- [ReactNative] Oss ActionSheet | Tadeu Zagallo
- [ReactNative] Fix ScrollView.scrollTo() | Christopher Chedeau
- [catalyst|madman] fix location observer | Jiajie Zhu
- [ReactNative] Remove keyboardDismissMode from static | Christopher Chedeau
- [ReactNative] Fix RCTMapManager retaining cycle | Tadeu Zagallo
- [ReactNative] Support loading sourcemaps from sourceMappingURL | Alex Kotliarskyi
- [catalyst] set up directory specific rql transform | Bhuwan Khattar
- [React Native] Add .done() to terminate promise chains | Ben Alpert
- [React Native] add support for reading tracking bit | Owen Coutts">Updates from Fri 13 Mar</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-13T22:30:31Z" is="relative-time">Mar 13, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L15">15</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC15"><span class="pl-k">var</span> jsDocs <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>../jsdocs/jsdocs.js<span class="pl-pds">&#39;</span></span>);</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-sha">70f2833</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-commit-title" title="Initial version of the automatically generated docs">Initial version of the automatically generated docs</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-02-12T22:43:41Z" is="relative-time">Feb 12, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L16">16</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC16"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="9">
            <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be" class="blame-sha">42eb546</a>
            <img alt="@mkonicek" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/346214?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be" class="blame-commit-title" title="Release React Native for Android

This is an early release and there are several things that are known
not to work if you&#39;re porting your iOS app to Android.

See the Known Issues guide on the website.

We will work with the community to reach platform parity with iOS.">Release React Native for Android</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/mkonicek" class="muted-link" rel="contributor">mkonicek</a> authored
              <time datetime="2015-09-14T14:35:58Z" is="relative-time">Sep 14, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L17">17</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC17"><span class="pl-k">var</span> <span class="pl-c1">ANDROID_SUFFIX</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>android<span class="pl-pds">&#39;</span></span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L18">18</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC18"><span class="pl-k">var</span> <span class="pl-c1">CROSS_SUFFIX</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>cross<span class="pl-pds">&#39;</span></span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L19">19</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC19"><span class="pl-k">var</span> <span class="pl-c1">IOS_SUFFIX</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ios<span class="pl-pds">&#39;</span></span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L20">20</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC20"></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L21">21</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC21"><span class="pl-k">function</span> <span class="pl-en">endsWith</span>(<span class="pl-smi">str</span>, <span class="pl-smi">suffix</span>) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L22">22</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC22">  <span class="pl-k">return</span> <span class="pl-smi">str</span>.<span class="pl-c1">indexOf</span>(suffix, <span class="pl-smi">str</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-smi">suffix</span>.<span class="pl-c1">length</span>) <span class="pl-k">!==</span> <span class="pl-k">-</span><span class="pl-c1">1</span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L23">23</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC23">}</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L24">24</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC24"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="6">
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-sha">70f2833</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-commit-title" title="Initial version of the automatically generated docs">Initial version of the automatically generated docs</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-02-12T22:43:41Z" is="relative-time">Feb 12, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L25">25</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC25"><span class="pl-k">function</span> <span class="pl-en">getNameFromPath</span>(<span class="pl-smi">filepath</span>) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L26">26</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC26">  <span class="pl-k">var</span> ext <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L27">27</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC27">  <span class="pl-k">while</span> (ext <span class="pl-k">=</span> <span class="pl-smi">path</span>.<span class="pl-en">extname</span>(filepath)) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L28">28</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC28">    filepath <span class="pl-k">=</span> <span class="pl-smi">path</span>.<span class="pl-en">basename</span>(filepath, ext);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L29">29</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC29">  }</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/b8ca4e450b2fdff5eed68dbb3e1b4ca00b7d4a9c" class="blame-sha">b8ca4e4</a>
            <img alt="@brentvatne" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/90494?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/b8ca4e450b2fdff5eed68dbb3e1b4ca00b7d4a9c" class="blame-commit-title" title="Add TransformPropTypes to docs">Add TransformPropTypes to docs</a>
            <div class="blame-commit-meta">
              <a href="/brentvatne" class="muted-link" rel="contributor">brentvatne</a> authored
              <time datetime="2015-05-07T19:16:48Z" is="relative-time">May 7, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L30">30</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC30"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="3">
            <a href="/facebook/react-native/commit/c676e9dccc383daf959c7443c0f0574a6774400c" class="blame-sha">c676e9d</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/c676e9dccc383daf959c7443c0f0574a6774400c" class="blame-commit-title" title="Rename LayoutPropTypes to Flexbox">Rename LayoutPropTypes to Flexbox</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-23T22:22:47Z" is="relative-time">Mar 23, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L31">31</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC31">  <span class="pl-k">if</span> (filepath <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>LayoutPropTypes<span class="pl-pds">&#39;</span></span>) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L32">32</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC32">    <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Flexbox<span class="pl-pds">&#39;</span></span>;</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="4">
            <a href="/facebook/react-native/commit/b8ca4e450b2fdff5eed68dbb3e1b4ca00b7d4a9c" class="blame-sha">b8ca4e4</a>
            <img alt="@brentvatne" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/90494?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/b8ca4e450b2fdff5eed68dbb3e1b4ca00b7d4a9c" class="blame-commit-title" title="Add TransformPropTypes to docs">Add TransformPropTypes to docs</a>
            <div class="blame-commit-meta">
              <a href="/brentvatne" class="muted-link" rel="contributor">brentvatne</a> authored
              <time datetime="2015-05-07T19:16:48Z" is="relative-time">May 7, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L33">33</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC33">  } <span class="pl-k">else</span> <span class="pl-k">if</span> (filepath <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>TransformPropTypes<span class="pl-pds">&#39;</span></span>) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L34">34</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC34">    <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Transforms<span class="pl-pds">&#39;</span></span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L35">35</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC35">  } <span class="pl-k">else</span> <span class="pl-k">if</span> (filepath <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>TabBarItemIOS<span class="pl-pds">&#39;</span></span>) {</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/9ee6cd61682c19d3373a388474b9071ed729078b" class="blame-sha">9ee6cd6</a>
            <img alt="@brentvatne" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/90494?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/9ee6cd61682c19d3373a388474b9071ed729078b" class="blame-commit-title" title="[Docs] Add TabBarIOS.Item to docs">[Docs] Add TabBarIOS.Item to docs</a>
            <div class="blame-commit-meta">
              <a href="/brentvatne" class="muted-link" rel="contributor">brentvatne</a> authored
              <time datetime="2015-04-21T17:19:36Z" is="relative-time">Apr 21, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L36">36</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC36">    <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span>TabBarIOS.Item<span class="pl-pds">&#39;</span></span>;</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="3">
            <a href="/facebook/react-native/commit/00ceec9def0dff134d9fbfcb2104a64686720789" class="blame-sha">00ceec9</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/00ceec9def0dff134d9fbfcb2104a64686720789" class="blame-commit-title" title="Fix website with Animated

Animated.js has been renamed (and moved) to AnimatedImplementation.js, so we need to update the path and add another translation rule.">Fix website with Animated</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-09-22T19:54:04Z" is="relative-time">Sep 22, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L37">37</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC37">  } <span class="pl-k">else</span> <span class="pl-k">if</span> (filepath <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>AnimatedImplementation<span class="pl-pds">&#39;</span></span>) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L38">38</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC38">    <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Animated<span class="pl-pds">&#39;</span></span>;</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/c676e9dccc383daf959c7443c0f0574a6774400c" class="blame-sha">c676e9d</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/c676e9dccc383daf959c7443c0f0574a6774400c" class="blame-commit-title" title="Rename LayoutPropTypes to Flexbox">Rename LayoutPropTypes to Flexbox</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-23T22:22:47Z" is="relative-time">Mar 23, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L39">39</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC39">  }</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="4">
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-sha">70f2833</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-commit-title" title="Initial version of the automatically generated docs">Initial version of the automatically generated docs</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-02-12T22:43:41Z" is="relative-time">Feb 12, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L40">40</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC40">  <span class="pl-k">return</span> filepath;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L41">41</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC41">}</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L42">42</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC42"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="6">
            <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be" class="blame-sha">42eb546</a>
            <img alt="@mkonicek" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/346214?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be" class="blame-commit-title" title="Release React Native for Android

This is an early release and there are several things that are known
not to work if you&#39;re porting your iOS app to Android.

See the Known Issues guide on the website.

We will work with the community to reach platform parity with iOS.">Release React Native for Android</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/mkonicek" class="muted-link" rel="contributor">mkonicek</a> authored
              <time datetime="2015-09-14T14:35:58Z" is="relative-time">Sep 14, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L43">43</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC43"><span class="pl-k">function</span> <span class="pl-en">getPlatformFromPath</span>(<span class="pl-smi">filepath</span>) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L44">44</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC44">  <span class="pl-k">var</span> ext <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L45">45</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC45">  <span class="pl-k">while</span> (ext <span class="pl-k">=</span> <span class="pl-smi">path</span>.<span class="pl-en">extname</span>(filepath)) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L46">46</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC46">    filepath <span class="pl-k">=</span> <span class="pl-smi">path</span>.<span class="pl-en">basename</span>(filepath, ext);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L47">47</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC47">  }</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/00ceec9def0dff134d9fbfcb2104a64686720789" class="blame-sha">00ceec9</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/00ceec9def0dff134d9fbfcb2104a64686720789" class="blame-commit-title" title="Fix website with Animated

Animated.js has been renamed (and moved) to AnimatedImplementation.js, so we need to update the path and add another translation rule.">Fix website with Animated</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-09-22T19:54:04Z" is="relative-time">Sep 22, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L48">48</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC48"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="10">
            <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be" class="blame-sha">42eb546</a>
            <img alt="@mkonicek" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/346214?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be" class="blame-commit-title" title="Release React Native for Android

This is an early release and there are several things that are known
not to work if you&#39;re porting your iOS app to Android.

See the Known Issues guide on the website.

We will work with the community to reach platform parity with iOS.">Release React Native for Android</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/mkonicek" class="muted-link" rel="contributor">mkonicek</a> authored
              <time datetime="2015-09-14T14:35:58Z" is="relative-time">Sep 14, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L49">49</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC49">  <span class="pl-k">if</span> (<span class="pl-en">endsWith</span>(filepath, <span class="pl-s"><span class="pl-pds">&#39;</span>Android<span class="pl-pds">&#39;</span></span>)) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L50">50</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC50">    <span class="pl-k">return</span> <span class="pl-c1">ANDROID_SUFFIX</span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L51">51</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC51">  } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-en">endsWith</span>(filepath, <span class="pl-s"><span class="pl-pds">&#39;</span>IOS<span class="pl-pds">&#39;</span></span>)) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L52">52</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC52">    <span class="pl-k">return</span> <span class="pl-c1">IOS_SUFFIX</span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L53">53</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC53">  }</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L54">54</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC54">  <span class="pl-k">return</span> <span class="pl-c1">CROSS_SUFFIX</span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L55">55</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC55">}</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L56">56</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC56"></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L57">57</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC57"><span class="pl-k">function</span> <span class="pl-en">getExample</span>(<span class="pl-smi">componentName</span>, <span class="pl-smi">componentPlatform</span>) {</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="3">
            <a href="/facebook/react-native/commit/a4a551c5718eb8f6d0e60fe477ac0c69fd571020" class="blame-sha">a4a551c</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/a4a551c5718eb8f6d0e60fe477ac0c69fd571020" class="blame-commit-title" title="Add examples at the end of the doc pages">Add examples at the end of the doc pages</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-31T19:28:26Z" is="relative-time">Mar 31, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L58">58</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC58">  <span class="pl-k">var</span> path <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>../Examples/UIExplorer/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> componentName <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Example.js<span class="pl-pds">&#39;</span></span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L59">59</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC59">  <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">fs</span>.<span class="pl-en">existsSync</span>(path)) {</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be" class="blame-sha">42eb546</a>
            <img alt="@mkonicek" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/346214?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be" class="blame-commit-title" title="Release React Native for Android

This is an early release and there are several things that are known
not to work if you&#39;re porting your iOS app to Android.

See the Known Issues guide on the website.

We will work with the community to reach platform parity with iOS.">Release React Native for Android</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/mkonicek" class="muted-link" rel="contributor">mkonicek</a> authored
              <time datetime="2015-09-14T14:35:58Z" is="relative-time">Sep 14, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L60">60</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC60">    path <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>../Examples/UIExplorer/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> componentName <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Example.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> componentPlatform <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>.js<span class="pl-pds">&#39;</span></span>;</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="4">
            <a href="/facebook/react-native/commit/427d902e48ed964d8ac4614f2ed75b1fdd8fc87a" class="blame-sha">427d902</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/427d902e48ed964d8ac4614f2ed75b1fdd8fc87a" class="blame-commit-title" title="Support .ios.js examples">Support .ios.js examples</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-31T21:05:15Z" is="relative-time">Mar 31, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L61">61</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC61">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">fs</span>.<span class="pl-en">existsSync</span>(path)) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L62">62</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC62">      <span class="pl-k">return</span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L63">63</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC63">    }</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="3">
            <a href="/facebook/react-native/commit/a4a551c5718eb8f6d0e60fe477ac0c69fd571020" class="blame-sha">a4a551c</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/a4a551c5718eb8f6d0e60fe477ac0c69fd571020" class="blame-commit-title" title="Add examples at the end of the doc pages">Add examples at the end of the doc pages</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-31T19:28:26Z" is="relative-time">Mar 31, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L64">64</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC64">  }</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L65">65</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC65">  <span class="pl-k">return</span> {</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/115b2a3fde535bf3f0a56a7496ba400c5eef3dc3" class="blame-sha">115b2a3</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/115b2a3fde535bf3f0a56a7496ba400c5eef3dc3" class="blame-commit-title" title="fix ../">fix ../</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-31T19:31:37Z" is="relative-time">Mar 31, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L66">66</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC66">    path<span class="pl-k">:</span> <span class="pl-smi">path</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\.\.\/</span><span class="pl-pds">/</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>),</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="5">
            <a href="/facebook/react-native/commit/a4a551c5718eb8f6d0e60fe477ac0c69fd571020" class="blame-sha">a4a551c</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/a4a551c5718eb8f6d0e60fe477ac0c69fd571020" class="blame-commit-title" title="Add examples at the end of the doc pages">Add examples at the end of the doc pages</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-31T19:28:26Z" is="relative-time">Mar 31, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L67">67</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC67">    content<span class="pl-k">:</span> <span class="pl-smi">fs</span>.<span class="pl-en">readFileSync</span>(path).<span class="pl-c1">toString</span>(),</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L68">68</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC68">  };</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L69">69</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC69">}</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L70">70</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC70"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="11">
            <a href="/facebook/react-native/commit/5af8849aa45e92da20d3ffb62cb2aa5b5868299f" class="blame-sha">5af8849</a>
            <img alt="@jsierles" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/82?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/5af8849aa45e92da20d3ffb62cb2aa5b5868299f" class="blame-commit-title" title="[Docs] Add a &#39;run this example&#39; link to AlertIOS docs, plus supporting code to add more links progressively">[Docs] Add a &#39;run this example&#39; link to AlertIOS docs, plus supportin…</a>
            <div class="blame-commit-meta">
              <a href="/jsierles" class="muted-link" rel="contributor">jsierles</a> authored
              <time datetime="2015-06-30T21:39:49Z" is="relative-time">Jun 30, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="5"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L71">71</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC71"><span class="pl-c">// Determines whether a component should have a link to a runnable example</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="5"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L72">72</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC72"></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="5"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L73">73</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC73"><span class="pl-k">function</span> <span class="pl-en">isRunnable</span>(<span class="pl-smi">componentName</span>) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="5"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L74">74</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC74">  <span class="pl-k">if</span> (componentName <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>AlertIOS<span class="pl-pds">&#39;</span></span>) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="5"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L75">75</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC75">    <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="5"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L76">76</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC76">  }</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="5"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L77">77</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC77"></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="5"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L78">78</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC78">  <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="5"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L79">79</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC79">}</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="5"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L80">80</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC80"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="28">
            <a href="/facebook/react-native/commit/debd5b0942736f1c9a72c4aad3458a9c17db6eee" class="blame-sha">debd5b0</a>
            <img alt="@brentvatne" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/90494?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/debd5b0942736f1c9a72c4aad3458a9c17db6eee" class="blame-commit-title" title="[Docs] Remove Transforms from sidebar, add to Style">[Docs] Remove Transforms from sidebar, add to Style</a>
            <div class="blame-commit-meta">
              <a href="/brentvatne" class="muted-link" rel="contributor">brentvatne</a> authored
              <time datetime="2015-05-07T23:05:30Z" is="relative-time">May 7, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L81">81</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC81"><span class="pl-c">// Hide a component from the sidebar by making it return false from</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L82">82</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC82"><span class="pl-c">// this function</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L83">83</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC83"><span class="pl-k">function</span> <span class="pl-en">shouldDisplayInSidebar</span>(<span class="pl-smi">componentName</span>) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L84">84</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC84">  <span class="pl-k">if</span> (componentName <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Transforms<span class="pl-pds">&#39;</span></span>) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L85">85</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC85">    <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L86">86</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC86">  }</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L87">87</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC87"></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L88">88</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC88">  <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L89">89</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC89">}</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L90">90</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC90"></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L91">91</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC91"><span class="pl-k">function</span> <span class="pl-en">getNextComponent</span>(<span class="pl-smi">i</span>) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L92">92</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC92">  <span class="pl-k">var</span> next;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L93">93</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC93">  <span class="pl-k">var</span> filepath <span class="pl-k">=</span> all[i];</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L94">94</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC94"></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L95">95</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC95">  <span class="pl-k">if</span> (all[i <span class="pl-k">+</span> <span class="pl-c1">1</span>]) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L96">96</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC96">    <span class="pl-k">var</span> nextComponentName <span class="pl-k">=</span> <span class="pl-en">getNameFromPath</span>(all[i <span class="pl-k">+</span> <span class="pl-c1">1</span>]);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L97">97</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC97"></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L98">98</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC98">    <span class="pl-k">if</span> (<span class="pl-en">shouldDisplayInSidebar</span>(nextComponentName)) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L99">99</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC99">      <span class="pl-k">return</span> <span class="pl-en">slugify</span>(nextComponentName);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L100">100</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC100">    } <span class="pl-k">else</span> {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L101">101</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC101">      <span class="pl-k">return</span> <span class="pl-en">getNextComponent</span>(i <span class="pl-k">+</span> <span class="pl-c1">1</span>);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L102">102</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC102">    }</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L103">103</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC103">  } <span class="pl-k">else</span> {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L104">104</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC104">    <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span>network<span class="pl-pds">&#39;</span></span>;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L105">105</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC105">  }</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L106">106</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC106">}</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L107">107</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC107"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/d5f670d19cde39aaa5064e9c12a2731feaaa8566" class="blame-sha">d5f670d</a>
            <img alt="@fkling" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/179026?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/d5f670d19cde39aaa5064e9c12a2731feaaa8566" class="blame-commit-title" title="Add logic to show style props in docs">Add logic to show style props in docs</a>
            <div class="blame-commit-meta">
              <a href="/fkling" class="muted-link" rel="contributor">fkling</a> authored
              <time datetime="2015-03-19T21:05:07Z" is="relative-time">Mar 19, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L108">108</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC108"><span class="pl-k">function</span> <span class="pl-en">componentsToMarkdown</span>(<span class="pl-smi">type</span>, <span class="pl-smi">json</span>, <span class="pl-smi">filepath</span>, <span class="pl-smi">i</span>, <span class="pl-smi">styles</span>) {</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-sha">70f2833</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-commit-title" title="Initial version of the automatically generated docs">Initial version of the automatically generated docs</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-02-12T22:43:41Z" is="relative-time">Feb 12, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L109">109</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC109">  <span class="pl-k">var</span> componentName <span class="pl-k">=</span> <span class="pl-en">getNameFromPath</span>(filepath);</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be" class="blame-sha">42eb546</a>
            <img alt="@mkonicek" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/346214?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be" class="blame-commit-title" title="Release React Native for Android

This is an early release and there are several things that are known
not to work if you&#39;re porting your iOS app to Android.

See the Known Issues guide on the website.

We will work with the community to reach platform parity with iOS.">Release React Native for Android</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/mkonicek" class="muted-link" rel="contributor">mkonicek</a> authored
              <time datetime="2015-09-14T14:35:58Z" is="relative-time">Sep 14, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L110">110</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC110">  <span class="pl-k">var</span> componentPlatform <span class="pl-k">=</span> <span class="pl-en">getPlatformFromPath</span>(filepath);</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/b9ab60719767bda61ca55e0f8e86a60bdebc9ec3" class="blame-sha">b9ab607</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/b9ab60719767bda61ca55e0f8e86a60bdebc9ec3" class="blame-commit-title" title="Use docs/ComponentName.md at the end of the component docs">Use docs/ComponentName.md at the end of the component docs</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-05T05:03:24Z" is="relative-time">Mar 4, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L111">111</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC111">  <span class="pl-k">var</span> docFilePath <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>../docs/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> componentName <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.md<span class="pl-pds">&#39;</span></span>;</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/00ceec9def0dff134d9fbfcb2104a64686720789" class="blame-sha">00ceec9</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/00ceec9def0dff134d9fbfcb2104a64686720789" class="blame-commit-title" title="Fix website with Animated

Animated.js has been renamed (and moved) to AnimatedImplementation.js, so we need to update the path and add another translation rule.">Fix website with Animated</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-09-22T19:54:04Z" is="relative-time">Sep 22, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L112">112</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC112"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="4">
            <a href="/facebook/react-native/commit/b9ab60719767bda61ca55e0f8e86a60bdebc9ec3" class="blame-sha">b9ab607</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/b9ab60719767bda61ca55e0f8e86a60bdebc9ec3" class="blame-commit-title" title="Use docs/ComponentName.md at the end of the component docs">Use docs/ComponentName.md at the end of the component docs</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-05T05:03:24Z" is="relative-time">Mar 5, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L113">113</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC113">  <span class="pl-k">if</span> (<span class="pl-smi">fs</span>.<span class="pl-en">existsSync</span>(docFilePath)) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L114">114</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC114">    <span class="pl-smi">json</span>.<span class="pl-smi">fullDescription</span> <span class="pl-k">=</span> <span class="pl-smi">fs</span>.<span class="pl-en">readFileSync</span>(docFilePath).<span class="pl-c1">toString</span>();</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L115">115</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC115">  }</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/33bfb322ad49654db50078af101bee90a5e7f46b" class="blame-sha">33bfb32</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/33bfb322ad49654db50078af101bee90a5e7f46b" class="blame-commit-title" title="Wire up jsdocs for apis">Wire up jsdocs for apis</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-12T18:03:32Z" is="relative-time">Mar 12, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L116">116</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC116">  <span class="pl-smi">json</span>.<span class="pl-c1">type</span> <span class="pl-k">=</span> type;</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="3">
            <a href="/facebook/react-native/commit/536b4669a3c37db57727a5be0b944d84cdc5de95" class="blame-sha">536b466</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/536b4669a3c37db57727a5be0b944d84cdc5de95" class="blame-commit-title" title="Add Edit on Github link on pages. cc @DMortens">Add Edit on Github link on pages. cc @DMortens</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/536b4669a3c37db57727a5be0b944d84cdc5de95#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-31T17:10:05Z" is="relative-time">Mar 31, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L117">117</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC117">  <span class="pl-smi">json</span>.<span class="pl-smi">filepath</span> <span class="pl-k">=</span> <span class="pl-smi">filepath</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\.\.\/</span><span class="pl-pds">/</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L118">118</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC118">  <span class="pl-smi">json</span>.<span class="pl-smi">componentName</span> <span class="pl-k">=</span> componentName;</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be" class="blame-sha">42eb546</a>
            <img alt="@mkonicek" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/346214?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be" class="blame-commit-title" title="Release React Native for Android

This is an early release and there are several things that are known
not to work if you&#39;re porting your iOS app to Android.

See the Known Issues guide on the website.

We will work with the community to reach platform parity with iOS.">Release React Native for Android</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/mkonicek" class="muted-link" rel="contributor">mkonicek</a> authored
              <time datetime="2015-09-14T14:35:58Z" is="relative-time">Sep 14, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L119">119</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC119">  <span class="pl-smi">json</span>.<span class="pl-smi">componentPlatform</span> <span class="pl-k">=</span> componentPlatform;</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="4">
            <a href="/facebook/react-native/commit/d5f670d19cde39aaa5064e9c12a2731feaaa8566" class="blame-sha">d5f670d</a>
            <img alt="@fkling" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/179026?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/d5f670d19cde39aaa5064e9c12a2731feaaa8566" class="blame-commit-title" title="Add logic to show style props in docs">Add logic to show style props in docs</a>
            <div class="blame-commit-meta">
              <a href="/fkling" class="muted-link" rel="contributor">fkling</a> authored
              <time datetime="2015-03-19T21:05:07Z" is="relative-time">Mar 19, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L120">120</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC120">  <span class="pl-k">if</span> (styles) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L121">121</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC121">    <span class="pl-smi">json</span>.<span class="pl-smi">styles</span> <span class="pl-k">=</span> styles;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L122">122</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC122">  }</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be" class="blame-sha">42eb546</a>
            <img alt="@mkonicek" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/346214?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be" class="blame-commit-title" title="Release React Native for Android

This is an early release and there are several things that are known
not to work if you&#39;re porting your iOS app to Android.

See the Known Issues guide on the website.

We will work with the community to reach platform parity with iOS.">Release React Native for Android</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/mkonicek" class="muted-link" rel="contributor">mkonicek</a> authored
              <time datetime="2015-09-14T14:35:58Z" is="relative-time">Sep 14, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L123">123</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC123">  <span class="pl-smi">json</span>.<span class="pl-smi">example</span> <span class="pl-k">=</span> <span class="pl-en">getExample</span>(componentName, componentPlatform);</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/b9ab60719767bda61ca55e0f8e86a60bdebc9ec3" class="blame-sha">b9ab607</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/b9ab60719767bda61ca55e0f8e86a60bdebc9ec3" class="blame-commit-title" title="Use docs/ComponentName.md at the end of the component docs">Use docs/ComponentName.md at the end of the component docs</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-05T05:03:24Z" is="relative-time">Mar 5, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L124">124</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC124"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="5">
            <a href="/facebook/react-native/commit/debd5b0942736f1c9a72c4aad3458a9c17db6eee" class="blame-sha">debd5b0</a>
            <img alt="@brentvatne" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/90494?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/debd5b0942736f1c9a72c4aad3458a9c17db6eee" class="blame-commit-title" title="[Docs] Remove Transforms from sidebar, add to Style">[Docs] Remove Transforms from sidebar, add to Style</a>
            <div class="blame-commit-meta">
              <a href="/brentvatne" class="muted-link" rel="contributor">brentvatne</a> authored
              <time datetime="2015-05-07T23:05:30Z" is="relative-time">May 7, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L125">125</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC125">  <span class="pl-c">// Put Flexbox into the Polyfills category</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L126">126</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC126">  <span class="pl-k">var</span> category <span class="pl-k">=</span> (type <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>style<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Polyfills<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> type <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>s<span class="pl-pds">&#39;</span></span>);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L127">127</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC127">  <span class="pl-k">var</span> next <span class="pl-k">=</span> <span class="pl-en">getNextComponent</span>(i);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L128">128</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC128"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="5">
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-sha">70f2833</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-commit-title" title="Initial version of the automatically generated docs">Initial version of the automatically generated docs</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-02-12T22:43:41Z" is="relative-time">Feb 12, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L129">129</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC129">  <span class="pl-k">var</span> res <span class="pl-k">=</span> [</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L130">130</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC130">    <span class="pl-s"><span class="pl-pds">&#39;</span>---<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L131">131</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC131">    <span class="pl-s"><span class="pl-pds">&#39;</span>id: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">slugify</span>(componentName),</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L132">132</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC132">    <span class="pl-s"><span class="pl-pds">&#39;</span>title: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> componentName,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/d935f4554b83cef5a144dbdd33eb9e978d0266c0" class="blame-sha">d935f45</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/d935f4554b83cef5a144dbdd33eb9e978d0266c0" class="blame-commit-title" title="Improvements in the docs generation">Improvements in the docs generation</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/d935f4554b83cef5a144dbdd33eb9e978d0266c0#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-05T02:10:12Z" is="relative-time">Mar 4, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L133">133</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC133">    <span class="pl-s"><span class="pl-pds">&#39;</span>layout: autodocs<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/debd5b0942736f1c9a72c4aad3458a9c17db6eee" class="blame-sha">debd5b0</a>
            <img alt="@brentvatne" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/90494?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/debd5b0942736f1c9a72c4aad3458a9c17db6eee" class="blame-commit-title" title="[Docs] Remove Transforms from sidebar, add to Style">[Docs] Remove Transforms from sidebar, add to Style</a>
            <div class="blame-commit-meta">
              <a href="/brentvatne" class="muted-link" rel="contributor">brentvatne</a> authored
              <time datetime="2015-05-07T23:05:30Z" is="relative-time">May 7, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L134">134</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC134">    <span class="pl-s"><span class="pl-pds">&#39;</span>category: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> category,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-sha">70f2833</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-commit-title" title="Initial version of the automatically generated docs">Initial version of the automatically generated docs</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-02-12T22:43:41Z" is="relative-time">Feb 12, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L135">135</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC135">    <span class="pl-s"><span class="pl-pds">&#39;</span>permalink: docs/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">slugify</span>(componentName) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.html<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be" class="blame-sha">42eb546</a>
            <img alt="@mkonicek" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/346214?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be" class="blame-commit-title" title="Release React Native for Android

This is an early release and there are several things that are known
not to work if you&#39;re porting your iOS app to Android.

See the Known Issues guide on the website.

We will work with the community to reach platform parity with iOS.">Release React Native for Android</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/mkonicek" class="muted-link" rel="contributor">mkonicek</a> authored
              <time datetime="2015-09-14T14:35:58Z" is="relative-time">Sep 14, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L136">136</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC136">    <span class="pl-s"><span class="pl-pds">&#39;</span>platform: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> componentPlatform,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="3">
            <a href="/facebook/react-native/commit/debd5b0942736f1c9a72c4aad3458a9c17db6eee" class="blame-sha">debd5b0</a>
            <img alt="@brentvatne" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/90494?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/debd5b0942736f1c9a72c4aad3458a9c17db6eee" class="blame-commit-title" title="[Docs] Remove Transforms from sidebar, add to Style">[Docs] Remove Transforms from sidebar, add to Style</a>
            <div class="blame-commit-meta">
              <a href="/brentvatne" class="muted-link" rel="contributor">brentvatne</a> authored
              <time datetime="2015-05-07T23:05:30Z" is="relative-time">May 7, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L137">137</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC137">    <span class="pl-s"><span class="pl-pds">&#39;</span>next: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> next,</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L138">138</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC138">    <span class="pl-s"><span class="pl-pds">&#39;</span>sidebar: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">shouldDisplayInSidebar</span>(componentName),</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/5af8849aa45e92da20d3ffb62cb2aa5b5868299f" class="blame-sha">5af8849</a>
            <img alt="@jsierles" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/82?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/5af8849aa45e92da20d3ffb62cb2aa5b5868299f" class="blame-commit-title" title="[Docs] Add a &#39;run this example&#39; link to AlertIOS docs, plus supporting code to add more links progressively">[Docs] Add a &#39;run this example&#39; link to AlertIOS docs, plus supportin…</a>
            <div class="blame-commit-meta">
              <a href="/jsierles" class="muted-link" rel="contributor">jsierles</a> authored
              <time datetime="2015-06-30T21:39:49Z" is="relative-time">Jun 30, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="5"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L139">139</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC139">    <span class="pl-s"><span class="pl-pds">&#39;</span>runnable:<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">isRunnable</span>(componentName),</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-sha">70f2833</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-commit-title" title="Initial version of the automatically generated docs">Initial version of the automatically generated docs</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-02-12T22:43:41Z" is="relative-time">Feb 12, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L140">140</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC140">    <span class="pl-s"><span class="pl-pds">&#39;</span>---<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/d935f4554b83cef5a144dbdd33eb9e978d0266c0" class="blame-sha">d935f45</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/d935f4554b83cef5a144dbdd33eb9e978d0266c0" class="blame-commit-title" title="Improvements in the docs generation">Improvements in the docs generation</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/d935f4554b83cef5a144dbdd33eb9e978d0266c0#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-05T02:10:12Z" is="relative-time">Mar 5, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L141">141</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC141">    <span class="pl-smi">JSON</span>.<span class="pl-en">stringify</span>(json, <span class="pl-c1">null</span>, <span class="pl-c1">2</span>),</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="5">
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-sha">70f2833</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-commit-title" title="Initial version of the automatically generated docs">Initial version of the automatically generated docs</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-02-12T22:43:41Z" is="relative-time">Feb 12, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L142">142</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC142">  ].<span class="pl-en">filter</span>(<span class="pl-k">function</span>(<span class="pl-smi">line</span>) { <span class="pl-k">return</span> line; }).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L143">143</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC143">  <span class="pl-k">return</span> res;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L144">144</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC144">}</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L145">145</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC145"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="9">
            <a href="/facebook/react-native/commit/4681da54205b3c2e682850c4b5b5fcb655a296c4" class="blame-sha">4681da5</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/4681da54205b3c2e682850c4b5b5fcb655a296c4" class="blame-commit-title" title="Add geolocation polyfill">Add geolocation polyfill</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-25T04:13:55Z" is="relative-time">Mar 24, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L146">146</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC146"><span class="pl-k">var</span> n;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L147">147</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC147"></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L148">148</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC148"><span class="pl-k">function</span> <span class="pl-en">renderComponent</span>(<span class="pl-smi">filepath</span>) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L149">149</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC149">  <span class="pl-k">var</span> json <span class="pl-k">=</span> <span class="pl-smi">docgen</span>.<span class="pl-c1">parse</span>(</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L150">150</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC150">    <span class="pl-smi">fs</span>.<span class="pl-en">readFileSync</span>(filepath),</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L151">151</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC151">    <span class="pl-smi">docgenHelpers</span>.<span class="pl-smi">findExportedOrFirst</span>,</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L152">152</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC152">    <span class="pl-smi">docgen</span>.<span class="pl-smi">defaultHandlers</span>.<span class="pl-c1">concat</span>(<span class="pl-smi">docgenHelpers</span>.<span class="pl-smi">stylePropTypeHandler</span>)</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L153">153</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC153">  );</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/731d4a061085558a302c3e76304140973e7b57b4" class="blame-sha">731d4a0</a>
            <img alt="@brentvatne" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/90494?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/731d4a061085558a302c3e76304140973e7b57b4" class="blame-commit-title" title="Remove the deprecated transform propTypes">Remove the deprecated transform propTypes</a>
            <div class="blame-commit-meta">
              <a href="/brentvatne" class="muted-link" rel="contributor">brentvatne</a> authored
              <time datetime="2015-05-07T19:50:41Z" is="relative-time">May 7, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L154">154</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC154"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="10">
            <a href="/facebook/react-native/commit/4681da54205b3c2e682850c4b5b5fcb655a296c4" class="blame-sha">4681da5</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/4681da54205b3c2e682850c4b5b5fcb655a296c4" class="blame-commit-title" title="Add geolocation polyfill">Add geolocation polyfill</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-25T04:13:55Z" is="relative-time">Mar 25, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L155">155</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC155">  <span class="pl-k">return</span> <span class="pl-en">componentsToMarkdown</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>component<span class="pl-pds">&#39;</span></span>, json, filepath, n<span class="pl-k">++</span>, styleDocs);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L156">156</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC156">}</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L157">157</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC157"></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L158">158</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC158"><span class="pl-k">function</span> <span class="pl-en">renderAPI</span>(<span class="pl-smi">type</span>) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L159">159</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC159">  <span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">filepath</span>) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L160">160</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC160">    <span class="pl-k">var</span> json;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L161">161</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC161">    <span class="pl-k">try</span> {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L162">162</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC162">      json <span class="pl-k">=</span> <span class="pl-en">jsDocs</span>(<span class="pl-smi">fs</span>.<span class="pl-en">readFileSync</span>(filepath).<span class="pl-c1">toString</span>());</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L163">163</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC163">    } <span class="pl-k">catch</span>(e) {</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/126928b0b4d06b9850f5e53582420d224b2a40ce" class="blame-sha">126928b</a>
            <img alt="@sahrens" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1509831?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/126928b0b4d06b9850f5e53582420d224b2a40ce" class="blame-commit-title" title="[Docs] Expand API parsing and rendering

The `Animated` module exposes a lot of functionality, including internal
classes. This diff extracts properties and classes from modules and renders them
recursively.

This also adds `Animated` to the autogen docs now that they more capable,
although it needs way more docblocks and such which will come later.">[Docs] Expand API parsing and rendering</a>
            <div class="blame-commit-meta">
              <a href="/sahrens" class="muted-link" rel="contributor">sahrens</a> authored
              <time datetime="2015-09-01T19:41:51Z" is="relative-time">Sep 1, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L164">164</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC164">      <span class="pl-en">console</span>.<span class="pl-c1">error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Cannot parse file<span class="pl-pds">&#39;</span></span>, filepath, e);</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="13">
            <a href="/facebook/react-native/commit/4681da54205b3c2e682850c4b5b5fcb655a296c4" class="blame-sha">4681da5</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/4681da54205b3c2e682850c4b5b5fcb655a296c4" class="blame-commit-title" title="Add geolocation polyfill">Add geolocation polyfill</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-25T04:13:55Z" is="relative-time">Mar 25, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L165">165</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC165">      json <span class="pl-k">=</span> {};</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L166">166</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC166">    }</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L167">167</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC167">    <span class="pl-k">return</span> <span class="pl-en">componentsToMarkdown</span>(type, json, filepath, n<span class="pl-k">++</span>);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L168">168</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC168">  };</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L169">169</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC169">}</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L170">170</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC170"></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L171">171</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC171"><span class="pl-k">function</span> <span class="pl-en">renderStyle</span>(<span class="pl-smi">filepath</span>) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L172">172</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC172">  <span class="pl-k">var</span> json <span class="pl-k">=</span> <span class="pl-smi">docgen</span>.<span class="pl-c1">parse</span>(</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L173">173</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC173">    <span class="pl-smi">fs</span>.<span class="pl-en">readFileSync</span>(filepath),</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L174">174</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC174">    <span class="pl-smi">docgenHelpers</span>.<span class="pl-smi">findExportedObject</span>,</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L175">175</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC175">    [<span class="pl-smi">docgen</span>.<span class="pl-smi">handlers</span>.<span class="pl-smi">propTypeHandler</span>]</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L176">176</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC176">  );</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/731d4a061085558a302c3e76304140973e7b57b4" class="blame-sha">731d4a0</a>
            <img alt="@brentvatne" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/90494?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/731d4a061085558a302c3e76304140973e7b57b4" class="blame-commit-title" title="Remove the deprecated transform propTypes">Remove the deprecated transform propTypes</a>
            <div class="blame-commit-meta">
              <a href="/brentvatne" class="muted-link" rel="contributor">brentvatne</a> authored
              <time datetime="2015-05-07T19:50:41Z" is="relative-time">May 7, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L177">177</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC177"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/debd5b0942736f1c9a72c4aad3458a9c17db6eee" class="blame-sha">debd5b0</a>
            <img alt="@brentvatne" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/90494?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/debd5b0942736f1c9a72c4aad3458a9c17db6eee" class="blame-commit-title" title="[Docs] Remove Transforms from sidebar, add to Style">[Docs] Remove Transforms from sidebar, add to Style</a>
            <div class="blame-commit-meta">
              <a href="/brentvatne" class="muted-link" rel="contributor">brentvatne</a> authored
              <time datetime="2015-05-07T23:05:30Z" is="relative-time">May 7, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L178">178</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC178">  <span class="pl-c">// Remove deprecated transform props from docs</span></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="7">
            <a href="/facebook/react-native/commit/731d4a061085558a302c3e76304140973e7b57b4" class="blame-sha">731d4a0</a>
            <img alt="@brentvatne" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/90494?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/731d4a061085558a302c3e76304140973e7b57b4" class="blame-commit-title" title="Remove the deprecated transform propTypes">Remove the deprecated transform propTypes</a>
            <div class="blame-commit-meta">
              <a href="/brentvatne" class="muted-link" rel="contributor">brentvatne</a> authored
              <time datetime="2015-05-07T19:50:41Z" is="relative-time">May 7, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L179">179</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC179">  <span class="pl-k">if</span> (filepath <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>../Libraries/StyleSheet/TransformPropTypes.js<span class="pl-pds">&quot;</span></span>) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L180">180</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC180">    [<span class="pl-s"><span class="pl-pds">&#39;</span>rotation<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>scaleX<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>scaleY<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>translateX<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>translateY<span class="pl-pds">&#39;</span></span>].<span class="pl-en">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">key</span>) {</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L181">181</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC181">      <span class="pl-k">delete</span> json[<span class="pl-s"><span class="pl-pds">&#39;</span>props<span class="pl-pds">&#39;</span></span>][key];</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L182">182</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC182">    });</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L183">183</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC183">  }</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L184">184</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC184"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="4">
            <a href="/facebook/react-native/commit/4681da54205b3c2e682850c4b5b5fcb655a296c4" class="blame-sha">4681da5</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/4681da54205b3c2e682850c4b5b5fcb655a296c4" class="blame-commit-title" title="Add geolocation polyfill">Add geolocation polyfill</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-25T04:13:55Z" is="relative-time">Mar 25, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L185">185</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC185">  <span class="pl-k">return</span> <span class="pl-en">componentsToMarkdown</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>style<span class="pl-pds">&#39;</span></span>, json, filepath, n<span class="pl-k">++</span>);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L186">186</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC186">}</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L187">187</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC187"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-sha">70f2833</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-commit-title" title="Initial version of the automatically generated docs">Initial version of the automatically generated docs</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-02-12T22:43:41Z" is="relative-time">Feb 12, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L188">188</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC188"><span class="pl-k">var</span> components <span class="pl-k">=</span> [</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/b9ab60719767bda61ca55e0f8e86a60bdebc9ec3" class="blame-sha">b9ab607</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/b9ab60719767bda61ca55e0f8e86a60bdebc9ec3" class="blame-commit-title" title="Use docs/ComponentName.md at the end of the component docs">Use docs/ComponentName.md at the end of the component docs</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-05T05:03:24Z" is="relative-time">Mar 5, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L189">189</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC189">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Components/ActivityIndicatorIOS/ActivityIndicatorIOS.ios.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/83581cfe6bf046c6d659d96cb0b25f62e0e9da00" class="blame-sha">83581cf</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/83581cfe6bf046c6d659d96cb0b25f62e0e9da00" class="blame-commit-title" title="Initial import of the lib to parse javascript code, in the same vein as we parse React proptypes">Initial import of the lib to parse javascript code, in the same vein …</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-10T20:55:54Z" is="relative-time">Mar 10, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L190">190</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC190">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Components/DatePicker/DatePickerIOS.ios.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be" class="blame-sha">42eb546</a>
            <img alt="@mkonicek" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/346214?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be" class="blame-commit-title" title="Release React Native for Android

This is an early release and there are several things that are known
not to work if you&#39;re porting your iOS app to Android.

See the Known Issues guide on the website.

We will work with the community to reach platform parity with iOS.">Release React Native for Android</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/mkonicek" class="muted-link" rel="contributor">mkonicek</a> authored
              <time datetime="2015-09-14T14:35:58Z" is="relative-time">Sep 14, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L191">191</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC191">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Components/DrawerAndroid/DrawerLayoutAndroid.android.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/f77d9f8bae5344c5f69de305ccfe14b5a0c8a528" class="blame-sha">f77d9f8</a>
            <img alt="@fkling" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/179026?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/f77d9f8bae5344c5f69de305ccfe14b5a0c8a528" class="blame-commit-title" title="Update react-docgen">Update react-docgen</a>
            <div class="blame-commit-meta">
              <a href="/fkling" class="muted-link" rel="contributor">fkling</a> authored
              <time datetime="2015-03-03T01:31:26Z" is="relative-time">Mar 2, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L192">192</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC192">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Image/Image.ios.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/a66fad52b65874abcfc1ac79da81057279dd5dac" class="blame-sha">a66fad5</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/a66fad52b65874abcfc1ac79da81057279dd5dac" class="blame-commit-title" title="Updates from Fri 20 Mar

- declare timeoutID | Basil Hosmer
- [react-packager] Allow entry point extensions like .ios.js | Amjad Masad
- [react-native] Use SpreadProperty to make react-docgen happy | Felix Kling
- clean Examples/2048 | Basil Hosmer
- [ReactNative] Adjust packager default root when running from within node_modules | Alex Kotliarskyi
- [ReactNative] Add missing websocket dependency | Alex Kotliarskyi
- [react-packager] change all but one `ix` to `require` | Amjad Masad">Updates from Fri 20 Mar</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-21T17:07:45Z" is="relative-time">Mar 21, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L193">193</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC193">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/CustomComponents/ListView/ListView.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/28aa691d135e9fd201f86816a0a2d635361c5b64" class="blame-sha">28aa691</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/28aa691d135e9fd201f86816a0a2d635361c5b64" class="blame-commit-title" title="Updates from Fri 13 Mar

- [ReactNative] Oss ActionSheet | Tadeu Zagallo
- [ReactNative] Fix ScrollView.scrollTo() | Christopher Chedeau
- [catalyst|madman] fix location observer | Jiajie Zhu
- [ReactNative] Remove keyboardDismissMode from static | Christopher Chedeau
- [ReactNative] Fix RCTMapManager retaining cycle | Tadeu Zagallo
- [ReactNative] Support loading sourcemaps from sourceMappingURL | Alex Kotliarskyi
- [catalyst] set up directory specific rql transform | Bhuwan Khattar
- [React Native] Add .done() to terminate promise chains | Ben Alpert
- [React Native] add support for reading tracking bit | Owen Coutts">Updates from Fri 13 Mar</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-13T22:30:31Z" is="relative-time">Mar 13, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L194">194</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC194">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Components/MapView/MapView.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/51b1f399be6e119aeeab12c4c17c682f11c93f57" class="blame-sha">51b1f39</a>
            <img alt="@sahrens" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1509831?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/51b1f399be6e119aeeab12c4c17c682f11c93f57" class="blame-commit-title" title="Update auto gen docs

* docgen -&gt; v2.0.1 to support ES6 classes.
* Add `&lt;Modal&gt;` and `&lt;ProgressViewIOS&gt;` components to docs.">Update auto gen docs</a>
            <div class="blame-commit-meta">
              <a href="/sahrens" class="muted-link" rel="contributor">sahrens</a> authored
              <time datetime="2015-08-31T19:23:11Z" is="relative-time">Aug 31, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L195">195</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC195">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Modal/Modal.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/fab8e38759f620f242557e1219c2e6c8c5766f1f" class="blame-sha">fab8e38</a>
            <img alt="@spicyj" class="avatar blame-commit-avatar" height="32" src="https://avatars2.githubusercontent.com/u/6820?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/fab8e38759f620f242557e1219c2e6c8c5766f1f" class="blame-commit-title" title="Fix ABC order of docs nav">Fix ABC order of docs nav</a>
            <div class="blame-commit-meta">
              <a href="/spicyj" class="muted-link" rel="contributor">spicyj</a> authored
              <time datetime="2015-11-26T05:26:32Z" is="relative-time">Nov 25, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="1"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L196">196</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC196">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/CustomComponents/Navigator/Navigator.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-sha">70f2833</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-commit-title" title="Initial version of the automatically generated docs">Initial version of the automatically generated docs</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-02-12T22:43:41Z" is="relative-time">Feb 12, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L197">197</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC197">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Components/Navigation/NavigatorIOS.ios.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/28aa691d135e9fd201f86816a0a2d635361c5b64" class="blame-sha">28aa691</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/28aa691d135e9fd201f86816a0a2d635361c5b64" class="blame-commit-title" title="Updates from Fri 13 Mar

- [ReactNative] Oss ActionSheet | Tadeu Zagallo
- [ReactNative] Fix ScrollView.scrollTo() | Christopher Chedeau
- [catalyst|madman] fix location observer | Jiajie Zhu
- [ReactNative] Remove keyboardDismissMode from static | Christopher Chedeau
- [ReactNative] Fix RCTMapManager retaining cycle | Tadeu Zagallo
- [ReactNative] Support loading sourcemaps from sourceMappingURL | Alex Kotliarskyi
- [catalyst] set up directory specific rql transform | Bhuwan Khattar
- [React Native] Add .done() to terminate promise chains | Ben Alpert
- [React Native] add support for reading tracking bit | Owen Coutts">Updates from Fri 13 Mar</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-13T22:30:31Z" is="relative-time">Mar 13, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L198">198</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC198">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Picker/PickerIOS.ios.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be" class="blame-sha">42eb546</a>
            <img alt="@mkonicek" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/346214?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be" class="blame-commit-title" title="Release React Native for Android

This is an early release and there are several things that are known
not to work if you&#39;re porting your iOS app to Android.

See the Known Issues guide on the website.

We will work with the community to reach platform parity with iOS.">Release React Native for Android</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/mkonicek" class="muted-link" rel="contributor">mkonicek</a> authored
              <time datetime="2015-09-14T14:35:58Z" is="relative-time">Sep 14, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L199">199</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC199">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Components/ProgressBarAndroid/ProgressBarAndroid.android.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/51b1f399be6e119aeeab12c4c17c682f11c93f57" class="blame-sha">51b1f39</a>
            <img alt="@sahrens" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1509831?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/51b1f399be6e119aeeab12c4c17c682f11c93f57" class="blame-commit-title" title="Update auto gen docs

* docgen -&gt; v2.0.1 to support ES6 classes.
* Add `&lt;Modal&gt;` and `&lt;ProgressViewIOS&gt;` components to docs.">Update auto gen docs</a>
            <div class="blame-commit-meta">
              <a href="/sahrens" class="muted-link" rel="contributor">sahrens</a> authored
              <time datetime="2015-08-31T19:23:11Z" is="relative-time">Aug 31, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L200">200</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC200">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Components/ProgressViewIOS/ProgressViewIOS.ios.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/f87b0cb495470e3ca28599a82233d57a2dce9eb9" class="blame-sha">f87b0cb</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/f87b0cb495470e3ca28599a82233d57a2dce9eb9" class="blame-commit-title" title="[Website] Add a link when composing prop types">[Website] Add a link when composing prop types</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-09T18:49:58Z" is="relative-time">Mar 9, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L201">201</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC201">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Components/ScrollView/ScrollView.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/1c05aff424be56206daac12a540c7b925b7a76ce" class="blame-sha">1c05aff</a>
            <img alt="@umhan35" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/3271612?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/1c05aff424be56206daac12a540c7b925b7a76ce" class="blame-commit-title" title="Add SegmentedControlIOS documentation to website">Add SegmentedControlIOS documentation to website</a>
            <div class="blame-commit-meta">
              <a href="/umhan35" class="muted-link" rel="contributor">umhan35</a> authored
              <time datetime="2015-05-15T03:22:31Z" is="relative-time">May 14, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L202">202</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC202">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Components/SegmentedControlIOS/SegmentedControlIOS.ios.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/5ebe0ed7179ff5c3513a08121004c6fe8b957a8b" class="blame-sha">5ebe0ed</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/5ebe0ed7179ff5c3513a08121004c6fe8b957a8b" class="blame-commit-title" title="Bust jest caching and fix tests">Bust jest caching and fix tests</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-08-11T17:25:39Z" is="relative-time">Aug 11, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="4"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L203">203</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC203">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Components/SliderIOS/SliderIOS.ios.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be" class="blame-sha">42eb546</a>
            <img alt="@mkonicek" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/346214?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be" class="blame-commit-title" title="Release React Native for Android

This is an early release and there are several things that are known
not to work if you&#39;re porting your iOS app to Android.

See the Known Issues guide on the website.

We will work with the community to reach platform parity with iOS.">Release React Native for Android</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/mkonicek" class="muted-link" rel="contributor">mkonicek</a> authored
              <time datetime="2015-09-14T14:35:58Z" is="relative-time">Sep 14, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L204">204</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC204">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Components/SwitchAndroid/SwitchAndroid.android.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="3">
            <a href="/facebook/react-native/commit/83581cfe6bf046c6d659d96cb0b25f62e0e9da00" class="blame-sha">83581cf</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/83581cfe6bf046c6d659d96cb0b25f62e0e9da00" class="blame-commit-title" title="Initial import of the lib to parse javascript code, in the same vein as we parse React proptypes">Initial import of the lib to parse javascript code, in the same vein …</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-10T20:55:54Z" is="relative-time">Mar 10, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L205">205</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC205">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Components/SwitchIOS/SwitchIOS.ios.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L206">206</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC206">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Components/TabBarIOS/TabBarIOS.ios.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/9ee6cd61682c19d3373a388474b9071ed729078b" class="blame-sha">9ee6cd6</a>
            <img alt="@brentvatne" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/90494?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/9ee6cd61682c19d3373a388474b9071ed729078b" class="blame-commit-title" title="[Docs] Add TabBarIOS.Item to docs">[Docs] Add TabBarIOS.Item to docs</a>
            <div class="blame-commit-meta">
              <a href="/brentvatne" class="muted-link" rel="contributor">brentvatne</a> authored
              <time datetime="2015-04-21T17:19:36Z" is="relative-time">Apr 21, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L207">207</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC207">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Components/TabBarIOS/TabBarItemIOS.ios.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/f77d9f8bae5344c5f69de305ccfe14b5a0c8a528" class="blame-sha">f77d9f8</a>
            <img alt="@fkling" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/179026?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/f77d9f8bae5344c5f69de305ccfe14b5a0c8a528" class="blame-commit-title" title="Update react-docgen">Update react-docgen</a>
            <div class="blame-commit-meta">
              <a href="/fkling" class="muted-link" rel="contributor">fkling</a> authored
              <time datetime="2015-03-03T01:31:26Z" is="relative-time">Mar 3, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L208">208</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC208">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Text/Text.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/ed7b5cb1876ec5b85e93d6b112f9e7dd1c592841" class="blame-sha">ed7b5cb</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/ed7b5cb1876ec5b85e93d6b112f9e7dd1c592841" class="blame-commit-title" title="Fix docs">Fix docs</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-31T16:46:45Z" is="relative-time">Mar 31, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L209">209</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC209">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Components/TextInput/TextInput.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be" class="blame-sha">42eb546</a>
            <img alt="@mkonicek" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/346214?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be" class="blame-commit-title" title="Release React Native for Android

This is an early release and there are several things that are known
not to work if you&#39;re porting your iOS app to Android.

See the Known Issues guide on the website.

We will work with the community to reach platform parity with iOS.">Release React Native for Android</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/mkonicek" class="muted-link" rel="contributor">mkonicek</a> authored
              <time datetime="2015-09-14T14:35:58Z" is="relative-time">Sep 14, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L210">210</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC210">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Components/ToolbarAndroid/ToolbarAndroid.android.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-sha">70f2833</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-commit-title" title="Initial version of the automatically generated docs">Initial version of the automatically generated docs</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-02-12T22:43:41Z" is="relative-time">Feb 12, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L211">211</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC211">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Components/Touchable/TouchableHighlight.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be" class="blame-sha">42eb546</a>
            <img alt="@mkonicek" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/346214?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be" class="blame-commit-title" title="Release React Native for Android

This is an early release and there are several things that are known
not to work if you&#39;re porting your iOS app to Android.

See the Known Issues guide on the website.

We will work with the community to reach platform parity with iOS.">Release React Native for Android</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/mkonicek" class="muted-link" rel="contributor">mkonicek</a> authored
              <time datetime="2015-09-14T14:35:58Z" is="relative-time">Sep 14, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L212">212</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC212">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Components/Touchable/TouchableNativeFeedback.android.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/b9ab60719767bda61ca55e0f8e86a60bdebc9ec3" class="blame-sha">b9ab607</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/b9ab60719767bda61ca55e0f8e86a60bdebc9ec3" class="blame-commit-title" title="Use docs/ComponentName.md at the end of the component docs">Use docs/ComponentName.md at the end of the component docs</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-05T05:03:24Z" is="relative-time">Mar 5, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L213">213</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC213">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Components/Touchable/TouchableOpacity.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-sha">70f2833</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-commit-title" title="Initial version of the automatically generated docs">Initial version of the automatically generated docs</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-02-12T22:43:41Z" is="relative-time">Feb 12, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L214">214</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC214">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Components/Touchable/TouchableWithoutFeedback.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/472c287cd3a05953020ef73cc7cd88da9982ee84" class="blame-sha">472c287</a>
            <img alt="@fkling" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/179026?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/472c287cd3a05953020ef73cc7cd88da9982ee84" class="blame-commit-title" title="Update react-docgen and ignore pages with no header">Update react-docgen and ignore pages with no header</a>
            <div class="blame-commit-meta">
              <a href="/fkling" class="muted-link" rel="contributor">fkling</a> authored
              <time datetime="2015-02-19T00:39:28Z" is="relative-time">Feb 18, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L215">215</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC215">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Components/View/View.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/b39b97546ac0e493723d73149c6950b04c2f203c" class="blame-sha">b39b975</a>
            <img alt="@brentvatne" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/90494?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/b39b97546ac0e493723d73149c6950b04c2f203c" class="blame-commit-title" title="[Docs] Add ViewPagerAndroid to extractDocs">[Docs] Add ViewPagerAndroid to extractDocs</a>
            <div class="blame-commit-meta">
              <a href="/brentvatne" class="muted-link" rel="contributor">brentvatne</a> authored
              <time datetime="2015-10-17T02:25:43Z" is="relative-time">Oct 16, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L216">216</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC216">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Components/ViewPager/ViewPagerAndroid.android.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/55598f913caef4e7c8a7cd47e9ec354f6aeb2dde" class="blame-sha">55598f9</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/55598f913caef4e7c8a7cd47e9ec354f6aeb2dde" class="blame-commit-title" title="[website] Expose all the functions exported by react-native in the docs">[website] Expose all the functions exported by react-native in the docs</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-18T03:41:06Z" is="relative-time">Mar 17, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L217">217</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC217">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Components/WebView/WebView.ios.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="3">
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-sha">70f2833</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-commit-title" title="Initial version of the automatically generated docs">Initial version of the automatically generated docs</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-02-12T22:43:41Z" is="relative-time">Feb 12, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L218">218</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC218">];</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L219">219</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC219"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/83581cfe6bf046c6d659d96cb0b25f62e0e9da00" class="blame-sha">83581cf</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/83581cfe6bf046c6d659d96cb0b25f62e0e9da00" class="blame-commit-title" title="Initial import of the lib to parse javascript code, in the same vein as we parse React proptypes">Initial import of the lib to parse javascript code, in the same vein …</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-10T20:55:54Z" is="relative-time">Mar 10, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L220">220</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC220"><span class="pl-k">var</span> apis <span class="pl-k">=</span> [</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/13579d9dfd1b2f8876c843a9be6497cdf510ee12" class="blame-sha">13579d9</a>
            <img alt="@umhan35" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/3271612?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/13579d9dfd1b2f8876c843a9be6497cdf510ee12" class="blame-commit-title" title="Add ActionSheetIOS to website">Add ActionSheetIOS to website</a>
            <div class="blame-commit-meta">
              <a href="/umhan35" class="muted-link" rel="contributor">umhan35</a> authored
              <time datetime="2015-06-11T03:41:21Z" is="relative-time">Jun 10, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="6"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L221">221</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC221">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/ActionSheetIOS/ActionSheetIOS.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/55598f913caef4e7c8a7cd47e9ec354f6aeb2dde" class="blame-sha">55598f9</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/55598f913caef4e7c8a7cd47e9ec354f6aeb2dde" class="blame-commit-title" title="[website] Expose all the functions exported by react-native in the docs">[website] Expose all the functions exported by react-native in the docs</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-18T03:41:06Z" is="relative-time">Mar 18, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L222">222</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC222">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Utilities/AlertIOS.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/00ceec9def0dff134d9fbfcb2104a64686720789" class="blame-sha">00ceec9</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/00ceec9def0dff134d9fbfcb2104a64686720789" class="blame-commit-title" title="Fix website with Animated

Animated.js has been renamed (and moved) to AnimatedImplementation.js, so we need to update the path and add another translation rule.">Fix website with Animated</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-09-22T19:54:04Z" is="relative-time">Sep 22, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L223">223</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC223">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Animated/src/AnimatedImplementation.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="3">
            <a href="/facebook/react-native/commit/28aa691d135e9fd201f86816a0a2d635361c5b64" class="blame-sha">28aa691</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/28aa691d135e9fd201f86816a0a2d635361c5b64" class="blame-commit-title" title="Updates from Fri 13 Mar

- [ReactNative] Oss ActionSheet | Tadeu Zagallo
- [ReactNative] Fix ScrollView.scrollTo() | Christopher Chedeau
- [catalyst|madman] fix location observer | Jiajie Zhu
- [ReactNative] Remove keyboardDismissMode from static | Christopher Chedeau
- [ReactNative] Fix RCTMapManager retaining cycle | Tadeu Zagallo
- [ReactNative] Support loading sourcemaps from sourceMappingURL | Alex Kotliarskyi
- [catalyst] set up directory specific rql transform | Bhuwan Khattar
- [React Native] Add .done() to terminate promise chains | Ben Alpert
- [React Native] add support for reading tracking bit | Owen Coutts">Updates from Fri 13 Mar</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-13T22:30:31Z" is="relative-time">Mar 13, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L224">224</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC224">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/AppRegistry/AppRegistry.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L225">225</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC225">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/AppStateIOS/AppStateIOS.ios.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/38398bc6a3e4e7d1b011769d8e143cc3077653a2" class="blame-sha">38398bc</a>
            <img alt="@chirag04" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/954063?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/38398bc6a3e4e7d1b011769d8e143cc3077653a2" class="blame-commit-title" title="fix website build after asyncstorage changes.">fix website build after asyncstorage changes.</a>
            <div class="blame-commit-meta">
              <a href="/chirag04" class="muted-link" rel="contributor">chirag04</a> authored
              <time datetime="2015-10-27T18:10:59Z" is="relative-time">Oct 27, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L226">226</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC226">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Storage/AsyncStorage.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be" class="blame-sha">42eb546</a>
            <img alt="@mkonicek" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/346214?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be" class="blame-commit-title" title="Release React Native for Android

This is an early release and there are several things that are known
not to work if you&#39;re porting your iOS app to Android.

See the Known Issues guide on the website.

We will work with the community to reach platform parity with iOS.">Release React Native for Android</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/mkonicek" class="muted-link" rel="contributor">mkonicek</a> authored
              <time datetime="2015-09-14T14:35:58Z" is="relative-time">Sep 14, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L227">227</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC227">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Utilities/BackAndroid.android.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/33bfb322ad49654db50078af101bee90a5e7f46b" class="blame-sha">33bfb32</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/33bfb322ad49654db50078af101bee90a5e7f46b" class="blame-commit-title" title="Wire up jsdocs for apis">Wire up jsdocs for apis</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-12T18:03:32Z" is="relative-time">Mar 12, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L228">228</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC228">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/CameraRoll/CameraRoll.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/36f015c0dd402c690c6fa14b9408d51a1502663e" class="blame-sha">36f015c</a>
            <img alt="@brentvatne" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/90494?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/36f015c0dd402c690c6fa14b9408d51a1502663e" class="blame-commit-title" title="[Docs] Add Dimensions to API docs">[Docs] Add Dimensions to API docs</a>
            <div class="blame-commit-meta">
              <a href="/brentvatne" class="muted-link" rel="contributor">brentvatne</a> authored
              <time datetime="2015-10-09T21:44:36Z" is="relative-time">Oct 9, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L229">229</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC229">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Utilities/Dimensions.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/55598f913caef4e7c8a7cd47e9ec354f6aeb2dde" class="blame-sha">55598f9</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/55598f913caef4e7c8a7cd47e9ec354f6aeb2dde" class="blame-commit-title" title="[website] Expose all the functions exported by react-native in the docs">[website] Expose all the functions exported by react-native in the docs</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-18T03:41:06Z" is="relative-time">Mar 18, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L230">230</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC230">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Interaction/InteractionManager.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/480b5c9e2e8716355e5451395a6d3717c82f3919" class="blame-sha">480b5c9</a>
            <img alt="@mkonicek" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/346214?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/480b5c9e2e8716355e5451395a6d3717c82f3919" class="blame-commit-title" title="[website] Fix website generation">[website] Fix website generation</a>
            <div class="blame-commit-meta">
              <a href="/mkonicek" class="muted-link" rel="contributor">mkonicek</a> authored
              <time datetime="2015-08-25T18:23:41Z" is="relative-time">Aug 25, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="4"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L231">231</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC231">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/LayoutAnimation/LayoutAnimation.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/df7d9c27f906f3e03a1e6a0b113a85ebdd775412" class="blame-sha">df7d9c2</a>
            <img alt="@tadeuzagallo" class="avatar blame-commit-avatar" height="32" src="https://avatars0.githubusercontent.com/u/764414?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/df7d9c27f906f3e03a1e6a0b113a85ebdd775412" class="blame-commit-title" title="[ReactNative][Docs] Add docs to LinkingIOS">[ReactNative][Docs] Add docs to LinkingIOS</a>
            <div class="blame-commit-meta">
              <a href="/tadeuzagallo" class="muted-link" rel="contributor">tadeuzagallo</a> authored
              <time datetime="2015-03-26T16:32:35Z" is="relative-time">Mar 26, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L232">232</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC232">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/LinkingIOS/LinkingIOS.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/2d7747ecb7a21caccd30c15cd254cb2325e94b3c" class="blame-sha">2d7747e</a>
            <img alt="@mkonicek" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/346214?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/2d7747ecb7a21caccd30c15cd254cb2325e94b3c" class="blame-commit-title" title="Add NativeMethodsMixin docs to website">Add NativeMethodsMixin docs to website</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/2d7747ecb7a21caccd30c15cd254cb2325e94b3c#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/mkonicek" class="muted-link" rel="contributor">mkonicek</a> authored
              <time datetime="2015-10-07T17:04:42Z" is="relative-time">Oct 7, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="2"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L233">233</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC233">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/ReactIOS/NativeMethodsMixin.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/55598f913caef4e7c8a7cd47e9ec354f6aeb2dde" class="blame-sha">55598f9</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/55598f913caef4e7c8a7cd47e9ec354f6aeb2dde" class="blame-commit-title" title="[website] Expose all the functions exported by react-native in the docs">[website] Expose all the functions exported by react-native in the docs</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-18T03:41:06Z" is="relative-time">Mar 18, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L234">234</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC234">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Network/NetInfo.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/d7d7e99c7d46c2a5019d8ff0052e614ce48a5fc4" class="blame-sha">d7d7e99</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/d7d7e99c7d46c2a5019d8ff0052e614ce48a5fc4" class="blame-commit-title" title="Add new files to docs">Add new files to docs</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-25T03:38:29Z" is="relative-time">Mar 24, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L235">235</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC235">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/vendor/react/browser/eventPlugins/PanResponder.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/33bfb322ad49654db50078af101bee90a5e7f46b" class="blame-sha">33bfb32</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/33bfb322ad49654db50078af101bee90a5e7f46b" class="blame-commit-title" title="Wire up jsdocs for apis">Wire up jsdocs for apis</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-12T18:03:32Z" is="relative-time">Mar 12, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L236">236</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC236">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Utilities/PixelRatio.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/d7d7e99c7d46c2a5019d8ff0052e614ce48a5fc4" class="blame-sha">d7d7e99</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/d7d7e99c7d46c2a5019d8ff0052e614ce48a5fc4" class="blame-commit-title" title="Add new files to docs">Add new files to docs</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-25T03:38:29Z" is="relative-time">Mar 25, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L237">237</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC237">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/PushNotificationIOS/PushNotificationIOS.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="3">
            <a href="/facebook/react-native/commit/33bfb322ad49654db50078af101bee90a5e7f46b" class="blame-sha">33bfb32</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/33bfb322ad49654db50078af101bee90a5e7f46b" class="blame-commit-title" title="Wire up jsdocs for apis">Wire up jsdocs for apis</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-12T18:03:32Z" is="relative-time">Mar 12, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L238">238</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC238">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Components/StatusBar/StatusBarIOS.ios.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L239">239</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC239">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/StyleSheet/StyleSheet.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be" class="blame-sha">42eb546</a>
            <img alt="@mkonicek" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/346214?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be" class="blame-commit-title" title="Release React Native for Android

This is an early release and there are several things that are known
not to work if you&#39;re porting your iOS app to Android.

See the Known Issues guide on the website.

We will work with the community to reach platform parity with iOS.">Release React Native for Android</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/42eb5464fd8a65ed84b799de5d4dc225349449be#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/mkonicek" class="muted-link" rel="contributor">mkonicek</a> authored
              <time datetime="2015-09-14T14:35:58Z" is="relative-time">Sep 14, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L240">240</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC240">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Components/ToastAndroid/ToastAndroid.android.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/55598f913caef4e7c8a7cd47e9ec354f6aeb2dde" class="blame-sha">55598f9</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/55598f913caef4e7c8a7cd47e9ec354f6aeb2dde" class="blame-commit-title" title="[website] Expose all the functions exported by react-native in the docs">[website] Expose all the functions exported by react-native in the docs</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-18T03:41:06Z" is="relative-time">Mar 18, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L241">241</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC241">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Vibration/VibrationIOS.ios.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="3">
            <a href="/facebook/react-native/commit/83581cfe6bf046c6d659d96cb0b25f62e0e9da00" class="blame-sha">83581cf</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/83581cfe6bf046c6d659d96cb0b25f62e0e9da00" class="blame-commit-title" title="Initial import of the lib to parse javascript code, in the same vein as we parse React proptypes">Initial import of the lib to parse javascript code, in the same vein …</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-10T20:55:54Z" is="relative-time">Mar 10, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L242">242</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC242">];</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L243">243</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC243"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="3">
            <a href="/facebook/react-native/commit/d5f670d19cde39aaa5064e9c12a2731feaaa8566" class="blame-sha">d5f670d</a>
            <img alt="@fkling" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/179026?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/d5f670d19cde39aaa5064e9c12a2731feaaa8566" class="blame-commit-title" title="Add logic to show style props in docs">Add logic to show style props in docs</a>
            <div class="blame-commit-meta">
              <a href="/fkling" class="muted-link" rel="contributor">fkling</a> authored
              <time datetime="2015-03-19T21:05:07Z" is="relative-time">Mar 19, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L244">244</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC244"><span class="pl-k">var</span> styles <span class="pl-k">=</span> [</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L245">245</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC245">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/StyleSheet/LayoutPropTypes.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/b8ca4e450b2fdff5eed68dbb3e1b4ca00b7d4a9c" class="blame-sha">b8ca4e4</a>
            <img alt="@brentvatne" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/90494?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/b8ca4e450b2fdff5eed68dbb3e1b4ca00b7d4a9c" class="blame-commit-title" title="Add TransformPropTypes to docs">Add TransformPropTypes to docs</a>
            <div class="blame-commit-meta">
              <a href="/brentvatne" class="muted-link" rel="contributor">brentvatne</a> authored
              <time datetime="2015-05-07T19:16:48Z" is="relative-time">May 7, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L246">246</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC246">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/StyleSheet/TransformPropTypes.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="6">
            <a href="/facebook/react-native/commit/d5f670d19cde39aaa5064e9c12a2731feaaa8566" class="blame-sha">d5f670d</a>
            <img alt="@fkling" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/179026?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/d5f670d19cde39aaa5064e9c12a2731feaaa8566" class="blame-commit-title" title="Add logic to show style props in docs">Add logic to show style props in docs</a>
            <div class="blame-commit-meta">
              <a href="/fkling" class="muted-link" rel="contributor">fkling</a> authored
              <time datetime="2015-03-19T21:05:07Z" is="relative-time">Mar 19, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L247">247</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC247">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Components/View/ViewStylePropTypes.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L248">248</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC248">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Text/TextStylePropTypes.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L249">249</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC249">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/Image/ImageStylePropTypes.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L250">250</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC250">];</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L251">251</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC251"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/4681da54205b3c2e682850c4b5b5fcb655a296c4" class="blame-sha">4681da5</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/4681da54205b3c2e682850c4b5b5fcb655a296c4" class="blame-commit-title" title="Add geolocation polyfill">Add geolocation polyfill</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-25T04:13:55Z" is="relative-time">Mar 25, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L252">252</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC252"><span class="pl-k">var</span> polyfills <span class="pl-k">=</span> [</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/846585941159785a3a685db152001d849d60bc75" class="blame-sha">8465859</a>
            <img alt="@sahrens" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1509831?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/846585941159785a3a685db152001d849d60bc75" class="blame-commit-title" title="Fix doc generation for Geolocation">Fix doc generation for Geolocation</a>
            <div class="blame-commit-meta">
              <a href="/sahrens" class="muted-link" rel="contributor">sahrens</a> authored
              <time datetime="2015-04-24T20:14:24Z" is="relative-time">Apr 24, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L253">253</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC253">  <span class="pl-s"><span class="pl-pds">&#39;</span>../Libraries/GeoLocation/Geolocation.js<span class="pl-pds">&#39;</span></span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="5">
            <a href="/facebook/react-native/commit/4681da54205b3c2e682850c4b5b5fcb655a296c4" class="blame-sha">4681da5</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/4681da54205b3c2e682850c4b5b5fcb655a296c4" class="blame-commit-title" title="Add geolocation polyfill">Add geolocation polyfill</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-25T04:13:55Z" is="relative-time">Mar 25, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L254">254</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC254">];</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L255">255</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC255"></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L256">256</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC256"><span class="pl-k">var</span> all <span class="pl-k">=</span> components</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L257">257</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC257">  .<span class="pl-c1">concat</span>(apis)</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/b8ca4e450b2fdff5eed68dbb3e1b4ca00b7d4a9c" class="blame-sha">b8ca4e4</a>
            <img alt="@brentvatne" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/90494?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/b8ca4e450b2fdff5eed68dbb3e1b4ca00b7d4a9c" class="blame-commit-title" title="Add TransformPropTypes to docs">Add TransformPropTypes to docs</a>
            <div class="blame-commit-meta">
              <a href="/brentvatne" class="muted-link" rel="contributor">brentvatne</a> authored
              <time datetime="2015-05-07T19:16:48Z" is="relative-time">May 7, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L258">258</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC258">  .<span class="pl-c1">concat</span>(<span class="pl-smi">styles</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>, <span class="pl-c1">2</span>))</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="3">
            <a href="/facebook/react-native/commit/4681da54205b3c2e682850c4b5b5fcb655a296c4" class="blame-sha">4681da5</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/4681da54205b3c2e682850c4b5b5fcb655a296c4" class="blame-commit-title" title="Add geolocation polyfill">Add geolocation polyfill</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-25T04:13:55Z" is="relative-time">Mar 25, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L259">259</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC259">  .<span class="pl-c1">concat</span>(polyfills);</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L260">260</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC260"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/b8ca4e450b2fdff5eed68dbb3e1b4ca00b7d4a9c" class="blame-sha">b8ca4e4</a>
            <img alt="@brentvatne" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/90494?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/b8ca4e450b2fdff5eed68dbb3e1b4ca00b7d4a9c" class="blame-commit-title" title="Add TransformPropTypes to docs">Add TransformPropTypes to docs</a>
            <div class="blame-commit-meta">
              <a href="/brentvatne" class="muted-link" rel="contributor">brentvatne</a> authored
              <time datetime="2015-05-07T19:16:48Z" is="relative-time">May 7, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L261">261</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC261"><span class="pl-k">var</span> styleDocs <span class="pl-k">=</span> <span class="pl-smi">styles</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">2</span>).<span class="pl-en">reduce</span>(<span class="pl-k">function</span>(<span class="pl-smi">docs</span>, <span class="pl-smi">filepath</span>) {</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="5">
            <a href="/facebook/react-native/commit/d5f670d19cde39aaa5064e9c12a2731feaaa8566" class="blame-sha">d5f670d</a>
            <img alt="@fkling" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/179026?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/d5f670d19cde39aaa5064e9c12a2731feaaa8566" class="blame-commit-title" title="Add logic to show style props in docs">Add logic to show style props in docs</a>
            <div class="blame-commit-meta">
              <a href="/fkling" class="muted-link" rel="contributor">fkling</a> authored
              <time datetime="2015-03-19T21:05:07Z" is="relative-time">Mar 19, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L262">262</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC262">  docs[<span class="pl-smi">path</span>.<span class="pl-en">basename</span>(filepath).<span class="pl-c1">replace</span>(<span class="pl-smi">path</span>.<span class="pl-en">extname</span>(filepath), <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)] <span class="pl-k">=</span></td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L263">263</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC263">    <span class="pl-smi">docgen</span>.<span class="pl-c1">parse</span>(</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L264">264</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC264">      <span class="pl-smi">fs</span>.<span class="pl-en">readFileSync</span>(filepath),</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L265">265</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC265">      <span class="pl-smi">docgenHelpers</span>.<span class="pl-smi">findExportedObject</span>,</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/627d5a8e7e33673b675a04bcd6d4b0ce34144f45" class="blame-sha">627d5a8</a>
            <img alt="@browniefed" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/1714673?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/627d5a8e7e33673b675a04bcd6d4b0ce34144f45" class="blame-commit-title" title="Fix documentation by adding propTypeCompositionHandler">Fix documentation by adding propTypeCompositionHandler</a>
            <div class="blame-commit-meta">
              <a href="/browniefed" class="muted-link" rel="contributor">browniefed</a> authored
              <time datetime="2015-09-12T16:53:01Z" is="relative-time">Sep 12, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="3"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L266">266</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC266">      [<span class="pl-smi">docgen</span>.<span class="pl-smi">handlers</span>.<span class="pl-smi">propTypeHandler</span>, <span class="pl-smi">docgen</span>.<span class="pl-smi">handlers</span>.<span class="pl-smi">propTypeCompositionHandler</span>]</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/d5f670d19cde39aaa5064e9c12a2731feaaa8566" class="blame-sha">d5f670d</a>
            <img alt="@fkling" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/179026?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/d5f670d19cde39aaa5064e9c12a2731feaaa8566" class="blame-commit-title" title="Add logic to show style props in docs">Add logic to show style props in docs</a>
            <div class="blame-commit-meta">
              <a href="/fkling" class="muted-link" rel="contributor">fkling</a> authored
              <time datetime="2015-03-19T21:05:07Z" is="relative-time">Mar 19, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L267">267</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC267">    );</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/77a3190606ea6fdf22f3de70567e50b9456ed22f" class="blame-sha">77a3190</a>
            <img alt="@brentvatne" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/90494?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/77a3190606ea6fdf22f3de70567e50b9456ed22f" class="blame-commit-title" title="[Docs] Remove deprecated styleProps
- rotation, scaleX/Y, translateX/Y all belong under transform from
  ViewStylePropTypes">[Docs] Remove deprecated styleProps</a>
            <div class="blame-commit-meta">
              <a href="/brentvatne" class="muted-link" rel="contributor">brentvatne</a> authored
              <time datetime="2015-05-05T22:27:43Z" is="relative-time">May 5, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L268">268</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC268"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="3">
            <a href="/facebook/react-native/commit/d5f670d19cde39aaa5064e9c12a2731feaaa8566" class="blame-sha">d5f670d</a>
            <img alt="@fkling" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/179026?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/d5f670d19cde39aaa5064e9c12a2731feaaa8566" class="blame-commit-title" title="Add logic to show style props in docs">Add logic to show style props in docs</a>
            <div class="blame-commit-meta">
              <a href="/fkling" class="muted-link" rel="contributor">fkling</a> authored
              <time datetime="2015-03-19T21:05:07Z" is="relative-time">Mar 19, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L269">269</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC269">  <span class="pl-k">return</span> docs;</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L270">270</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC270">}, {});</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/33bfb322ad49654db50078af101bee90a5e7f46b" class="blame-sha">33bfb32</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/33bfb322ad49654db50078af101bee90a5e7f46b" class="blame-commit-title" title="Wire up jsdocs for apis">Wire up jsdocs for apis</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-12T18:03:32Z" is="relative-time">Mar 12, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L271">271</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC271"></td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-sha">70f2833</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-commit-title" title="Initial version of the automatically generated docs">Initial version of the automatically generated docs</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-02-12T22:43:41Z" is="relative-time">Feb 12, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L272">272</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC272"><span class="pl-c1">module</span>.<span class="pl-en">exports</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/4681da54205b3c2e682850c4b5b5fcb655a296c4" class="blame-sha">4681da5</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/4681da54205b3c2e682850c4b5b5fcb655a296c4" class="blame-commit-title" title="Add geolocation polyfill">Add geolocation polyfill</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-25T04:13:55Z" is="relative-time">Mar 25, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L273">273</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC273">  n <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/33bfb322ad49654db50078af101bee90a5e7f46b" class="blame-sha">33bfb32</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/33bfb322ad49654db50078af101bee90a5e7f46b" class="blame-commit-title" title="Wire up jsdocs for apis">Wire up jsdocs for apis</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-12T18:03:32Z" is="relative-time">Mar 12, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L274">274</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC274">  <span class="pl-k">return</span> [].<span class="pl-c1">concat</span>(</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="3">
            <a href="/facebook/react-native/commit/4681da54205b3c2e682850c4b5b5fcb655a296c4" class="blame-sha">4681da5</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/4681da54205b3c2e682850c4b5b5fcb655a296c4" class="blame-commit-title" title="Add geolocation polyfill">Add geolocation polyfill</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-25T04:13:55Z" is="relative-time">Mar 25, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L275">275</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC275">    <span class="pl-smi">components</span>.<span class="pl-en">map</span>(renderComponent),</td>
          </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L276">276</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC276">    <span class="pl-smi">apis</span>.<span class="pl-en">map</span>(<span class="pl-en">renderAPI</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>api<span class="pl-pds">&#39;</span></span>)),</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/b8ca4e450b2fdff5eed68dbb3e1b4ca00b7d4a9c" class="blame-sha">b8ca4e4</a>
            <img alt="@brentvatne" class="avatar blame-commit-avatar" height="32" src="https://avatars1.githubusercontent.com/u/90494?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/b8ca4e450b2fdff5eed68dbb3e1b4ca00b7d4a9c" class="blame-commit-title" title="Add TransformPropTypes to docs">Add TransformPropTypes to docs</a>
            <div class="blame-commit-meta">
              <a href="/brentvatne" class="muted-link" rel="contributor">brentvatne</a> authored
              <time datetime="2015-05-07T19:16:48Z" is="relative-time">May 7, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="7"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L277">277</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC277">    <span class="pl-smi">styles</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>, <span class="pl-c1">2</span>).<span class="pl-en">map</span>(renderStyle),</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/4681da54205b3c2e682850c4b5b5fcb655a296c4" class="blame-sha">4681da5</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/4681da54205b3c2e682850c4b5b5fcb655a296c4" class="blame-commit-title" title="Add geolocation polyfill">Add geolocation polyfill</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-25T04:13:55Z" is="relative-time">Mar 25, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="8"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L278">278</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC278">    <span class="pl-smi">polyfills</span>.<span class="pl-en">map</span>(<span class="pl-en">renderAPI</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Polyfill<span class="pl-pds">&#39;</span></span>))</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/33bfb322ad49654db50078af101bee90a5e7f46b" class="blame-sha">33bfb32</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/33bfb322ad49654db50078af101bee90a5e7f46b" class="blame-commit-title" title="Wire up jsdocs for apis">Wire up jsdocs for apis</a>
            <div class="blame-commit-meta">
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-03-12T18:03:32Z" is="relative-time">Mar 12, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L279">279</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC279">  );</td>
          </tr>
        <tr class="blame-commit">
          <td class="blame-commit-info" rowspan="2">
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-sha">70f2833</a>
            <img alt="@vjeux" class="avatar blame-commit-avatar" height="32" src="https://avatars3.githubusercontent.com/u/197597?v=3&amp;s=64" width="32" />
            <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca" class="blame-commit-title" title="Initial version of the automatically generated docs">Initial version of the automatically generated docs</a>
            <div class="blame-commit-meta">
                <a href="/facebook/react-native/commit/70f28332b662c7f8b4292db9129fabd4be07f0ca#comments"><span class="right octicon octicon-comment"></span></a>
              <a href="/vjeux" class="muted-link" rel="contributor">vjeux</a> authored
              <time datetime="2015-02-12T22:43:41Z" is="relative-time">Feb 12, 2015</time>
            </div>
          </td>
        </tr>
          <tr class="blame-line">
            <td class="line-age heat" data-heat="9"></td>
            <td class="blob-num blame-blob-num js-line-number" id="L280">280</td>
            <td class="blob-code blob-code-inner js-file-line" id="LC280">};</td>
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
      <li>&copy; 2015 <span title="0.10132s from github-fe135-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
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

