





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-521cbf980c80.css" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-be0481bef7d9.css" media="all" rel="stylesheet" />
  
  
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-e1e1bc98a53e.css" media="all" rel="stylesheet" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>react-native/RNTester/js/ImageExample.js at master · facebook/react-native · GitHub</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars0.githubusercontent.com/u/69631?s=400&amp;v=4" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="facebook/react-native" property="og:title" /><meta content="https://github.com/facebook/react-native" property="og:url" /><meta content="react-native - A framework for building native apps with React." property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="E9D9:5993:FD743:1D52F1:5A79FAF6" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="E9D9:5993:FD743:1D52F1:5A79FAF6" name="octolytics-dimension-request_id" /><meta content="iad" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" />
<meta content="https://github.com/hydro_browser_events" name="hydro-events-url" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/blame" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged Out">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="YTdmOWRiYmY2MjI0ODI3MjA2MWRlOGZhYTBiYzU5NWUwYWU5MGU1MGVhMmJhZjc0YjEwNzJkNmY4OWFkMmJjNHx7InJlbW90ZV9hZGRyZXNzIjoiNDcuMTcuNjIuODAiLCJyZXF1ZXN0X2lkIjoiRTlEOTo1OTkzOkZENzQzOjFENTJGMTo1QTc5RkFGNiIsInRpbWVzdGFtcCI6MTUxNzk0MzU0MiwiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">

    <meta name="enabled-features" content="UNIVERSE_BANNER,FREE_TRIALS,MARKETPLACE_HERO_CARD_UPLOADER">

  <meta name="html-safe-nonce" content="e7848038aaefede0cb09bd7b15df3efbfdc3bf2f">

  <meta http-equiv="x-pjax-version" content="731587b3fae01213175f7d7091cf8673">
  

      <link href="https://github.com/facebook/react-native/commits/master.atom" rel="alternate" title="Recent Commits to react-native:master" type="application/atom+xml">

  <meta name="description" content="react-native - A framework for building native apps with React.">
  <meta name="go-import" content="github.com/facebook/react-native git https://github.com/facebook/react-native.git">

  <meta content="69631" name="octolytics-dimension-user_id" /><meta content="facebook" name="octolytics-dimension-user_login" /><meta content="29028775" name="octolytics-dimension-repository_id" /><meta content="facebook/react-native" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="29028775" name="octolytics-dimension-repository_network_root_id" /><meta content="facebook/react-native" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />




  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">



  </head>

  <body class="logged-out env-production full-width">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="px-2 py-4 show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        <header class="Header header-logged-out  position-relative f4 py-3" role="banner">
  <div class="container-lg d-flex px-3">
    <div class="d-flex flex-justify-between flex-items-center">
      <a class="header-logo-invertocat my-0" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
        <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
      </a>

    </div>

    <div class="HeaderMenu HeaderMenu--bright d-flex flex-justify-between flex-auto">
        <nav class="mt-0">
          <ul class="d-flex list-style-none">
              <li class="ml-2">
                <a href="/features" class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:features" data-selected-links="/features /features/project-management /features/code-review /features/project-management /features/integrations /features">
                  Features
</a>              </li>
              <li class="ml-4">
                <a href="/business" class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/security /business/customers /business">
                  Business
</a>              </li>

              <li class="ml-4">
                <a href="/explore" class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore">
                  Explore
</a>              </li>

              <li class="ml-4">
                    <a href="/marketplace" class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:marketplace" data-selected-links=" /marketplace">
                      Marketplace
</a>              </li>
              <li class="ml-4">
                <a href="/pricing" class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing/developer /pricing/team /pricing/business-hosted /pricing/business-enterprise /pricing">
                  Pricing
</a>              </li>
          </ul>
        </nav>

      <div class="d-flex">
          <div class="d-lg-flex flex-items-center mr-3">
            <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/facebook/react-native/search" class="js-site-search-form" data-scoped-search-url="/facebook/react-native/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/facebook/react-native/blame/master/RNTester/js/ImageExample.js" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>

          </div>

        <span class="d-inline-block">
            <div class="HeaderNavlink px-0 py-2 m-0">
              <a class="text-bold text-white no-underline" href="/login?return_to=%2Ffacebook%2Freact-native%2Fblame%2Fmaster%2FRNTester%2Fjs%2FImageExample.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
                <span class="text-gray">or</span>
                <a class="text-bold text-white no-underline" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
            </div>
        </span>
      </div>
    </div>
  </div>
</header>

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">
</div>



  <div role="main" class="application-main ">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <div id="js-repo-pjax-container" data-pjax-container >
      




  



  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav  ">
    <div class="repohead-details-container clearfix container">

      <ul class="pagehead-actions">
  <li>
      <a href="/login?return_to=%2Ffacebook%2Freact-native"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/facebook/react-native/watchers"
     aria-label="3360 users are watching this repository">
    3,360
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Ffacebook%2Freact-native"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/facebook/react-native/stargazers"
      aria-label="59458 users starred this repository">
      59,458
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Ffacebook%2Freact-native"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/facebook/react-native/network" class="social-count"
       aria-label="13697 users forked this repository">
      13,697
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/facebook" class="url fn" rel="author">facebook</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/facebook/react-native" data-pjax="#js-repo-pjax-container">react-native</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/facebook/react-native" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /facebook/react-native" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/facebook/react-native/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /facebook/react-native/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">555</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/facebook/react-native/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /facebook/react-native/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">155</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/facebook/react-native/projects" class="js-selected-navigation-item reponav-item" data-hotkey="g b" data-selected-links="repo_projects new_repo_project repo_project /facebook/react-native/projects">
      <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >9</span>
</a>
    <a href="/facebook/react-native/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /facebook/react-native/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>

  <a href="/facebook/react-native/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /facebook/react-native/pulse">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav  ">
  <div class="repository-content ">

    

  <div class="wants-full-width-container"></div>

  <a href="/facebook/react-native/blame/613afbab7f30748ba767b055f23d0d294562805f/RNTester/js/ImageExample.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <div class="breadcrumb css-truncate blame-breadcrumb js-zeroclipboard-container">
    <span class="css-truncate-target js-zeroclipboard-target"><span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/facebook/react-native" data-pjax="true"><span>react-native</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/facebook/react-native/tree/master/RNTester" data-pjax="true"><span>RNTester</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/facebook/react-native/tree/master/RNTester/js" data-pjax="true"><span>js</span></a></span><span class="separator">/</span><strong class="final-path">ImageExample.js</strong></span>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><svg aria-hidden="true" class="octicon octicon-clippy" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"/></svg></button>
  </div>

  <div class="line-age-legend float-right mt-n4 f6">
    <span>Newer</span>
    <ol class="d-inline-block mx-1 list-style-none">
        <li class="heat d-inline-block" data-heat="1"></li>
        <li class="heat d-inline-block" data-heat="2"></li>
        <li class="heat d-inline-block" data-heat="3"></li>
        <li class="heat d-inline-block" data-heat="4"></li>
        <li class="heat d-inline-block" data-heat="5"></li>
        <li class="heat d-inline-block" data-heat="6"></li>
        <li class="heat d-inline-block" data-heat="7"></li>
        <li class="heat d-inline-block" data-heat="8"></li>
        <li class="heat d-inline-block" data-heat="9"></li>
        <li class="heat d-inline-block" data-heat="10"></li>
    </ol>
    <span>Older</span>
  </div>

  <div class="file">
    <div class="file-header">
      <div class="file-actions">
        <div class="BtnGroup">
          <a href="/facebook/react-native/raw/master/RNTester/js/ImageExample.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
          <a href="/facebook/react-native/blob/master/RNTester/js/ImageExample.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item">Normal view</a>
          <a href="/facebook/react-native/commits/master/RNTester/js/ImageExample.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
        </div>
      </div>

  

      <div class="file-info">
        <svg aria-hidden="true" class="octicon octicon-file" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
        <span class="file-mode" title="File Mode">100644</span>
        <span class="file-info-divider"></span>
          788 lines (772 sloc)
          <span class="file-info-divider"></span>
        23.2 KB
      </div>
    </div>

    <div class="blob-wrapper">
      <div class="blame-container  highlight data js-file-line-container tab-size" data-tab-size="2">

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sahrens" aria-label="sahrens" class="tooltipped tooltipped-e">
                      <img alt="@sahrens" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/1509831?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="message f6 text-gray-dark" data-pjax="true" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-02-20T04:10:52Z">Feb 20, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L1">1</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC1"><span class="pl-c"><span class="pl-c">/**</span></span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="8">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ericvicenti" aria-label="ericvicenti" class="tooltipped tooltipped-e">
                      <img alt="@ericvicenti" class="avatar blame-commit-avatar" height="20" src="https://avatars2.githubusercontent.com/u/1483597?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/4a80dceac7e35b669301c7aa8180dcd0348f4e93" class="message f6 text-gray-dark" data-pjax="true" title="Re-license and rename UIExplorer integration test app as RNTester

Reviewed By: yungsters

Differential Revision: D4950085

fbshipit-source-id: 44574b5d0ef0d2ad5dfc714309b18dc69cbad9ff">Re-license and rename UIExplorer integration test app as RNTester</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="8"><time-ago datetime="2017-05-06T03:50:47Z">May 6, 2017</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/82c4b9f0b756ad05416d800668c5dd3e08358d5e/Examples/UIExplorer/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L2">2</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC2"><span class="pl-c"> * Copyright (c) 2015-present, Facebook, Inc.</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/alonsch" aria-label="alonsch" class="tooltipped tooltipped-e">
                      <img alt="@alonsch" class="avatar blame-commit-avatar" height="20" src="https://avatars2.githubusercontent.com/u/8719674?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/fb8340d2899067bcd3d4c50b92690f19eb62c305" class="message f6 text-gray-dark" data-pjax="true" title="Add center ImageResizeMode option

Summary:Adds a `center` option to `Image`&#39;s `resizeMode` prop, which doesn&#39;t enlarge images.
This is how it looks in UIExplorer:
{F60386921}

Reviewed By: dmmiller

Differential Revision: D3064284

fb-gh-sync-id: 79cd2da8f44c5b3da2e42d3bebf3131335f53c28
shipit-source-id: 79cd2da8f44c5b3da2e42d3bebf3131335f53c28">Add center ImageResizeMode option</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-03-19T18:24:06Z">Mar 19, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/05b9902ae689b2bcab95cb6315aaee4a59e4fe99/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L3">3</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC3"><span class="pl-c"> * All rights reserved.</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L4">4</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC4"><span class="pl-c"> *</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L5">5</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC5"><span class="pl-c"> * This source code is licensed under the BSD-style license found in the</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L6">6</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC6"><span class="pl-c"> * LICENSE file in the root directory of this source tree. An additional grant</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L7">7</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC7"><span class="pl-c"> * of patent rights can be found in the PATENTS file in the same directory.</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L8">8</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC8"><span class="pl-c"> *</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/bhosmer" aria-label="bhosmer" class="tooltipped tooltipped-e">
                      <img alt="@bhosmer" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/355313?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/6daf7d26345cfaf8789aad2a95eb55938397a7ef" class="message f6 text-gray-dark" data-pjax="true" title="last batch of UIExplorer flowification">last batch of UIExplorer flowification</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-03-24T20:25:39Z">Mar 24, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/23094dbfc3cca720753c1c5c3f5e2ae649fec279/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L9">9</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC9"><span class="pl-c"> * @flow</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="9">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/voideanvalue" aria-label="voideanvalue" class="tooltipped tooltipped-e">
                      <img alt="@voideanvalue" class="avatar blame-commit-avatar" height="20" src="https://avatars2.githubusercontent.com/u/1803362?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/a23a3c319c7452e5f58d38f067c22dae65d5b84b" class="message f6 text-gray-dark" data-pjax="true" title="Add @providesModule annotations

Summary: Adding providesModule annotations to files that don&#39;t have a `providesModule` annotation but are in directories that packager crawls.

Reviewed By: cpojer

Differential Revision: D4612455

fbshipit-source-id: b23f0d6bbe2d26f480e93b56b67c6c8b1075e9f7">Add @providesModule annotations</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="9"><time-ago datetime="2017-02-25T11:05:32Z">Feb 25, 2017</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/48cb932c6e3003c08cc2e007e774dbd87df32024/Examples/UIExplorer/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L10">10</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC10"><span class="pl-c"> * @providesModule ImageExample</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sahrens" aria-label="sahrens" class="tooltipped tooltipped-e">
                      <img alt="@sahrens" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/1509831?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="message f6 text-gray-dark" data-pjax="true" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-02-20T04:10:52Z">Feb 20, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L11">11</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC11"><span class="pl-c"> <span class="pl-c">*/</span></span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L12">12</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC12"><span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L13">13</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC13"></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sebmarkbage" aria-label="sebmarkbage" class="tooltipped tooltipped-e">
                      <img alt="@sebmarkbage" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/63648?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/a80dd9a92a8d7c201972d1a8b2392e9f893147c8" class="message f6 text-gray-dark" data-pjax="true" title="Fix up this pattern var React = require(&#39;react-native&#39;);

Summary:First I searched for special cases that destructor PropTypes:

```
(?s)React\s*=\s*require\(&#39;react\-native&#39;\).*(Children|PropTypes)[^\{\}]*\}\s*=\s*React;
```

I split them up manually.

Then I replaced the React = require(&#39;react-native&#39;) + destructuring pattern...

```
(?s)(const|var)\s+React\s*=\s*require\(&#39;react\-native&#39;\)(.*[^\{\}]*\}\s*=\s*)React;
```

...with...

```
$1 React = require(&#39;react&#39;);
$1 ReactNative = require(&#39;react-native&#39;)$2ReactNative;
```

I used lint to figure out if I left some unnecessary imports.

Finally I grepped for just

```
React\s*=\s*require\(&#39;react\-native&#39;\)
```

to catch any remaining patterns.

Also, `} = React.NativeModules` -&gt; `} = ReactNative.NativeModules`.

Reviewed By: spicyj

Differential Revision: D3158991

fb-gh-sync-id: f97e8e921e193d6ea1a49d8d1bf3f09be7bed5c3
fbshipit-source-id: f97e8e921e193d6ea1a49d8d1bf3f09be7bed5c3">Fix up this pattern var React = require('react-native');</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-04-09T03:36:40Z">Apr 9, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/58db9f399633a18a5ef0119a52dbbadb15b3dff4/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L14">14</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC14"><span class="pl-k">var</span> React <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>react<span class="pl-pds">&#39;</span></span>);</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="8">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/mojodna" aria-label="mojodna" class="tooltipped tooltipped-e">
                      <img alt="@mojodna" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/45?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/9afb71fde8199156ed683dca6aa59826f9fb9279" class="message f6 text-gray-dark" data-pjax="true" title="Replace React.createClass with create-react-class

Summary:
This replaces all uses of `React.createClass` with `createReactClass` from the `create-react-class` package, attempting to match use of `var` and `const` according to local style.

Fixes #14620
Refs #14712
Closes https://github.com/facebook/react-native/pull/14729

Differential Revision: D5321810

Pulled By: hramos

fbshipit-source-id: ae7b40640b2773fd89c3fb727ec87f688bebf585">Replace React.createClass with create-react-class</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="8"><time-ago datetime="2017-07-07T21:24:25Z">Jul 7, 2017</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/20224b74a447f859428bd84e942ae6ca61dd92a6/RNTester/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L15">15</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC15"><span class="pl-k">var</span> createReactClass <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>create-react-class<span class="pl-pds">&#39;</span></span>);</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sebmarkbage" aria-label="sebmarkbage" class="tooltipped tooltipped-e">
                      <img alt="@sebmarkbage" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/63648?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/a80dd9a92a8d7c201972d1a8b2392e9f893147c8" class="message f6 text-gray-dark" data-pjax="true" title="Fix up this pattern var React = require(&#39;react-native&#39;);

Summary:First I searched for special cases that destructor PropTypes:

```
(?s)React\s*=\s*require\(&#39;react\-native&#39;\).*(Children|PropTypes)[^\{\}]*\}\s*=\s*React;
```

I split them up manually.

Then I replaced the React = require(&#39;react-native&#39;) + destructuring pattern...

```
(?s)(const|var)\s+React\s*=\s*require\(&#39;react\-native&#39;\)(.*[^\{\}]*\}\s*=\s*)React;
```

...with...

```
$1 React = require(&#39;react&#39;);
$1 ReactNative = require(&#39;react-native&#39;)$2ReactNative;
```

I used lint to figure out if I left some unnecessary imports.

Finally I grepped for just

```
React\s*=\s*require\(&#39;react\-native&#39;\)
```

to catch any remaining patterns.

Also, `} = React.NativeModules` -&gt; `} = ReactNative.NativeModules`.

Reviewed By: spicyj

Differential Revision: D3158991

fb-gh-sync-id: f97e8e921e193d6ea1a49d8d1bf3f09be7bed5c3
fbshipit-source-id: f97e8e921e193d6ea1a49d8d1bf3f09be7bed5c3">Fix up this pattern var React = require('react-native');</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-04-09T03:36:40Z">Apr 9, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/58db9f399633a18a5ef0119a52dbbadb15b3dff4/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L16">16</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC16"><span class="pl-k">var</span> ReactNative <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>react-native<span class="pl-pds">&#39;</span></span>);</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sahrens" aria-label="sahrens" class="tooltipped tooltipped-e">
                      <img alt="@sahrens" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/1509831?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="message f6 text-gray-dark" data-pjax="true" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-02-20T04:10:52Z">Feb 20, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L17">17</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC17"><span class="pl-k">var</span> {</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/janicduplessis" aria-label="janicduplessis" class="tooltipped tooltipped-e">
                      <img alt="@janicduplessis" class="avatar blame-commit-avatar" height="20" src="https://avatars2.githubusercontent.com/u/2677334?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/4c245160bd9a67acb3d5d39f0369d15e2141e043" class="message f6 text-gray-dark" data-pjax="true" title="Replace deprecated ActivityIndicatorIOS and ProgressBar with ActivityIndicator

Summary:
This replaces ActivityIndicatorIOS and indeterminate ProgressBar that were deprecated recently with ActivityIndicator across the codebase and examples and a few other cleanups.

This also make a small tweak to ActivityIndicator so it uses the Android theme color instead of gray when no color is specified.

Use Slider instead of SliderIOS in CameraRoll example.

Remove the line about unifying ActivityIndicator and ProgressBar.

**Test plan**
Tested the affected components in UIExplorer on iOS and Android, tested the changes made in Movies example on iOS and Android.
Closes https://github.com/facebook/react-native/pull/8082

Differential Revision: D3429770

fbshipit-source-id: 3b2e1196a8b9fe00d47a7aa1bbc079b094796421">Replace deprecated ActivityIndicatorIOS and ProgressBar with Activity…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-14T05:15:47Z">Jun 14, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/d344963123142a08de9d64d0c2d1294f8fcad8a6/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L18">18</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC18">  ActivityIndicator,</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sahrens" aria-label="sahrens" class="tooltipped tooltipped-e">
                      <img alt="@sahrens" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/1509831?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="message f6 text-gray-dark" data-pjax="true" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-02-20T04:10:52Z">Feb 20, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L19">19</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC19">  Image,</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/nicklockwood" aria-label="nicklockwood" class="tooltipped tooltipped-e">
                      <img alt="@nicklockwood" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/546885?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/a10c1b5a309586ac6b8977ccfd71ac41fd51c513" class="message f6 text-gray-dark" data-pjax="true" title="Fix UIExplorer Image example on iOS

Reviewed By: javache

Differential Revision: D3138820

fb-gh-sync-id: 83bf3f6c60b80e9303b3c3a47dd5d05069623204
fbshipit-source-id: 83bf3f6c60b80e9303b3c3a47dd5d05069623204">Fix UIExplorer Image example on iOS</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-04-05T15:47:21Z">Apr 5, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/40f13742b32aac5a58e5f618b74eafebc6e4c14d/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L20">20</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC20">  Platform,</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sahrens" aria-label="sahrens" class="tooltipped tooltipped-e">
                      <img alt="@sahrens" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/1509831?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="message f6 text-gray-dark" data-pjax="true" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-02-20T04:10:52Z">Feb 20, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L21">21</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC21">  <span class="pl-c1">StyleSheet</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L22">22</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC22">  <span class="pl-c1">Text</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L23">23</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC23">  View,</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="8">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/shergin" aria-label="shergin" class="tooltipped tooltipped-e">
                      <img alt="@shergin" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/22032?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/9637dd4a1b78d5f6da510b1b4ad10d45d67badbf" class="message f6 text-gray-dark" data-pjax="true" title="Introducing &lt;ImageBackground&gt;, replacement for &lt;Image&gt; which supports nesting views

Summary:
We are removing support of nesting views inside &lt;Image&gt; component. We decided to do this because having this feature makes supporting `intrinsinc content size` of the `&lt;Image&gt;` impossible; so when the transition process is complete, there will be no need to specify image size explicitly, it can be inferred from actual image bitmap.

And this is the step #0.

&lt;ImageBackground&gt; is very simple drop-in replacement which implements this functionality via very simple styling.
Please, use &lt;ImageBackground&gt; instead of &lt;Image&gt; if you want to put something inside.

Reviewed By: yungsters

Differential Revision: D5100021

fbshipit-source-id: 640c0fb2d1066e166d974efba39b4cfaaee7dd45">Introducing &lt;ImageBackground&gt;, replacement for &lt;Image&gt; which supports…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="8"><time-ago datetime="2017-05-24T18:19:31Z">May 24, 2017</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/275ba316c3eba7001677907dd334a453211b98d1/RNTester/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L24">24</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC24">  ImageBackground,</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sebmarkbage" aria-label="sebmarkbage" class="tooltipped tooltipped-e">
                      <img alt="@sebmarkbage" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/63648?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/a80dd9a92a8d7c201972d1a8b2392e9f893147c8" class="message f6 text-gray-dark" data-pjax="true" title="Fix up this pattern var React = require(&#39;react-native&#39;);

Summary:First I searched for special cases that destructor PropTypes:

```
(?s)React\s*=\s*require\(&#39;react\-native&#39;\).*(Children|PropTypes)[^\{\}]*\}\s*=\s*React;
```

I split them up manually.

Then I replaced the React = require(&#39;react-native&#39;) + destructuring pattern...

```
(?s)(const|var)\s+React\s*=\s*require\(&#39;react\-native&#39;\)(.*[^\{\}]*\}\s*=\s*)React;
```

...with...

```
$1 React = require(&#39;react&#39;);
$1 ReactNative = require(&#39;react-native&#39;)$2ReactNative;
```

I used lint to figure out if I left some unnecessary imports.

Finally I grepped for just

```
React\s*=\s*require\(&#39;react\-native&#39;\)
```

to catch any remaining patterns.

Also, `} = React.NativeModules` -&gt; `} = ReactNative.NativeModules`.

Reviewed By: spicyj

Differential Revision: D3158991

fb-gh-sync-id: f97e8e921e193d6ea1a49d8d1bf3f09be7bed5c3
fbshipit-source-id: f97e8e921e193d6ea1a49d8d1bf3f09be7bed5c3">Fix up this pattern var React = require('react-native');</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-04-09T03:36:40Z">Apr 9, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/58db9f399633a18a5ef0119a52dbbadb15b3dff4/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L25">25</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC25">} <span class="pl-k">=</span> ReactNative;</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sahrens" aria-label="sahrens" class="tooltipped tooltipped-e">
                      <img alt="@sahrens" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/1509831?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="message f6 text-gray-dark" data-pjax="true" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-02-20T04:10:52Z">Feb 20, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L26">26</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC26"></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/nicklockwood" aria-label="nicklockwood" class="tooltipped tooltipped-e">
                      <img alt="@nicklockwood" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/546885?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/1076f4a172069b4d9e8f9d194f0f924341e354e2" class="message f6 text-gray-dark" data-pjax="true" title="Added RCTDataRequestHandler

Summary: public

Added RCTDataRequestHandler, which is responsible for loading data URLs. This moves the logic for data URL handling out of RCTImageDownloader (no longer needed) and into the RCTNetwork library, where it makes more sense.

This also means that it is now possible to load data URLs via XHR, and use them for purposes other than just images.

Reviewed By: javache

Differential Revision: D2540964

fb-gh-sync-id: 4f0418bd6b9186f047cc8297276bb970795af104">Added RCTDataRequestHandler</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-10-19T16:04:54Z">Oct 19, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/31f9a690f3b3524adf08aa9d8c01843e8524453e/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L27">27</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC27">var base64Icon = &#39;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==&#39;;</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L28">28</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC28"></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sahrens" aria-label="sahrens" class="tooltipped tooltipped-e">
                      <img alt="@sahrens" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/1509831?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="message f6 text-gray-dark" data-pjax="true" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-02-20T04:10:52Z">Feb 20, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L29">29</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC29"><span class="pl-k">var</span> ImageCapInsetsExample <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>./ImageCapInsetsExample<span class="pl-pds">&#39;</span></span>);</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="9">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/frantic" aria-label="frantic" class="tooltipped tooltipped-e">
                      <img alt="@frantic" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/192222?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/7f0071ae580f0b8d1fe4684d2ef60dde4a3f69fb" class="message f6 text-gray-dark" data-pjax="true" title="Fix UIExplorer tests (image loading failure)

Reviewed By: jingc

Differential Revision: D4209282

fbshipit-source-id: 113612b8d9d8304c17a699ff416b66cf9ab1fdca">Fix UIExplorer tests (image loading failure)</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="9"><time-ago datetime="2016-11-19T05:01:24Z">Nov 19, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/a10eee4372d94c5272406e1b2f507ec98b5a4e03/Examples/UIExplorer/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L30">30</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC30"><span class="pl-k">const</span> <span class="pl-c1">IMAGE_PREFETCH_URL</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>http://origami.design/public/images/bird-logo.png?r=1&amp;t=<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">Date</span>.<span class="pl-en">now</span>();</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ide" aria-label="ide" class="tooltipped tooltipped-e">
                      <img alt="@ide" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/379606?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/f7bcb3e98d489bb40ee8fd7dd69918521344f657" class="message f6 text-gray-dark" data-pjax="true" title="Add a way to prefetch remote images to cache with Image.prefetch

Summary:Adds `Image.prefetch` to prefetch remote images before they are used in an actual `Image` component. This is based off of #4420 by sospartan and skevy&#39;s work.
Closes https://github.com/facebook/react-native/pull/6774

Differential Revision: D3153729

Pulled By: bestander

fb-gh-sync-id: ef61412e051a49b42ae885edce7905a8ca0da23f
fbshipit-source-id: ef61412e051a49b42ae885edce7905a8ca0da23f">Add a way to prefetch remote images to cache with Image.prefetch</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-04-13T14:29:10Z">Apr 13, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/4450d789e0760c294d885052c38ffa00e26a7554/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L31">31</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC31"><span class="pl-k">var</span> prefetchTask <span class="pl-k">=</span> <span class="pl-smi">Image</span>.<span class="pl-en">prefetch</span>(<span class="pl-c1">IMAGE_PREFETCH_URL</span>);</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sahrens" aria-label="sahrens" class="tooltipped tooltipped-e">
                      <img alt="@sahrens" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/1509831?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="message f6 text-gray-dark" data-pjax="true" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-02-20T04:10:52Z">Feb 20, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L32">32</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC32"></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="4">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/gabelevi" aria-label="gabelevi" class="tooltipped tooltipped-e">
                      <img alt="@gabelevi" class="avatar blame-commit-avatar" height="20" src="https://avatars2.githubusercontent.com/u/1887264?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/6b95c4fb142a7015b2afca50cc19eec0b8913d8c" class="message f6 text-gray-dark" data-pjax="true" title="@allow-large-files [Flow] Upgrade xplat/js to flow v0.63

Reviewed By: samwgoldman

Differential Revision: D6675320

fbshipit-source-id: 85575a6f30a50a3c40c6b46ba36f8cd33c091b1d">@allow-large-files [Flow] Upgrade xplat/js to flow v0.63</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="4"><time-ago datetime="2018-01-08T20:45:38Z">Jan 8, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/e5c2a66897b9c562c549e63adcf70783ea34c418/RNTester/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L33">33</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC33"><span class="pl-c"><span class="pl-c">/*</span> $FlowFixMe(&gt;=0.63.0 site=react_native_fb) This comment suppresses an error</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L34">34</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC34"><span class="pl-c"> * found when Flow v0.63 was deployed. To see the error delete this comment and</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L35">35</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC35"><span class="pl-c"> * run Flow. <span class="pl-c">*/</span></span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="8">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/mojodna" aria-label="mojodna" class="tooltipped tooltipped-e">
                      <img alt="@mojodna" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/45?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/9afb71fde8199156ed683dca6aa59826f9fb9279" class="message f6 text-gray-dark" data-pjax="true" title="Replace React.createClass with create-react-class

Summary:
This replaces all uses of `React.createClass` with `createReactClass` from the `create-react-class` package, attempting to match use of `var` and `const` according to local style.

Fixes #14620
Refs #14712
Closes https://github.com/facebook/react-native/pull/14729

Differential Revision: D5321810

Pulled By: hramos

fbshipit-source-id: ae7b40640b2773fd89c3fb727ec87f688bebf585">Replace React.createClass with create-react-class</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="8"><time-ago datetime="2017-07-07T21:24:25Z">Jul 7, 2017</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/20224b74a447f859428bd84e942ae6ca61dd92a6/RNTester/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L36">36</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC36"><span class="pl-k">var</span> NetworkImageCallbackExample <span class="pl-k">=</span> <span class="pl-en">createReactClass</span>({</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L37">37</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC37">  displayName<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>NetworkImageCallbackExample<span class="pl-pds">&#39;</span></span>,</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/brentvatne" aria-label="brentvatne" class="tooltipped tooltipped-e">
                      <img alt="@brentvatne" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/90494?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/ae09a10c9553016cce9a3131ff442fea8fa1e180" class="message f6 text-gray-dark" data-pjax="true" title="Add onLoadX support on Android

Summary: ~~This is a WIP, just finished the first bit and wanted to get some feedback to see if this approach seems appropriate, as I haven&#39;t done a lot of Android development.~~

Looks ready for review now.
Closes https://github.com/facebook/react-native/pull/3791

Reviewed By: svcscm

Differential Revision: D2672262

Pulled By: mkonicek

fb-gh-sync-id: 1e8f1cc6658fb719a68f7da455f30a7c9b1db730">Add onLoadX support on Android</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-11-26T01:06:59Z">Nov 26, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/b65f1f223488b52963f80a67bb41956103263d27/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L38">38</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC38">  <span class="pl-en">getInitialState</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L39">39</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC39">    <span class="pl-k">return</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L40">40</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC40">      events<span class="pl-k">:</span> [],</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ide" aria-label="ide" class="tooltipped tooltipped-e">
                      <img alt="@ide" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/379606?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/f7bcb3e98d489bb40ee8fd7dd69918521344f657" class="message f6 text-gray-dark" data-pjax="true" title="Add a way to prefetch remote images to cache with Image.prefetch

Summary:Adds `Image.prefetch` to prefetch remote images before they are used in an actual `Image` component. This is based off of #4420 by sospartan and skevy&#39;s work.
Closes https://github.com/facebook/react-native/pull/6774

Differential Revision: D3153729

Pulled By: bestander

fb-gh-sync-id: ef61412e051a49b42ae885edce7905a8ca0da23f
fbshipit-source-id: ef61412e051a49b42ae885edce7905a8ca0da23f">Add a way to prefetch remote images to cache with Image.prefetch</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-04-13T14:29:10Z">Apr 13, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/4450d789e0760c294d885052c38ffa00e26a7554/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L41">41</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC41">      startLoadPrefetched<span class="pl-k">:</span> <span class="pl-c1">false</span>,</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/gabelevi" aria-label="gabelevi" class="tooltipped tooltipped-e">
                      <img alt="@gabelevi" class="avatar blame-commit-avatar" height="20" src="https://avatars2.githubusercontent.com/u/1887264?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/892dd5b86ab6e90337ccfb3f78e5ac5a4ef17839" class="message f6 text-gray-dark" data-pjax="true" title="Fix errors uncovered by v0.19.0

Reviewed By: mroch

Differential Revision: D2706663

fb-gh-sync-id: 017c91bab849bf18767cacd2ebe32d1a1b10c715">Fix errors uncovered by v0.19.0</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-12-02T03:09:01Z">Dec 2, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/d4d41f9523871bed83cee7cfea0f76fb6d0fef81/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L42">42</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC42">      mountTime<span class="pl-k">:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(),</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/brentvatne" aria-label="brentvatne" class="tooltipped tooltipped-e">
                      <img alt="@brentvatne" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/90494?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/ae09a10c9553016cce9a3131ff442fea8fa1e180" class="message f6 text-gray-dark" data-pjax="true" title="Add onLoadX support on Android

Summary: ~~This is a WIP, just finished the first bit and wanted to get some feedback to see if this approach seems appropriate, as I haven&#39;t done a lot of Android development.~~

Looks ready for review now.
Closes https://github.com/facebook/react-native/pull/3791

Reviewed By: svcscm

Differential Revision: D2672262

Pulled By: mkonicek

fb-gh-sync-id: 1e8f1cc6658fb719a68f7da455f30a7c9b1db730">Add onLoadX support on Android</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-11-26T01:06:59Z">Nov 26, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/b65f1f223488b52963f80a67bb41956103263d27/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L43">43</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC43">    };</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L44">44</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC44">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L45">45</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC45"></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L46">46</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC46">  <span class="pl-en">componentWillMount</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L47">47</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC47">    <span class="pl-c1">this</span>.<span class="pl-en">setState</span>({mountTime<span class="pl-k">:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>()});</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L48">48</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC48">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L49">49</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC49"></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L50">50</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC50">  <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L51">51</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC51">    <span class="pl-k">var</span> { mountTime } <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">state</span>;</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L52">52</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC52"></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L53">53</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC53">    <span class="pl-k">return</span> (</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L54">54</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC54">      <span class="pl-k">&lt;</span>View<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L55">55</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC55">        <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L56">56</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC56">          source<span class="pl-k">=</span>{<span class="pl-c1">this</span>.<span class="pl-smi">props</span>.<span class="pl-c1">source</span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L57">57</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC57">          style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">base</span>, {overflow<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>visible<span class="pl-pds">&#39;</span></span>}]}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L58">58</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC58">          onLoadStart<span class="pl-k">=</span>{() <span class="pl-k">=&gt;</span> <span class="pl-c1">this</span>.<span class="pl-en">_loadEventFired</span>(<span class="pl-s"><span class="pl-pds">`</span>✔ onLoadStart (+<span class="pl-s1"><span class="pl-pse">${</span><span class="pl-k">new</span> <span class="pl-en">Date</span>() <span class="pl-k">-</span> mountTime<span class="pl-pse">}</span></span>ms)<span class="pl-pds">`</span></span>)}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/javache" aria-label="javache" class="tooltipped tooltipped-e">
                      <img alt="@javache" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/5676?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/84f68c338a09d6d0dc29985874b54e7d23fcc933" class="message f6 text-gray-dark" data-pjax="true" title="Send down image source to RCTImageView onLoad callback on iOS

Summary: This allows the onLoad callback to know which image has actually loaded. This is only for iOS at the moment - implementing this for Android will require quite a bit more work.

Reviewed By: majak

Differential Revision: D3738759

fbshipit-source-id: b1fc2bd0dc5de90096debeab02b8f795739a4547">Send down image source to RCTImageView onLoad callback on iOS</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-08-22T17:55:20Z">Aug 22, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/0af640bfaeb4ef07c3d9eeaa57486d2cf1132f66/Examples/UIExplorer/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L59">59</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC59">          onLoad<span class="pl-k">=</span>{(<span class="pl-c1">event</span>) <span class="pl-k">=&gt;</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L60">60</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC60">            <span class="pl-c"><span class="pl-c">//</span> Currently this image source feature is only available on iOS.</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L61">61</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC61">            <span class="pl-k">if</span> (<span class="pl-c1">event</span>.<span class="pl-smi">nativeEvent</span>.<span class="pl-c1">source</span>) {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L62">62</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC62">              <span class="pl-k">const</span> <span class="pl-c1">url</span> <span class="pl-k">=</span> <span class="pl-c1">event</span>.<span class="pl-smi">nativeEvent</span>.<span class="pl-c1">source</span>.<span class="pl-smi">url</span>;</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L63">63</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC63">              <span class="pl-c1">this</span>.<span class="pl-en">_loadEventFired</span>(<span class="pl-s"><span class="pl-pds">`</span>✔ onLoad (+<span class="pl-s1"><span class="pl-pse">${</span><span class="pl-k">new</span> <span class="pl-en">Date</span>() <span class="pl-k">-</span> mountTime<span class="pl-pse">}</span></span>ms) for URL <span class="pl-s1"><span class="pl-pse">${</span>url<span class="pl-pse">}</span></span><span class="pl-pds">`</span></span>);</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L64">64</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC64">            } <span class="pl-k">else</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L65">65</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC65">              <span class="pl-c1">this</span>.<span class="pl-en">_loadEventFired</span>(<span class="pl-s"><span class="pl-pds">`</span>✔ onLoad (+<span class="pl-s1"><span class="pl-pse">${</span><span class="pl-k">new</span> <span class="pl-en">Date</span>() <span class="pl-k">-</span> mountTime<span class="pl-pse">}</span></span>ms)<span class="pl-pds">`</span></span>);</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L66">66</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC66">            }</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L67">67</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC67">          }}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ide" aria-label="ide" class="tooltipped tooltipped-e">
                      <img alt="@ide" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/379606?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/f7bcb3e98d489bb40ee8fd7dd69918521344f657" class="message f6 text-gray-dark" data-pjax="true" title="Add a way to prefetch remote images to cache with Image.prefetch

Summary:Adds `Image.prefetch` to prefetch remote images before they are used in an actual `Image` component. This is based off of #4420 by sospartan and skevy&#39;s work.
Closes https://github.com/facebook/react-native/pull/6774

Differential Revision: D3153729

Pulled By: bestander

fb-gh-sync-id: ef61412e051a49b42ae885edce7905a8ca0da23f
fbshipit-source-id: ef61412e051a49b42ae885edce7905a8ca0da23f">Add a way to prefetch remote images to cache with Image.prefetch</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-04-13T14:29:10Z">Apr 13, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/4450d789e0760c294d885052c38ffa00e26a7554/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L68">68</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC68">          onLoadEnd<span class="pl-k">=</span>{() <span class="pl-k">=&gt;</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L69">69</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC69">            <span class="pl-c1">this</span>.<span class="pl-en">_loadEventFired</span>(<span class="pl-s"><span class="pl-pds">`</span>✔ onLoadEnd (+<span class="pl-s1"><span class="pl-pse">${</span><span class="pl-k">new</span> <span class="pl-en">Date</span>() <span class="pl-k">-</span> mountTime<span class="pl-pse">}</span></span>ms)<span class="pl-pds">`</span></span>);</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L70">70</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC70">            <span class="pl-c1">this</span>.<span class="pl-en">setState</span>({startLoadPrefetched<span class="pl-k">:</span> <span class="pl-c1">true</span>}, () <span class="pl-k">=&gt;</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L71">71</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC71">              <span class="pl-smi">prefetchTask</span>.<span class="pl-en">then</span>(() <span class="pl-k">=&gt;</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L72">72</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC72">                <span class="pl-c1">this</span>.<span class="pl-en">_loadEventFired</span>(<span class="pl-s"><span class="pl-pds">`</span>✔ Prefetch OK (+<span class="pl-s1"><span class="pl-pse">${</span><span class="pl-k">new</span> <span class="pl-en">Date</span>() <span class="pl-k">-</span> mountTime<span class="pl-pse">}</span></span>ms)<span class="pl-pds">`</span></span>);</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L73">73</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC73">              }, <span class="pl-smi">error</span> <span class="pl-k">=&gt;</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L74">74</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC74">                <span class="pl-c1">this</span>.<span class="pl-en">_loadEventFired</span>(<span class="pl-s"><span class="pl-pds">`</span>✘ Prefetch failed (+<span class="pl-s1"><span class="pl-pse">${</span><span class="pl-k">new</span> <span class="pl-en">Date</span>() <span class="pl-k">-</span> mountTime<span class="pl-pse">}</span></span>ms)<span class="pl-pds">`</span></span>);</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L75">75</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC75">              });</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L76">76</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC76">            });</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L77">77</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC77">          }}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/brentvatne" aria-label="brentvatne" class="tooltipped tooltipped-e">
                      <img alt="@brentvatne" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/90494?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/ae09a10c9553016cce9a3131ff442fea8fa1e180" class="message f6 text-gray-dark" data-pjax="true" title="Add onLoadX support on Android

Summary: ~~This is a WIP, just finished the first bit and wanted to get some feedback to see if this approach seems appropriate, as I haven&#39;t done a lot of Android development.~~

Looks ready for review now.
Closes https://github.com/facebook/react-native/pull/3791

Reviewed By: svcscm

Differential Revision: D2672262

Pulled By: mkonicek

fb-gh-sync-id: 1e8f1cc6658fb719a68f7da455f30a7c9b1db730">Add onLoadX support on Android</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-11-26T01:06:59Z">Nov 26, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/b65f1f223488b52963f80a67bb41956103263d27/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L78">78</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC78">        <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ide" aria-label="ide" class="tooltipped tooltipped-e">
                      <img alt="@ide" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/379606?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/f7bcb3e98d489bb40ee8fd7dd69918521344f657" class="message f6 text-gray-dark" data-pjax="true" title="Add a way to prefetch remote images to cache with Image.prefetch

Summary:Adds `Image.prefetch` to prefetch remote images before they are used in an actual `Image` component. This is based off of #4420 by sospartan and skevy&#39;s work.
Closes https://github.com/facebook/react-native/pull/6774

Differential Revision: D3153729

Pulled By: bestander

fb-gh-sync-id: ef61412e051a49b42ae885edce7905a8ca0da23f
fbshipit-source-id: ef61412e051a49b42ae885edce7905a8ca0da23f">Add a way to prefetch remote images to cache with Image.prefetch</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-04-13T14:29:10Z">Apr 13, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/4450d789e0760c294d885052c38ffa00e26a7554/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L79">79</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC79">        {<span class="pl-c1">this</span>.<span class="pl-smi">state</span>.<span class="pl-smi">startLoadPrefetched</span> <span class="pl-k">?</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L80">80</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC80">          <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L81">81</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC81">            source<span class="pl-k">=</span>{<span class="pl-c1">this</span>.<span class="pl-smi">props</span>.<span class="pl-smi">prefetchedSource</span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L82">82</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC82">            style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">base</span>, {overflow<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>visible<span class="pl-pds">&#39;</span></span>}]}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L83">83</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC83">            onLoadStart<span class="pl-k">=</span>{() <span class="pl-k">=&gt;</span> <span class="pl-c1">this</span>.<span class="pl-en">_loadEventFired</span>(<span class="pl-s"><span class="pl-pds">`</span>✔ (prefetched) onLoadStart (+<span class="pl-s1"><span class="pl-pse">${</span><span class="pl-k">new</span> <span class="pl-en">Date</span>() <span class="pl-k">-</span> mountTime<span class="pl-pse">}</span></span>ms)<span class="pl-pds">`</span></span>)}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/javache" aria-label="javache" class="tooltipped tooltipped-e">
                      <img alt="@javache" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/5676?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/84f68c338a09d6d0dc29985874b54e7d23fcc933" class="message f6 text-gray-dark" data-pjax="true" title="Send down image source to RCTImageView onLoad callback on iOS

Summary: This allows the onLoad callback to know which image has actually loaded. This is only for iOS at the moment - implementing this for Android will require quite a bit more work.

Reviewed By: majak

Differential Revision: D3738759

fbshipit-source-id: b1fc2bd0dc5de90096debeab02b8f795739a4547">Send down image source to RCTImageView onLoad callback on iOS</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-08-22T17:55:20Z">Aug 22, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/0af640bfaeb4ef07c3d9eeaa57486d2cf1132f66/Examples/UIExplorer/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L84">84</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC84">            onLoad<span class="pl-k">=</span>{(<span class="pl-c1">event</span>) <span class="pl-k">=&gt;</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L85">85</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC85">              <span class="pl-c"><span class="pl-c">//</span> Currently this image source feature is only available on iOS.</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L86">86</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC86">              <span class="pl-k">if</span> (<span class="pl-c1">event</span>.<span class="pl-smi">nativeEvent</span>.<span class="pl-c1">source</span>) {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L87">87</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC87">                <span class="pl-k">const</span> <span class="pl-c1">url</span> <span class="pl-k">=</span> <span class="pl-c1">event</span>.<span class="pl-smi">nativeEvent</span>.<span class="pl-c1">source</span>.<span class="pl-smi">url</span>;</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L88">88</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC88">                <span class="pl-c1">this</span>.<span class="pl-en">_loadEventFired</span>(<span class="pl-s"><span class="pl-pds">`</span>✔ (prefetched) onLoad (+<span class="pl-s1"><span class="pl-pse">${</span><span class="pl-k">new</span> <span class="pl-en">Date</span>() <span class="pl-k">-</span> mountTime<span class="pl-pse">}</span></span>ms) for URL <span class="pl-s1"><span class="pl-pse">${</span>url<span class="pl-pse">}</span></span><span class="pl-pds">`</span></span>);</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L89">89</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC89">              } <span class="pl-k">else</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L90">90</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC90">                <span class="pl-c1">this</span>.<span class="pl-en">_loadEventFired</span>(<span class="pl-s"><span class="pl-pds">`</span>✔ (prefetched) onLoad (+<span class="pl-s1"><span class="pl-pse">${</span><span class="pl-k">new</span> <span class="pl-en">Date</span>() <span class="pl-k">-</span> mountTime<span class="pl-pse">}</span></span>ms)<span class="pl-pds">`</span></span>);</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L91">91</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC91">              }</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L92">92</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC92">            }}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ide" aria-label="ide" class="tooltipped tooltipped-e">
                      <img alt="@ide" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/379606?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/f7bcb3e98d489bb40ee8fd7dd69918521344f657" class="message f6 text-gray-dark" data-pjax="true" title="Add a way to prefetch remote images to cache with Image.prefetch

Summary:Adds `Image.prefetch` to prefetch remote images before they are used in an actual `Image` component. This is based off of #4420 by sospartan and skevy&#39;s work.
Closes https://github.com/facebook/react-native/pull/6774

Differential Revision: D3153729

Pulled By: bestander

fb-gh-sync-id: ef61412e051a49b42ae885edce7905a8ca0da23f
fbshipit-source-id: ef61412e051a49b42ae885edce7905a8ca0da23f">Add a way to prefetch remote images to cache with Image.prefetch</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-04-13T14:29:10Z">Apr 13, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/4450d789e0760c294d885052c38ffa00e26a7554/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L93">93</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC93">            onLoadEnd<span class="pl-k">=</span>{() <span class="pl-k">=&gt;</span> <span class="pl-c1">this</span>.<span class="pl-en">_loadEventFired</span>(<span class="pl-s"><span class="pl-pds">`</span>✔ (prefetched) onLoadEnd (+<span class="pl-s1"><span class="pl-pse">${</span><span class="pl-k">new</span> <span class="pl-en">Date</span>() <span class="pl-k">-</span> mountTime<span class="pl-pse">}</span></span>ms)<span class="pl-pds">`</span></span>)}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L94">94</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC94">          <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L95">95</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC95">          <span class="pl-k">:</span> <span class="pl-c1">null</span>}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/brentvatne" aria-label="brentvatne" class="tooltipped tooltipped-e">
                      <img alt="@brentvatne" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/90494?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/ae09a10c9553016cce9a3131ff442fea8fa1e180" class="message f6 text-gray-dark" data-pjax="true" title="Add onLoadX support on Android

Summary: ~~This is a WIP, just finished the first bit and wanted to get some feedback to see if this approach seems appropriate, as I haven&#39;t done a lot of Android development.~~

Looks ready for review now.
Closes https://github.com/facebook/react-native/pull/3791

Reviewed By: svcscm

Differential Revision: D2672262

Pulled By: mkonicek

fb-gh-sync-id: 1e8f1cc6658fb719a68f7da455f30a7c9b1db730">Add onLoadX support on Android</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-11-26T01:06:59Z">Nov 26, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/b65f1f223488b52963f80a67bb41956103263d27/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L96">96</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC96">        <span class="pl-k">&lt;</span><span class="pl-c1">Text</span> style<span class="pl-k">=</span>{{marginTop<span class="pl-k">:</span> <span class="pl-c1">20</span>}}<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L97">97</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC97">          {<span class="pl-c1">this</span>.<span class="pl-smi">state</span>.<span class="pl-smi">events</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>)}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L98">98</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC98">        <span class="pl-k">&lt;</span><span class="pl-k">/</span><span class="pl-c1">Text</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L99">99</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC99">      <span class="pl-k">&lt;</span><span class="pl-k">/</span>View<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L100">100</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC100">    );</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L101">101</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC101">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L102">102</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC102"></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L103">103</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC103">  <span class="pl-en">_loadEventFired</span>(<span class="pl-c1">event</span>) {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L104">104</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC104">    <span class="pl-c1">this</span>.<span class="pl-en">setState</span>((<span class="pl-smi">state</span>) <span class="pl-k">=&gt;</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L105">105</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC105">      <span class="pl-k">return</span> <span class="pl-smi">state</span>.<span class="pl-smi">events</span> <span class="pl-k">=</span> [<span class="pl-k">...</span><span class="pl-smi">state</span>.<span class="pl-smi">events</span>, <span class="pl-c1">event</span>];</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L106">106</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC106">    });</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L107">107</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC107">  }</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L108">108</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC108">});</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L109">109</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC109"></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="8">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/mojodna" aria-label="mojodna" class="tooltipped tooltipped-e">
                      <img alt="@mojodna" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/45?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/9afb71fde8199156ed683dca6aa59826f9fb9279" class="message f6 text-gray-dark" data-pjax="true" title="Replace React.createClass with create-react-class

Summary:
This replaces all uses of `React.createClass` with `createReactClass` from the `create-react-class` package, attempting to match use of `var` and `const` according to local style.

Fixes #14620
Refs #14712
Closes https://github.com/facebook/react-native/pull/14729

Differential Revision: D5321810

Pulled By: hramos

fbshipit-source-id: ae7b40640b2773fd89c3fb727ec87f688bebf585">Replace React.createClass with create-react-class</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="8"><time-ago datetime="2017-07-07T21:24:25Z">Jul 7, 2017</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/20224b74a447f859428bd84e942ae6ca61dd92a6/RNTester/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L110">110</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC110"><span class="pl-k">var</span> NetworkImageExample <span class="pl-k">=</span> <span class="pl-en">createReactClass</span>({</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ptmt" aria-label="ptmt" class="tooltipped tooltipped-e">
                      <img alt="@ptmt" class="avatar blame-commit-avatar" height="20" src="https://avatars0.githubusercontent.com/u/1004115?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/74f8055692893ddc8e756f1a262c0488a205d529" class="message f6 text-gray-dark" data-pjax="true" title="[Image] Add examples to UIExplorer, fix some bugs

Summary:
Add two simple examples.
![image](https://cloud.githubusercontent.com/assets/1004115/8674092/03052652-2a55-11e5-8531-8f01c7970af4.png)

Also:
- do not start the task at DownloadTaskWrapper (it starts from ImageDowloader if image isn&#39;t cached yet);
- fire `onLoadAbor`t event;
- send more readable `error.localizedDescription` with `onLoadError`;
- rename `onLoaded` to `onLoadEnd`
Closes https://github.com/facebook/react-native/pull/1987
Github Author: Dmitriy Loktev &lt;unknownliveid@hotmail.com&gt;">[Image] Add examples to UIExplorer, fix some bugs</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-14T20:56:55Z">Jul 14, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/d1a82c4af120c7c8562d8c4774c939bd59a4cd77/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L111">111</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC111">  <span class="pl-en">getInitialState</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L112">112</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC112">    <span class="pl-k">return</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L113">113</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC113">      error<span class="pl-k">:</span> <span class="pl-c1">false</span>,</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/nicklockwood" aria-label="nicklockwood" class="tooltipped tooltipped-e">
                      <img alt="@nicklockwood" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/546885?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/61c648d5641da595366801d4a9ef31628cd0eee7" class="message f6 text-gray-dark" data-pjax="true" title="Merged RCTNetworkImageView functionality into RCTStaticImage

Summary:
RCTNetworkImageView and RCTStaticImage had significant overlap in functionality, but each had a different subset of features and bugs.

This diff merges most of the functionality of RCTNetworkImageView into RCTStaticImage, eliminating some bugs in the former, such as constant redrawing when properties were changed.

I&#39;ve also removed the onLoadAbort event for now (as it wasn&#39;t implemented), and renamed the other events to match the web specs for `&lt;img&gt;` and XHMLHttpRequest. The API is essentially what Adobe proposed here: http://blogs.adobe.com/webplatform/2012/01/13/html5-image-progress-events/

The following features have not yet been ported from RCTNetworkImageView:

- Background color compositing. It&#39;s not clear that this adds much value and it increases memory consumption, etc.
- Image request cancelling when images are removed from view. Again, it&#39;s not clear if this is a huge benefit, but if it is it should be combined with other optimisations, such as unloading offscreen images.

(Note that this only affects the open source fork. For now, internal apps will still use FBNetworkImageView for remote images.)">Merged RCTNetworkImageView functionality into RCTStaticImage</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-15T20:17:13Z">Jul 15, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/82a774e92bf19b9a135004cca53b6e1e98dde052/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L114">114</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC114">      loading<span class="pl-k">:</span> <span class="pl-c1">false</span>,</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ptmt" aria-label="ptmt" class="tooltipped tooltipped-e">
                      <img alt="@ptmt" class="avatar blame-commit-avatar" height="20" src="https://avatars0.githubusercontent.com/u/1004115?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/74f8055692893ddc8e756f1a262c0488a205d529" class="message f6 text-gray-dark" data-pjax="true" title="[Image] Add examples to UIExplorer, fix some bugs

Summary:
Add two simple examples.
![image](https://cloud.githubusercontent.com/assets/1004115/8674092/03052652-2a55-11e5-8531-8f01c7970af4.png)

Also:
- do not start the task at DownloadTaskWrapper (it starts from ImageDowloader if image isn&#39;t cached yet);
- fire `onLoadAbor`t event;
- send more readable `error.localizedDescription` with `onLoadError`;
- rename `onLoaded` to `onLoadEnd`
Closes https://github.com/facebook/react-native/pull/1987
Github Author: Dmitriy Loktev &lt;unknownliveid@hotmail.com&gt;">[Image] Add examples to UIExplorer, fix some bugs</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-14T20:56:55Z">Jul 14, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/d1a82c4af120c7c8562d8c4774c939bd59a4cd77/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L115">115</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC115">      progress<span class="pl-k">:</span> <span class="pl-c1">0</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L116">116</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC116">    };</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L117">117</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC117">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L118">118</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC118">  <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L119">119</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC119">    <span class="pl-k">var</span> loader <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">state</span>.<span class="pl-smi">loading</span> <span class="pl-k">?</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L120">120</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC120">      <span class="pl-k">&lt;</span>View style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">progress</span>}<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L121">121</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC121">        <span class="pl-k">&lt;</span><span class="pl-c1">Text</span><span class="pl-k">&gt;</span>{<span class="pl-c1">this</span>.<span class="pl-smi">state</span>.<span class="pl-smi">progress</span>}<span class="pl-k">%</span><span class="pl-k">&lt;</span><span class="pl-k">/</span><span class="pl-c1">Text</span><span class="pl-k">&gt;</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/janicduplessis" aria-label="janicduplessis" class="tooltipped tooltipped-e">
                      <img alt="@janicduplessis" class="avatar blame-commit-avatar" height="20" src="https://avatars2.githubusercontent.com/u/2677334?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/4c245160bd9a67acb3d5d39f0369d15e2141e043" class="message f6 text-gray-dark" data-pjax="true" title="Replace deprecated ActivityIndicatorIOS and ProgressBar with ActivityIndicator

Summary:
This replaces ActivityIndicatorIOS and indeterminate ProgressBar that were deprecated recently with ActivityIndicator across the codebase and examples and a few other cleanups.

This also make a small tweak to ActivityIndicator so it uses the Android theme color instead of gray when no color is specified.

Use Slider instead of SliderIOS in CameraRoll example.

Remove the line about unifying ActivityIndicator and ProgressBar.

**Test plan**
Tested the affected components in UIExplorer on iOS and Android, tested the changes made in Movies example on iOS and Android.
Closes https://github.com/facebook/react-native/pull/8082

Differential Revision: D3429770

fbshipit-source-id: 3b2e1196a8b9fe00d47a7aa1bbc079b094796421">Replace deprecated ActivityIndicatorIOS and ProgressBar with Activity…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-14T05:15:47Z">Jun 14, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/d344963123142a08de9d64d0c2d1294f8fcad8a6/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L122">122</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC122">        <span class="pl-k">&lt;</span>ActivityIndicator style<span class="pl-k">=</span>{{marginLeft<span class="pl-k">:</span><span class="pl-c1">5</span>}} <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ptmt" aria-label="ptmt" class="tooltipped tooltipped-e">
                      <img alt="@ptmt" class="avatar blame-commit-avatar" height="20" src="https://avatars0.githubusercontent.com/u/1004115?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/74f8055692893ddc8e756f1a262c0488a205d529" class="message f6 text-gray-dark" data-pjax="true" title="[Image] Add examples to UIExplorer, fix some bugs

Summary:
Add two simple examples.
![image](https://cloud.githubusercontent.com/assets/1004115/8674092/03052652-2a55-11e5-8531-8f01c7970af4.png)

Also:
- do not start the task at DownloadTaskWrapper (it starts from ImageDowloader if image isn&#39;t cached yet);
- fire `onLoadAbor`t event;
- send more readable `error.localizedDescription` with `onLoadError`;
- rename `onLoaded` to `onLoadEnd`
Closes https://github.com/facebook/react-native/pull/1987
Github Author: Dmitriy Loktev &lt;unknownliveid@hotmail.com&gt;">[Image] Add examples to UIExplorer, fix some bugs</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-14T20:56:55Z">Jul 14, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/d1a82c4af120c7c8562d8c4774c939bd59a4cd77/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L123">123</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC123">      <span class="pl-k">&lt;</span><span class="pl-k">/</span>View<span class="pl-k">&gt;</span> <span class="pl-k">:</span> <span class="pl-c1">null</span>;</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L124">124</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC124">    <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">state</span>.<span class="pl-smi">error</span> <span class="pl-k">?</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L125">125</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC125">      <span class="pl-k">&lt;</span><span class="pl-c1">Text</span><span class="pl-k">&gt;</span>{<span class="pl-c1">this</span>.<span class="pl-smi">state</span>.<span class="pl-smi">error</span>}<span class="pl-k">&lt;</span><span class="pl-k">/</span><span class="pl-c1">Text</span><span class="pl-k">&gt;</span> <span class="pl-k">:</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="8">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/shergin" aria-label="shergin" class="tooltipped tooltipped-e">
                      <img alt="@shergin" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/22032?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/9637dd4a1b78d5f6da510b1b4ad10d45d67badbf" class="message f6 text-gray-dark" data-pjax="true" title="Introducing &lt;ImageBackground&gt;, replacement for &lt;Image&gt; which supports nesting views

Summary:
We are removing support of nesting views inside &lt;Image&gt; component. We decided to do this because having this feature makes supporting `intrinsinc content size` of the `&lt;Image&gt;` impossible; so when the transition process is complete, there will be no need to specify image size explicitly, it can be inferred from actual image bitmap.

And this is the step #0.

&lt;ImageBackground&gt; is very simple drop-in replacement which implements this functionality via very simple styling.
Please, use &lt;ImageBackground&gt; instead of &lt;Image&gt; if you want to put something inside.

Reviewed By: yungsters

Differential Revision: D5100021

fbshipit-source-id: 640c0fb2d1066e166d974efba39b4cfaaee7dd45">Introducing &lt;ImageBackground&gt;, replacement for &lt;Image&gt; which supports…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="8"><time-ago datetime="2017-05-24T18:19:31Z">May 24, 2017</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/275ba316c3eba7001677907dd334a453211b98d1/RNTester/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L126">126</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC126">      <span class="pl-k">&lt;</span>ImageBackground</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ptmt" aria-label="ptmt" class="tooltipped tooltipped-e">
                      <img alt="@ptmt" class="avatar blame-commit-avatar" height="20" src="https://avatars0.githubusercontent.com/u/1004115?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/74f8055692893ddc8e756f1a262c0488a205d529" class="message f6 text-gray-dark" data-pjax="true" title="[Image] Add examples to UIExplorer, fix some bugs

Summary:
Add two simple examples.
![image](https://cloud.githubusercontent.com/assets/1004115/8674092/03052652-2a55-11e5-8531-8f01c7970af4.png)

Also:
- do not start the task at DownloadTaskWrapper (it starts from ImageDowloader if image isn&#39;t cached yet);
- fire `onLoadAbor`t event;
- send more readable `error.localizedDescription` with `onLoadError`;
- rename `onLoaded` to `onLoadEnd`
Closes https://github.com/facebook/react-native/pull/1987
Github Author: Dmitriy Loktev &lt;unknownliveid@hotmail.com&gt;">[Image] Add examples to UIExplorer, fix some bugs</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-14T20:56:55Z">Jul 14, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/d1a82c4af120c7c8562d8c4774c939bd59a4cd77/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L127">127</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC127">        source<span class="pl-k">=</span>{<span class="pl-c1">this</span>.<span class="pl-smi">props</span>.<span class="pl-c1">source</span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L128">128</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC128">        style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">base</span>, {overflow<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>visible<span class="pl-pds">&#39;</span></span>}]}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/nicklockwood" aria-label="nicklockwood" class="tooltipped tooltipped-e">
                      <img alt="@nicklockwood" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/546885?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/61c648d5641da595366801d4a9ef31628cd0eee7" class="message f6 text-gray-dark" data-pjax="true" title="Merged RCTNetworkImageView functionality into RCTStaticImage

Summary:
RCTNetworkImageView and RCTStaticImage had significant overlap in functionality, but each had a different subset of features and bugs.

This diff merges most of the functionality of RCTNetworkImageView into RCTStaticImage, eliminating some bugs in the former, such as constant redrawing when properties were changed.

I&#39;ve also removed the onLoadAbort event for now (as it wasn&#39;t implemented), and renamed the other events to match the web specs for `&lt;img&gt;` and XHMLHttpRequest. The API is essentially what Adobe proposed here: http://blogs.adobe.com/webplatform/2012/01/13/html5-image-progress-events/

The following features have not yet been ported from RCTNetworkImageView:

- Background color compositing. It&#39;s not clear that this adds much value and it increases memory consumption, etc.
- Image request cancelling when images are removed from view. Again, it&#39;s not clear if this is a huge benefit, but if it is it should be combined with other optimisations, such as unloading offscreen images.

(Note that this only affects the open source fork. For now, internal apps will still use FBNetworkImageView for remote images.)">Merged RCTNetworkImageView functionality into RCTStaticImage</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-15T20:17:13Z">Jul 15, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/82a774e92bf19b9a135004cca53b6e1e98dde052/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L129">129</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC129">        onLoadStart<span class="pl-k">=</span>{(<span class="pl-smi">e</span>) <span class="pl-k">=&gt;</span> <span class="pl-c1">this</span>.<span class="pl-en">setState</span>({loading<span class="pl-k">:</span> <span class="pl-c1">true</span>})}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L130">130</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC130">        onError<span class="pl-k">=</span>{(<span class="pl-smi">e</span>) <span class="pl-k">=&gt;</span> <span class="pl-c1">this</span>.<span class="pl-en">setState</span>({error<span class="pl-k">:</span> <span class="pl-smi">e</span>.<span class="pl-smi">nativeEvent</span>.<span class="pl-smi">error</span>, loading<span class="pl-k">:</span> <span class="pl-c1">false</span>})}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L131">131</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC131">        onProgress<span class="pl-k">=</span>{(<span class="pl-smi">e</span>) <span class="pl-k">=&gt;</span> <span class="pl-c1">this</span>.<span class="pl-en">setState</span>({progress<span class="pl-k">:</span> <span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(<span class="pl-c1">100</span> <span class="pl-k">*</span> <span class="pl-smi">e</span>.<span class="pl-smi">nativeEvent</span>.<span class="pl-smi">loaded</span> <span class="pl-k">/</span> <span class="pl-smi">e</span>.<span class="pl-smi">nativeEvent</span>.<span class="pl-smi">total</span>)})}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L132">132</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC132">        onLoad<span class="pl-k">=</span>{() <span class="pl-k">=&gt;</span> <span class="pl-c1">this</span>.<span class="pl-en">setState</span>({loading<span class="pl-k">:</span> <span class="pl-c1">false</span>, error<span class="pl-k">:</span> <span class="pl-c1">false</span>})}<span class="pl-k">&gt;</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ptmt" aria-label="ptmt" class="tooltipped tooltipped-e">
                      <img alt="@ptmt" class="avatar blame-commit-avatar" height="20" src="https://avatars0.githubusercontent.com/u/1004115?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/74f8055692893ddc8e756f1a262c0488a205d529" class="message f6 text-gray-dark" data-pjax="true" title="[Image] Add examples to UIExplorer, fix some bugs

Summary:
Add two simple examples.
![image](https://cloud.githubusercontent.com/assets/1004115/8674092/03052652-2a55-11e5-8531-8f01c7970af4.png)

Also:
- do not start the task at DownloadTaskWrapper (it starts from ImageDowloader if image isn&#39;t cached yet);
- fire `onLoadAbor`t event;
- send more readable `error.localizedDescription` with `onLoadError`;
- rename `onLoaded` to `onLoadEnd`
Closes https://github.com/facebook/react-native/pull/1987
Github Author: Dmitriy Loktev &lt;unknownliveid@hotmail.com&gt;">[Image] Add examples to UIExplorer, fix some bugs</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-14T20:56:55Z">Jul 14, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/d1a82c4af120c7c8562d8c4774c939bd59a4cd77/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L133">133</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC133">        {loader}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="8">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/shergin" aria-label="shergin" class="tooltipped tooltipped-e">
                      <img alt="@shergin" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/22032?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/9637dd4a1b78d5f6da510b1b4ad10d45d67badbf" class="message f6 text-gray-dark" data-pjax="true" title="Introducing &lt;ImageBackground&gt;, replacement for &lt;Image&gt; which supports nesting views

Summary:
We are removing support of nesting views inside &lt;Image&gt; component. We decided to do this because having this feature makes supporting `intrinsinc content size` of the `&lt;Image&gt;` impossible; so when the transition process is complete, there will be no need to specify image size explicitly, it can be inferred from actual image bitmap.

And this is the step #0.

&lt;ImageBackground&gt; is very simple drop-in replacement which implements this functionality via very simple styling.
Please, use &lt;ImageBackground&gt; instead of &lt;Image&gt; if you want to put something inside.

Reviewed By: yungsters

Differential Revision: D5100021

fbshipit-source-id: 640c0fb2d1066e166d974efba39b4cfaaee7dd45">Introducing &lt;ImageBackground&gt;, replacement for &lt;Image&gt; which supports…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="8"><time-ago datetime="2017-05-24T18:19:31Z">May 24, 2017</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/275ba316c3eba7001677907dd334a453211b98d1/RNTester/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L134">134</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC134">      <span class="pl-k">&lt;</span><span class="pl-k">/</span>ImageBackground<span class="pl-k">&gt;</span>;</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ptmt" aria-label="ptmt" class="tooltipped tooltipped-e">
                      <img alt="@ptmt" class="avatar blame-commit-avatar" height="20" src="https://avatars0.githubusercontent.com/u/1004115?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/74f8055692893ddc8e756f1a262c0488a205d529" class="message f6 text-gray-dark" data-pjax="true" title="[Image] Add examples to UIExplorer, fix some bugs

Summary:
Add two simple examples.
![image](https://cloud.githubusercontent.com/assets/1004115/8674092/03052652-2a55-11e5-8531-8f01c7970af4.png)

Also:
- do not start the task at DownloadTaskWrapper (it starts from ImageDowloader if image isn&#39;t cached yet);
- fire `onLoadAbor`t event;
- send more readable `error.localizedDescription` with `onLoadError`;
- rename `onLoaded` to `onLoadEnd`
Closes https://github.com/facebook/react-native/pull/1987
Github Author: Dmitriy Loktev &lt;unknownliveid@hotmail.com&gt;">[Image] Add examples to UIExplorer, fix some bugs</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-14T20:56:55Z">Jul 14, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/d1a82c4af120c7c8562d8c4774c939bd59a4cd77/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L135">135</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC135">  }</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L136">136</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC136">});</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L137">137</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC137"></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="8">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/mojodna" aria-label="mojodna" class="tooltipped tooltipped-e">
                      <img alt="@mojodna" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/45?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/9afb71fde8199156ed683dca6aa59826f9fb9279" class="message f6 text-gray-dark" data-pjax="true" title="Replace React.createClass with create-react-class

Summary:
This replaces all uses of `React.createClass` with `createReactClass` from the `create-react-class` package, attempting to match use of `var` and `const` according to local style.

Fixes #14620
Refs #14712
Closes https://github.com/facebook/react-native/pull/14729

Differential Revision: D5321810

Pulled By: hramos

fbshipit-source-id: ae7b40640b2773fd89c3fb727ec87f688bebf585">Replace React.createClass with create-react-class</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="8"><time-ago datetime="2017-07-07T21:24:25Z">Jul 7, 2017</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/20224b74a447f859428bd84e942ae6ca61dd92a6/RNTester/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L138">138</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC138"><span class="pl-k">var</span> ImageSizeExample <span class="pl-k">=</span> <span class="pl-en">createReactClass</span>({</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/nicklockwood" aria-label="nicklockwood" class="tooltipped tooltipped-e">
                      <img alt="@nicklockwood" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/546885?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/718cd7953f6a30338882c4b56bd11c83fb311d7f" class="message f6 text-gray-dark" data-pjax="true" title="Added getImageSize method

Summary:
public

This diff adds a `getSize()` method to `Image` to retrieve the width and height of an image prior to displaying it. This is useful when working with images from uncontrolled sources, and has been a much-requested feature.

In order to retrieve the image dimensions, the image may first need to be loaded or downloaded, after which it will be cached. This means that in principle you could use this method to preload images, however it is not optimized for that purpose, and may in future be implemented in a way that does not fully load/download the image data.

A fully supported way to preload images will be provided in a future diff.

The API (separate success and failure callbacks) is far from ideal, but until we agree on a unified standard, this was the most conventional way I could think of to implement it. If it returned a promise or something similar, it would be unique among all such APIS in the framework.

Please note that this has been a long time coming, in part due to much bikeshedding about what the API should look like, so while it&#39;s not unlikely that the API may change in future, I think having *some* way to do this is better than waiting until we can define the &quot;perfect&quot; way.

Reviewed By: vjeux

Differential Revision: D2797365

fb-gh-sync-id: 11eb1b8547773b1f8be0bc55ddf6dfedebf7fc0a">Added getImageSize method</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-01-01T02:50:26Z">Jan 1, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/24b942faeb67ede5b042660f75720d5e6c6bd429/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L139">139</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC139">  <span class="pl-en">getInitialState</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L140">140</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC140">    <span class="pl-k">return</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L141">141</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC141">      width<span class="pl-k">:</span> <span class="pl-c1">0</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L142">142</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC142">      height<span class="pl-k">:</span> <span class="pl-c1">0</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L143">143</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC143">    };</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L144">144</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC144">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L145">145</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC145">  <span class="pl-en">componentDidMount</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L146">146</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC146">    <span class="pl-smi">Image</span>.<span class="pl-en">getSize</span>(<span class="pl-c1">this</span>.<span class="pl-smi">props</span>.<span class="pl-c1">source</span>.<span class="pl-smi">uri</span>, (<span class="pl-smi">width</span>, <span class="pl-smi">height</span>) <span class="pl-k">=&gt;</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L147">147</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC147">      <span class="pl-c1">this</span>.<span class="pl-en">setState</span>({width, height});</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L148">148</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC148">    });</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L149">149</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC149">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L150">150</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC150">  <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L151">151</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC151">    <span class="pl-k">return</span> (</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L152">152</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC152">      <span class="pl-k">&lt;</span>View style<span class="pl-k">=</span>{{flexDirection<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>row<span class="pl-pds">&#39;</span></span>}}<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L153">153</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC153">        <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L154">154</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC154">          style<span class="pl-k">=</span>{{</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L155">155</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC155">            width<span class="pl-k">:</span> <span class="pl-c1">60</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L156">156</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC156">            height<span class="pl-k">:</span> <span class="pl-c1">60</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L157">157</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC157">            backgroundColor<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>transparent<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L158">158</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC158">            marginRight<span class="pl-k">:</span> <span class="pl-c1">10</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L159">159</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC159">          }}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L160">160</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC160">          source<span class="pl-k">=</span>{<span class="pl-c1">this</span>.<span class="pl-smi">props</span>.<span class="pl-c1">source</span>} <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L161">161</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC161">        <span class="pl-k">&lt;</span><span class="pl-c1">Text</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L162">162</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC162">          Actual dimensions<span class="pl-k">:</span>{<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L163">163</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC163">          Width<span class="pl-k">:</span> {<span class="pl-c1">this</span>.<span class="pl-smi">state</span>.<span class="pl-c1">width</span>}, Height<span class="pl-k">:</span> {<span class="pl-c1">this</span>.<span class="pl-smi">state</span>.<span class="pl-c1">height</span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L164">164</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC164">        <span class="pl-k">&lt;</span><span class="pl-k">/</span><span class="pl-c1">Text</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L165">165</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC165">      <span class="pl-k">&lt;</span><span class="pl-k">/</span>View<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L166">166</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC166">    );</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L167">167</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC167">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L168">168</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC168">});</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L169">169</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC169"></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="8">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/mojodna" aria-label="mojodna" class="tooltipped tooltipped-e">
                      <img alt="@mojodna" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/45?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/9afb71fde8199156ed683dca6aa59826f9fb9279" class="message f6 text-gray-dark" data-pjax="true" title="Replace React.createClass with create-react-class

Summary:
This replaces all uses of `React.createClass` with `createReactClass` from the `create-react-class` package, attempting to match use of `var` and `const` according to local style.

Fixes #14620
Refs #14712
Closes https://github.com/facebook/react-native/pull/14729

Differential Revision: D5321810

Pulled By: hramos

fbshipit-source-id: ae7b40640b2773fd89c3fb727ec87f688bebf585">Replace React.createClass with create-react-class</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="8"><time-ago datetime="2017-07-07T21:24:25Z">Jul 7, 2017</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/20224b74a447f859428bd84e942ae6ca61dd92a6/RNTester/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L170">170</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC170"><span class="pl-k">var</span> MultipleSourcesExample <span class="pl-k">=</span> <span class="pl-en">createReactClass</span>({</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/andreicoman11" aria-label="andreicoman11" class="tooltipped tooltipped-e">
                      <img alt="@andreicoman11" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/6615092?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/617a38d9846fee81b3d94d1e9d06fd74ecb5abe1" class="message f6 text-gray-dark" data-pjax="true" title="Support multi sources for images

Summary:
This adds support for specifying multiple sources for an image component, so that native can choose the best one based on the flexbox-computed size of the image.
The API is as follows: the image component receives in the `source` prop an array of objects of the type `{uri, width, height}`. On the native side, the native component will wait for the layout pass to receive the width and height of the image, and then parse the array to find the best fitting one. For now, this does not support local resources, but it will be added soon.
To see how this works and play with it, there&#39;s an example called `MultipleSourcesExample` under `ImageExample` In UIExplorer.

Reviewed By: foghina

Differential Revision: D3364550

fbshipit-source-id: 66c5aeb2794f2ffeff8da39a9c0b95155fb2d41f">Support multi sources for images</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-13T21:04:19Z">Jun 13, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/9443bc5c3f7c294306c65176c132e4254c3f70b0/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L171">171</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC171">  <span class="pl-en">getInitialState</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L172">172</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC172">    <span class="pl-k">return</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L173">173</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC173">      width<span class="pl-k">:</span> <span class="pl-c1">30</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L174">174</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC174">      height<span class="pl-k">:</span> <span class="pl-c1">30</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L175">175</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC175">    };</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L176">176</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC176">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L177">177</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC177">  <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L178">178</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC178">    <span class="pl-k">return</span> (</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/brentvatne" aria-label="brentvatne" class="tooltipped tooltipped-e">
                      <img alt="@brentvatne" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/90494?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/a564af853f108e071e941ac08be4cde864f5bfae" class="message f6 text-gray-dark" data-pjax="true" title="Throw flow error when trying to access a style that is not defined on a stylesheet

Summary:
I thought it would be useful to help clear out references to no longer used styles and also catch typos on style names to have flow error when we try to access a style that isn&#39;t defined.

Example:

```javascript
export default class AuthenticationScreen extends React.Component {
  render() {
    // This throws an error because `continer` is misspelled
    return (
      &lt;View style={styles.continer} /&gt;
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}
```

```javascript
export default class AuthenticationScreen extends React.Component {
  render() {
    // This throws an error because no fancyContainer style is defined
    return (
      &lt;View style={[styles.container, styles.fancyContainer]} /&gt;
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}
```

All credit goes to jeffmo in this tweet: https://twitter.com/lbljeffmo/status/755179096271888385

Also included in the PR is some cleanup on styles that
Closes https://github.com/facebook/react-native/pull/8876

Differential Revision: D3584983

Pulled By: yungsters

fbshipit-source-id: 0ee0e12ff3d976c137d932688e323c26690e0a52">Throw flow error when trying to access a style that is not defined on…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-07-19T06:18:03Z">Jul 19, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/4ccd14f31ae0d2440598ef3dddae69a3d91e8f48/Examples/UIExplorer/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L179">179</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC179">      <span class="pl-k">&lt;</span>View<span class="pl-k">&gt;</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/andreicoman11" aria-label="andreicoman11" class="tooltipped tooltipped-e">
                      <img alt="@andreicoman11" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/6615092?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/617a38d9846fee81b3d94d1e9d06fd74ecb5abe1" class="message f6 text-gray-dark" data-pjax="true" title="Support multi sources for images

Summary:
This adds support for specifying multiple sources for an image component, so that native can choose the best one based on the flexbox-computed size of the image.
The API is as follows: the image component receives in the `source` prop an array of objects of the type `{uri, width, height}`. On the native side, the native component will wait for the layout pass to receive the width and height of the image, and then parse the array to find the best fitting one. For now, this does not support local resources, but it will be added soon.
To see how this works and play with it, there&#39;s an example called `MultipleSourcesExample` under `ImageExample` In UIExplorer.

Reviewed By: foghina

Differential Revision: D3364550

fbshipit-source-id: 66c5aeb2794f2ffeff8da39a9c0b95155fb2d41f">Support multi sources for images</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-13T21:04:19Z">Jun 13, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/9443bc5c3f7c294306c65176c132e4254c3f70b0/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L180">180</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC180">        <span class="pl-k">&lt;</span>View style<span class="pl-k">=</span>{{flexDirection<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>row<span class="pl-pds">&#39;</span></span>, justifyContent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>space-between<span class="pl-pds">&#39;</span></span>}}<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L181">181</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC181">          <span class="pl-k">&lt;</span><span class="pl-c1">Text</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L182">182</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC182">            style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">touchableText</span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L183">183</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC183">            onPress<span class="pl-k">=</span>{<span class="pl-c1">this</span>.<span class="pl-smi">decreaseImageSize</span>} <span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L184">184</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC184">            Decrease image size</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L185">185</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC185">          <span class="pl-k">&lt;</span><span class="pl-k">/</span><span class="pl-c1">Text</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L186">186</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC186">          <span class="pl-k">&lt;</span><span class="pl-c1">Text</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L187">187</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC187">            style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">touchableText</span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L188">188</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC188">            onPress<span class="pl-k">=</span>{<span class="pl-c1">this</span>.<span class="pl-smi">increaseImageSize</span>} <span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L189">189</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC189">            Increase image size</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L190">190</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC190">          <span class="pl-k">&lt;</span><span class="pl-k">/</span><span class="pl-c1">Text</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L191">191</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC191">        <span class="pl-k">&lt;</span><span class="pl-k">/</span>View<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L192">192</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC192">        <span class="pl-k">&lt;</span><span class="pl-c1">Text</span><span class="pl-k">&gt;</span>Container image size<span class="pl-k">:</span> {<span class="pl-c1">this</span>.<span class="pl-smi">state</span>.<span class="pl-c1">width</span>}x{<span class="pl-c1">this</span>.<span class="pl-smi">state</span>.<span class="pl-c1">height</span>} <span class="pl-k">&lt;</span><span class="pl-k">/</span><span class="pl-c1">Text</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L193">193</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC193">        <span class="pl-k">&lt;</span>View</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/brentvatne" aria-label="brentvatne" class="tooltipped tooltipped-e">
                      <img alt="@brentvatne" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/90494?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/a564af853f108e071e941ac08be4cde864f5bfae" class="message f6 text-gray-dark" data-pjax="true" title="Throw flow error when trying to access a style that is not defined on a stylesheet

Summary:
I thought it would be useful to help clear out references to no longer used styles and also catch typos on style names to have flow error when we try to access a style that isn&#39;t defined.

Example:

```javascript
export default class AuthenticationScreen extends React.Component {
  render() {
    // This throws an error because `continer` is misspelled
    return (
      &lt;View style={styles.continer} /&gt;
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}
```

```javascript
export default class AuthenticationScreen extends React.Component {
  render() {
    // This throws an error because no fancyContainer style is defined
    return (
      &lt;View style={[styles.container, styles.fancyContainer]} /&gt;
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}
```

All credit goes to jeffmo in this tweet: https://twitter.com/lbljeffmo/status/755179096271888385

Also included in the PR is some cleanup on styles that
Closes https://github.com/facebook/react-native/pull/8876

Differential Revision: D3584983

Pulled By: yungsters

fbshipit-source-id: 0ee0e12ff3d976c137d932688e323c26690e0a52">Throw flow error when trying to access a style that is not defined on…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-07-19T06:18:03Z">Jul 19, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/4ccd14f31ae0d2440598ef3dddae69a3d91e8f48/Examples/UIExplorer/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L194">194</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC194">          style<span class="pl-k">=</span>{{height<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">state</span>.<span class="pl-c1">height</span>, width<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">state</span>.<span class="pl-c1">width</span>}} <span class="pl-k">&gt;</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/andreicoman11" aria-label="andreicoman11" class="tooltipped tooltipped-e">
                      <img alt="@andreicoman11" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/6615092?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/617a38d9846fee81b3d94d1e9d06fd74ecb5abe1" class="message f6 text-gray-dark" data-pjax="true" title="Support multi sources for images

Summary:
This adds support for specifying multiple sources for an image component, so that native can choose the best one based on the flexbox-computed size of the image.
The API is as follows: the image component receives in the `source` prop an array of objects of the type `{uri, width, height}`. On the native side, the native component will wait for the layout pass to receive the width and height of the image, and then parse the array to find the best fitting one. For now, this does not support local resources, but it will be added soon.
To see how this works and play with it, there&#39;s an example called `MultipleSourcesExample` under `ImageExample` In UIExplorer.

Reviewed By: foghina

Differential Revision: D3364550

fbshipit-source-id: 66c5aeb2794f2ffeff8da39a9c0b95155fb2d41f">Support multi sources for images</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-13T21:04:19Z">Jun 13, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/9443bc5c3f7c294306c65176c132e4254c3f70b0/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L195">195</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC195">          <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L196">196</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC196">            style<span class="pl-k">=</span>{{flex<span class="pl-k">:</span> <span class="pl-c1">1</span>}}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L197">197</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC197">            source<span class="pl-k">=</span>{[</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="5">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/gusgard" aria-label="gusgard" class="tooltipped tooltipped-e">
                      <img alt="@gusgard" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/2577356?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/8547b7e11163d545b7b99d4bdd063ef71129d62c" class="message f6 text-gray-dark" data-pjax="true" title="Correct logo URL

Summary:
Added static files to remove dependency with `react` website, related PR https://github.com/facebook/react-native/pull/16204

After is merged to master, check if all the URLs are working correctly.

TheSavior
Closes https://github.com/facebook/react-native/pull/16207

Differential Revision: D6509133

Pulled By: hramos

fbshipit-source-id: a31dcc07742211dc17046e7e98d805c2282f2a82">Correct logo URL</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="5"><time-ago datetime="2017-12-07T16:28:35Z">Dec 7, 2017</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/76a2ca4c9c09c9bdf922154c28040138a44ae672/RNTester/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L198">198</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC198">              {uri<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>https://facebook.github.io/react-native/img/favicon.png<span class="pl-pds">&#39;</span></span>, width<span class="pl-k">:</span> <span class="pl-c1">38</span>, height<span class="pl-k">:</span> <span class="pl-c1">38</span>},</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L199">199</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC199">              {uri<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>https://facebook.github.io/react-native/img/favicon.png<span class="pl-pds">&#39;</span></span>, width<span class="pl-k">:</span> <span class="pl-c1">76</span>, height<span class="pl-k">:</span> <span class="pl-c1">76</span>},</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L200">200</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC200">              {uri<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>https://facebook.github.io/react-native/img/opengraph.png<span class="pl-pds">&#39;</span></span>, width<span class="pl-k">:</span> <span class="pl-c1">400</span>, height<span class="pl-k">:</span> <span class="pl-c1">400</span>}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/andreicoman11" aria-label="andreicoman11" class="tooltipped tooltipped-e">
                      <img alt="@andreicoman11" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/6615092?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/617a38d9846fee81b3d94d1e9d06fd74ecb5abe1" class="message f6 text-gray-dark" data-pjax="true" title="Support multi sources for images

Summary:
This adds support for specifying multiple sources for an image component, so that native can choose the best one based on the flexbox-computed size of the image.
The API is as follows: the image component receives in the `source` prop an array of objects of the type `{uri, width, height}`. On the native side, the native component will wait for the layout pass to receive the width and height of the image, and then parse the array to find the best fitting one. For now, this does not support local resources, but it will be added soon.
To see how this works and play with it, there&#39;s an example called `MultipleSourcesExample` under `ImageExample` In UIExplorer.

Reviewed By: foghina

Differential Revision: D3364550

fbshipit-source-id: 66c5aeb2794f2ffeff8da39a9c0b95155fb2d41f">Support multi sources for images</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-13T21:04:19Z">Jun 13, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/9443bc5c3f7c294306c65176c132e4254c3f70b0/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L201">201</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC201">            ]}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L202">202</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC202">          <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L203">203</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC203">        <span class="pl-k">&lt;</span><span class="pl-k">/</span>View<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L204">204</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC204">      <span class="pl-k">&lt;</span><span class="pl-k">/</span>View<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L205">205</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC205">    );</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L206">206</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC206">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L207">207</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC207">  <span class="pl-en">increaseImageSize</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L208">208</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC208">    <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">state</span>.<span class="pl-c1">width</span> <span class="pl-k">&gt;=</span> <span class="pl-c1">100</span>) {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L209">209</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC209">      <span class="pl-k">return</span>;</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L210">210</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC210">    }</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L211">211</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC211">    <span class="pl-c1">this</span>.<span class="pl-en">setState</span>({</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L212">212</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC212">      width<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">state</span>.<span class="pl-c1">width</span> <span class="pl-k">+</span> <span class="pl-c1">10</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L213">213</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC213">      height<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">state</span>.<span class="pl-c1">height</span> <span class="pl-k">+</span> <span class="pl-c1">10</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L214">214</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC214">    });</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L215">215</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC215">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L216">216</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC216">  <span class="pl-en">decreaseImageSize</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L217">217</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC217">    <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">state</span>.<span class="pl-c1">width</span> <span class="pl-k">&lt;=</span> <span class="pl-c1">10</span>) {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L218">218</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC218">      <span class="pl-k">return</span>;</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L219">219</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC219">    }</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L220">220</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC220">    <span class="pl-c1">this</span>.<span class="pl-en">setState</span>({</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L221">221</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC221">      width<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">state</span>.<span class="pl-c1">width</span> <span class="pl-k">-</span> <span class="pl-c1">10</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L222">222</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC222">      height<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">state</span>.<span class="pl-c1">height</span> <span class="pl-k">-</span> <span class="pl-c1">10</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L223">223</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC223">    });</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L224">224</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC224">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L225">225</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC225">});</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L226">226</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC226"></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/gabelevi" aria-label="gabelevi" class="tooltipped tooltipped-e">
                      <img alt="@gabelevi" class="avatar blame-commit-avatar" height="20" src="https://avatars2.githubusercontent.com/u/1887264?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/972b546fc69d17215e13f4d268d8ec8bb762c96b" class="message f6 text-gray-dark" data-pjax="true" title="[Flow] Fix or suppress errors in react-native for Flow v0.13.0">[Flow] Fix or suppress errors in react-native for Flow v0.13.0</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-06-22T16:43:30Z">Jun 22, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/fccea2f365983bbd05bc24c7960dbbb31bf26775/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L227">227</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC227"><span class="pl-c1">exports</span>.<span class="pl-smi">displayName</span> <span class="pl-k">=</span> (<span class="pl-c1">undefined</span><span class="pl-k">:</span> <span class="pl-k">?</span>string);</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sahrens" aria-label="sahrens" class="tooltipped tooltipped-e">
                      <img alt="@sahrens" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/1509831?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="message f6 text-gray-dark" data-pjax="true" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-02-20T04:10:52Z">Feb 20, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L228">228</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC228"><span class="pl-c1">exports</span>.<span class="pl-smi">framework</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>React<span class="pl-pds">&#39;</span></span>;</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L229">229</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC229"><span class="pl-c1">exports</span>.<span class="pl-c1">title</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;Image&gt;<span class="pl-pds">&#39;</span></span>;</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L230">230</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC230"><span class="pl-c1">exports</span>.<span class="pl-c1">description</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Base component for displaying different types of images.<span class="pl-pds">&#39;</span></span>;</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L231">231</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC231"></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L232">232</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC232"><span class="pl-c1">exports</span>.<span class="pl-smi">examples</span> <span class="pl-k">=</span> [</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L233">233</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC233">  {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L234">234</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC234">    title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Plain Network Image<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L235">235</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC235">    description<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>If the `source` prop `uri` property is prefixed with <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L236">236</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC236">    <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;http&quot;, then it will be downloaded from the network.<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L237">237</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC237">    <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L238">238</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC238">      <span class="pl-k">return</span> (</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L239">239</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC239">        <span class="pl-k">&lt;</span>Image</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="5">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/gusgard" aria-label="gusgard" class="tooltipped tooltipped-e">
                      <img alt="@gusgard" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/2577356?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/8547b7e11163d545b7b99d4bdd063ef71129d62c" class="message f6 text-gray-dark" data-pjax="true" title="Correct logo URL

Summary:
Added static files to remove dependency with `react` website, related PR https://github.com/facebook/react-native/pull/16204

After is merged to master, check if all the URLs are working correctly.

TheSavior
Closes https://github.com/facebook/react-native/pull/16207

Differential Revision: D6509133

Pulled By: hramos

fbshipit-source-id: a31dcc07742211dc17046e7e98d805c2282f2a82">Correct logo URL</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="5"><time-ago datetime="2017-12-07T16:28:35Z">Dec 7, 2017</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/76a2ca4c9c09c9bdf922154c28040138a44ae672/RNTester/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L240">240</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC240">          source<span class="pl-k">=</span>{fullImage}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sahrens" aria-label="sahrens" class="tooltipped tooltipped-e">
                      <img alt="@sahrens" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/1509831?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="message f6 text-gray-dark" data-pjax="true" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-02-20T04:10:52Z">Feb 20, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L241">241</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC241">          style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">base</span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L242">242</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC242">        <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L243">243</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC243">      );</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L244">244</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC244">    },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L245">245</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC245">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L246">246</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC246">  {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L247">247</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC247">    title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Plain Static Image<span class="pl-pds">&#39;</span></span>,</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/andybb" aria-label="andybb" class="tooltipped tooltipped-e">
                      <img alt="@andybb" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/3686509?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/b85a52a46181b096faf665d3382aa7a10fc65f76" class="message f6 text-gray-dark" data-pjax="true" title="Update Image docs and examples to the new asset system

Summary:
After the release of 0.14, static images should be placed in the source code tree and then required as explained in the [Images guide] (https://facebook.github.io/react-native/docs/images.html). This pull request updates the image documentation and examples to the new asset system. UIExplorer tested on iOS and Android.
Closes https://github.com/facebook/react-native/pull/4987

Reviewed By: svcscm

Differential Revision: D2796276

Pulled By: bestander

fb-gh-sync-id: 732ffa2f136391bb8a3e40a54b5b1ff5022c97f2">Update Image docs and examples to the new asset system</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-01-27T21:21:42Z">Jan 27, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/04d14e5a2eac29fbecaf0d6e3973ff3fe2177a42/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L248">248</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC248">    description<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Static assets should be placed in the source code tree, and <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L249">249</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC249">    <span class="pl-s"><span class="pl-pds">&#39;</span>required in the same way as JavaScript modules.<span class="pl-pds">&#39;</span></span>,</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sahrens" aria-label="sahrens" class="tooltipped tooltipped-e">
                      <img alt="@sahrens" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/1509831?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="message f6 text-gray-dark" data-pjax="true" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-02-20T04:10:52Z">Feb 20, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L250">250</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC250">    <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L251">251</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC251">      <span class="pl-k">return</span> (</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L252">252</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC252">        <span class="pl-k">&lt;</span>View style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">horizontal</span>}<span class="pl-k">&gt;</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/andybb" aria-label="andybb" class="tooltipped tooltipped-e">
                      <img alt="@andybb" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/3686509?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/b85a52a46181b096faf665d3382aa7a10fc65f76" class="message f6 text-gray-dark" data-pjax="true" title="Update Image docs and examples to the new asset system

Summary:
After the release of 0.14, static images should be placed in the source code tree and then required as explained in the [Images guide] (https://facebook.github.io/react-native/docs/images.html). This pull request updates the image documentation and examples to the new asset system. UIExplorer tested on iOS and Android.
Closes https://github.com/facebook/react-native/pull/4987

Reviewed By: svcscm

Differential Revision: D2796276

Pulled By: bestander

fb-gh-sync-id: 732ffa2f136391bb8a3e40a54b5b1ff5022c97f2">Update Image docs and examples to the new asset system</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-01-27T21:21:42Z">Jan 27, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/04d14e5a2eac29fbecaf0d6e3973ff3fe2177a42/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L253">253</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC253">          <span class="pl-k">&lt;</span>Image source<span class="pl-k">=</span>{<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>./uie_thumb_normal.png<span class="pl-pds">&#39;</span></span>)} style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">icon</span>} <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L254">254</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC254">          <span class="pl-k">&lt;</span>Image source<span class="pl-k">=</span>{<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>./uie_thumb_selected.png<span class="pl-pds">&#39;</span></span>)} style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">icon</span>} <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L255">255</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC255">          <span class="pl-k">&lt;</span>Image source<span class="pl-k">=</span>{<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>./uie_comment_normal.png<span class="pl-pds">&#39;</span></span>)} style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">icon</span>} <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L256">256</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC256">          <span class="pl-k">&lt;</span>Image source<span class="pl-k">=</span>{<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>./uie_comment_highlighted.png<span class="pl-pds">&#39;</span></span>)} style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">icon</span>} <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sahrens" aria-label="sahrens" class="tooltipped tooltipped-e">
                      <img alt="@sahrens" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/1509831?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="message f6 text-gray-dark" data-pjax="true" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-02-20T04:10:52Z">Feb 20, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L257">257</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC257">        <span class="pl-k">&lt;</span><span class="pl-k">/</span>View<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L258">258</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC258">      );</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L259">259</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC259">    },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L260">260</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC260">  },</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/brentvatne" aria-label="brentvatne" class="tooltipped tooltipped-e">
                      <img alt="@brentvatne" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/90494?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/ae09a10c9553016cce9a3131ff442fea8fa1e180" class="message f6 text-gray-dark" data-pjax="true" title="Add onLoadX support on Android

Summary: ~~This is a WIP, just finished the first bit and wanted to get some feedback to see if this approach seems appropriate, as I haven&#39;t done a lot of Android development.~~

Looks ready for review now.
Closes https://github.com/facebook/react-native/pull/3791

Reviewed By: svcscm

Differential Revision: D2672262

Pulled By: mkonicek

fb-gh-sync-id: 1e8f1cc6658fb719a68f7da455f30a7c9b1db730">Add onLoadX support on Android</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-11-26T01:06:59Z">Nov 26, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/b65f1f223488b52963f80a67bb41956103263d27/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L261">261</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC261">  {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L262">262</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC262">    title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Image Loading Events<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L263">263</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC263">    <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L264">264</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC264">      <span class="pl-k">return</span> (</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="9">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/frantic" aria-label="frantic" class="tooltipped tooltipped-e">
                      <img alt="@frantic" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/192222?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/7f0071ae580f0b8d1fe4684d2ef60dde4a3f69fb" class="message f6 text-gray-dark" data-pjax="true" title="Fix UIExplorer tests (image loading failure)

Reviewed By: jingc

Differential Revision: D4209282

fbshipit-source-id: 113612b8d9d8304c17a699ff416b66cf9ab1fdca">Fix UIExplorer tests (image loading failure)</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="9"><time-ago datetime="2016-11-19T05:01:24Z">Nov 19, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/a10eee4372d94c5272406e1b2f507ec98b5a4e03/Examples/UIExplorer/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L265">265</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC265">        <span class="pl-k">&lt;</span>NetworkImageCallbackExample source<span class="pl-k">=</span>{{uri<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>http://origami.design/public/images/bird-logo.png?r=1&amp;t=<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">Date</span>.<span class="pl-en">now</span>()}}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ide" aria-label="ide" class="tooltipped tooltipped-e">
                      <img alt="@ide" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/379606?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/f7bcb3e98d489bb40ee8fd7dd69918521344f657" class="message f6 text-gray-dark" data-pjax="true" title="Add a way to prefetch remote images to cache with Image.prefetch

Summary:Adds `Image.prefetch` to prefetch remote images before they are used in an actual `Image` component. This is based off of #4420 by sospartan and skevy&#39;s work.
Closes https://github.com/facebook/react-native/pull/6774

Differential Revision: D3153729

Pulled By: bestander

fb-gh-sync-id: ef61412e051a49b42ae885edce7905a8ca0da23f
fbshipit-source-id: ef61412e051a49b42ae885edce7905a8ca0da23f">Add a way to prefetch remote images to cache with Image.prefetch</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-04-13T14:29:10Z">Apr 13, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/4450d789e0760c294d885052c38ffa00e26a7554/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L266">266</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC266">          prefetchedSource<span class="pl-k">=</span>{{uri<span class="pl-k">:</span> <span class="pl-c1">IMAGE_PREFETCH_URL</span>}}<span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/brentvatne" aria-label="brentvatne" class="tooltipped tooltipped-e">
                      <img alt="@brentvatne" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/90494?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/ae09a10c9553016cce9a3131ff442fea8fa1e180" class="message f6 text-gray-dark" data-pjax="true" title="Add onLoadX support on Android

Summary: ~~This is a WIP, just finished the first bit and wanted to get some feedback to see if this approach seems appropriate, as I haven&#39;t done a lot of Android development.~~

Looks ready for review now.
Closes https://github.com/facebook/react-native/pull/3791

Reviewed By: svcscm

Differential Revision: D2672262

Pulled By: mkonicek

fb-gh-sync-id: 1e8f1cc6658fb719a68f7da455f30a7c9b1db730">Add onLoadX support on Android</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-11-26T01:06:59Z">Nov 26, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/b65f1f223488b52963f80a67bb41956103263d27/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L267">267</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC267">      );</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L268">268</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC268">    },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L269">269</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC269">  },</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ptmt" aria-label="ptmt" class="tooltipped tooltipped-e">
                      <img alt="@ptmt" class="avatar blame-commit-avatar" height="20" src="https://avatars0.githubusercontent.com/u/1004115?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/74f8055692893ddc8e756f1a262c0488a205d529" class="message f6 text-gray-dark" data-pjax="true" title="[Image] Add examples to UIExplorer, fix some bugs

Summary:
Add two simple examples.
![image](https://cloud.githubusercontent.com/assets/1004115/8674092/03052652-2a55-11e5-8531-8f01c7970af4.png)

Also:
- do not start the task at DownloadTaskWrapper (it starts from ImageDowloader if image isn&#39;t cached yet);
- fire `onLoadAbor`t event;
- send more readable `error.localizedDescription` with `onLoadError`;
- rename `onLoaded` to `onLoadEnd`
Closes https://github.com/facebook/react-native/pull/1987
Github Author: Dmitriy Loktev &lt;unknownliveid@hotmail.com&gt;">[Image] Add examples to UIExplorer, fix some bugs</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-14T20:56:55Z">Jul 14, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/d1a82c4af120c7c8562d8c4774c939bd59a4cd77/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L270">270</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC270">  {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L271">271</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC271">    title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Error Handler<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L272">272</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC272">    <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L273">273</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC273">      <span class="pl-k">return</span> (</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="7">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/gusgard" aria-label="gusgard" class="tooltipped tooltipped-e">
                      <img alt="@gusgard" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/2577356?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/2d2dfa26bcef2e11b22c089974180ad8a6865158" class="message f6 text-gray-dark" data-pjax="true" title="Correct logo URL

Summary:
Update logo URL
https://facebook.github.io/react/img/logo_og.png (old) to https://facebook.github.io/react/logo-og.png (new)

Check that the old URL shows a &quot;Page Not Found&quot; and the new URL the correct image.
Closes https://github.com/facebook/react-native/pull/16204

Differential Revision: D5978967

Pulled By: TheSavior

fbshipit-source-id: f6af03dfd25d68c96e01054c256d8b6ba9fedba2">Correct logo URL</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="7"><time-ago datetime="2017-10-04T21:33:20Z">Oct 4, 2017</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/9c29ee1504a66979d7e87f60e42d437e044a1ada/RNTester/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L274">274</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC274">        <span class="pl-k">&lt;</span>NetworkImageExample source<span class="pl-k">=</span>{{uri<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>https://TYPO_ERROR_facebook.github.io/react/logo-og.png<span class="pl-pds">&#39;</span></span>}} <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ptmt" aria-label="ptmt" class="tooltipped tooltipped-e">
                      <img alt="@ptmt" class="avatar blame-commit-avatar" height="20" src="https://avatars0.githubusercontent.com/u/1004115?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/74f8055692893ddc8e756f1a262c0488a205d529" class="message f6 text-gray-dark" data-pjax="true" title="[Image] Add examples to UIExplorer, fix some bugs

Summary:
Add two simple examples.
![image](https://cloud.githubusercontent.com/assets/1004115/8674092/03052652-2a55-11e5-8531-8f01c7970af4.png)

Also:
- do not start the task at DownloadTaskWrapper (it starts from ImageDowloader if image isn&#39;t cached yet);
- fire `onLoadAbor`t event;
- send more readable `error.localizedDescription` with `onLoadError`;
- rename `onLoaded` to `onLoadEnd`
Closes https://github.com/facebook/react-native/pull/1987
Github Author: Dmitriy Loktev &lt;unknownliveid@hotmail.com&gt;">[Image] Add examples to UIExplorer, fix some bugs</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-14T20:56:55Z">Jul 14, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/d1a82c4af120c7c8562d8c4774c939bd59a4cd77/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L275">275</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC275">      );</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L276">276</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC276">    },</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/andreicoman11" aria-label="andreicoman11" class="tooltipped tooltipped-e">
                      <img alt="@andreicoman11" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/6615092?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/9cede03846932cd466bebcc4d6833a077a0942c8" class="message f6 text-gray-dark" data-pjax="true" title="[ReactNative][SyncDiff] Add Image Example">[ReactNative][SyncDiff] Add Image Example</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-09-01T15:51:46Z">Sep 1, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/c522e3b16e06e6a33f9a904657f440bc81d9d640/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L277">277</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC277">    platform<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ios<span class="pl-pds">&#39;</span></span>,</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ptmt" aria-label="ptmt" class="tooltipped tooltipped-e">
                      <img alt="@ptmt" class="avatar blame-commit-avatar" height="20" src="https://avatars0.githubusercontent.com/u/1004115?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/74f8055692893ddc8e756f1a262c0488a205d529" class="message f6 text-gray-dark" data-pjax="true" title="[Image] Add examples to UIExplorer, fix some bugs

Summary:
Add two simple examples.
![image](https://cloud.githubusercontent.com/assets/1004115/8674092/03052652-2a55-11e5-8531-8f01c7970af4.png)

Also:
- do not start the task at DownloadTaskWrapper (it starts from ImageDowloader if image isn&#39;t cached yet);
- fire `onLoadAbor`t event;
- send more readable `error.localizedDescription` with `onLoadError`;
- rename `onLoaded` to `onLoadEnd`
Closes https://github.com/facebook/react-native/pull/1987
Github Author: Dmitriy Loktev &lt;unknownliveid@hotmail.com&gt;">[Image] Add examples to UIExplorer, fix some bugs</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-14T20:56:55Z">Jul 14, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/d1a82c4af120c7c8562d8c4774c939bd59a4cd77/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L278">278</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC278">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L279">279</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC279">  {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L280">280</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC280">    title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Image Download Progress<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L281">281</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC281">    <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L282">282</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC282">      <span class="pl-k">return</span> (</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="9">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/frantic" aria-label="frantic" class="tooltipped tooltipped-e">
                      <img alt="@frantic" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/192222?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/7f0071ae580f0b8d1fe4684d2ef60dde4a3f69fb" class="message f6 text-gray-dark" data-pjax="true" title="Fix UIExplorer tests (image loading failure)

Reviewed By: jingc

Differential Revision: D4209282

fbshipit-source-id: 113612b8d9d8304c17a699ff416b66cf9ab1fdca">Fix UIExplorer tests (image loading failure)</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="9"><time-ago datetime="2016-11-19T05:01:24Z">Nov 19, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/a10eee4372d94c5272406e1b2f507ec98b5a4e03/Examples/UIExplorer/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L283">283</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC283">        <span class="pl-k">&lt;</span>NetworkImageExample source<span class="pl-k">=</span>{{uri<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>http://origami.design/public/images/bird-logo.png?r=1<span class="pl-pds">&#39;</span></span>}}<span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ptmt" aria-label="ptmt" class="tooltipped tooltipped-e">
                      <img alt="@ptmt" class="avatar blame-commit-avatar" height="20" src="https://avatars0.githubusercontent.com/u/1004115?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/74f8055692893ddc8e756f1a262c0488a205d529" class="message f6 text-gray-dark" data-pjax="true" title="[Image] Add examples to UIExplorer, fix some bugs

Summary:
Add two simple examples.
![image](https://cloud.githubusercontent.com/assets/1004115/8674092/03052652-2a55-11e5-8531-8f01c7970af4.png)

Also:
- do not start the task at DownloadTaskWrapper (it starts from ImageDowloader if image isn&#39;t cached yet);
- fire `onLoadAbor`t event;
- send more readable `error.localizedDescription` with `onLoadError`;
- rename `onLoaded` to `onLoadEnd`
Closes https://github.com/facebook/react-native/pull/1987
Github Author: Dmitriy Loktev &lt;unknownliveid@hotmail.com&gt;">[Image] Add examples to UIExplorer, fix some bugs</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-14T20:56:55Z">Jul 14, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/d1a82c4af120c7c8562d8c4774c939bd59a4cd77/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L284">284</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC284">      );</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L285">285</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC285">    },</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/andreicoman11" aria-label="andreicoman11" class="tooltipped tooltipped-e">
                      <img alt="@andreicoman11" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/6615092?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/9cede03846932cd466bebcc4d6833a077a0942c8" class="message f6 text-gray-dark" data-pjax="true" title="[ReactNative][SyncDiff] Add Image Example">[ReactNative][SyncDiff] Add Image Example</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-09-01T15:51:46Z">Sep 1, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/c522e3b16e06e6a33f9a904657f440bc81d9d640/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L286">286</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC286">    platform<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ios<span class="pl-pds">&#39;</span></span>,</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ptmt" aria-label="ptmt" class="tooltipped tooltipped-e">
                      <img alt="@ptmt" class="avatar blame-commit-avatar" height="20" src="https://avatars0.githubusercontent.com/u/1004115?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/74f8055692893ddc8e756f1a262c0488a205d529" class="message f6 text-gray-dark" data-pjax="true" title="[Image] Add examples to UIExplorer, fix some bugs

Summary:
Add two simple examples.
![image](https://cloud.githubusercontent.com/assets/1004115/8674092/03052652-2a55-11e5-8531-8f01c7970af4.png)

Also:
- do not start the task at DownloadTaskWrapper (it starts from ImageDowloader if image isn&#39;t cached yet);
- fire `onLoadAbor`t event;
- send more readable `error.localizedDescription` with `onLoadError`;
- rename `onLoaded` to `onLoadEnd`
Closes https://github.com/facebook/react-native/pull/1987
Github Author: Dmitriy Loktev &lt;unknownliveid@hotmail.com&gt;">[Image] Add examples to UIExplorer, fix some bugs</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-14T20:56:55Z">Jul 14, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/d1a82c4af120c7c8562d8c4774c939bd59a4cd77/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L287">287</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC287">  },</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/brentvatne" aria-label="brentvatne" class="tooltipped tooltipped-e">
                      <img alt="@brentvatne" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/90494?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/cb2eeb484d52c24853471025a49c136159429afa" class="message f6 text-gray-dark" data-pjax="true" title="Add defaultSource example

Summary: Closes https://github.com/facebook/react-native/pull/5074

Reviewed By: svcscm

Differential Revision: D2798023

Pulled By: nicklockwood

fb-gh-sync-id: d8aa87bf8dcbecf53b341d5914bbe3354cc753aa">Add defaultSource example</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-02-01T18:19:56Z">Feb 1, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/80a2f5d50fc61b8ba48169d8dcca0247f4b484f2/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L288">288</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC288">  {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L289">289</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC289">    title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>defaultSource<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L290">290</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC290">    description<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Show a placeholder image when a network image is loading<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L291">291</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC291">    <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L292">292</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC292">      <span class="pl-k">return</span> (</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L293">293</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC293">        <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L294">294</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC294">          defaultSource<span class="pl-k">=</span>{<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>./bunny.png<span class="pl-pds">&#39;</span></span>)}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/originerd" aria-label="originerd" class="tooltipped tooltipped-e">
                      <img alt="@originerd" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/2003265?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/52d90da75e70f383161be06d5d1b52864c329954" class="message f6 text-gray-dark" data-pjax="true" title="Modify image url from http to https on examples

Summary:
Modify image url from http to https on examples

&gt; App Transport Security (ATS) is enabled by default for apps linked against the iOS 9.0 or OS X v10.11 SDKs or later, as indicated by the default Boolean value of NO for the NSAllowsArbitraryLoads key. This key is at the root level of the NSAppTransportSecurity dictionary.
With ATS enabled, HTTP connections must use HTTPS (RFC 2818). Attempts to connect using insecure HTTP fail. ATS employs the Transport Layer Security (TLS) protocol version 1.2 (RFC 5246). For background on secure Internet connections, read HTTPS Server Trust Evaluation.
https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW35
Closes https://github.com/facebook/react-native/pull/10714

Differential Revision: D4124471

Pulled By: hramos

fbshipit-source-id: a7cc9d0267906747b00a1d88245af52c967c7b11">Modify image url from http to https on examples</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-11-03T15:04:42Z">Nov 3, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/2ac6c754c1541ae52df7881ec077b9271c3061e5/Examples/UIExplorer/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L295">295</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC295">          source<span class="pl-k">=</span>{{uri<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>https://facebook.github.io/origami/public/images/birds.jpg<span class="pl-pds">&#39;</span></span>}}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/brentvatne" aria-label="brentvatne" class="tooltipped tooltipped-e">
                      <img alt="@brentvatne" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/90494?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/cb2eeb484d52c24853471025a49c136159429afa" class="message f6 text-gray-dark" data-pjax="true" title="Add defaultSource example

Summary: Closes https://github.com/facebook/react-native/pull/5074

Reviewed By: svcscm

Differential Revision: D2798023

Pulled By: nicklockwood

fb-gh-sync-id: d8aa87bf8dcbecf53b341d5914bbe3354cc753aa">Add defaultSource example</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-02-01T18:19:56Z">Feb 1, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/80a2f5d50fc61b8ba48169d8dcca0247f4b484f2/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L296">296</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC296">          style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">base</span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L297">297</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC297">        <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L298">298</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC298">      );</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L299">299</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC299">    },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L300">300</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC300">    platform<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ios<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L301">301</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC301">  },</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="9">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/salanki" aria-label="salanki" class="tooltipped tooltipped-e">
                      <img alt="@salanki" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/192223?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/52d8851fc8d7dc95d0ccff0d9775eece30b983b8" class="message f6 text-gray-dark" data-pjax="true" title="Cache policy control for image source

Summary:
In the context of an app an image exists in three resolutions on the server: `thumb` (30px) `feed` (300px) `full` (900px). When looking at an individual item a user can come either from the feed, via a permalink or from other parts of the app. This allows a situation where the `feed` image might or might not already be loaded somewhere in the app. In the detail view I want to render `thumb` with a blur (to quickly display something), then the `feed` image if it exists to have something decent to display until `full` loads. However it is quite a waste to load the `feed` image if it isn&#39;t already in cache, and will slow down the time until `full` is loaded. It is possible to track the navigation from feed-&gt;detail and that the `feed` image has actually completed loading by the feed component however as component hierarchies grow this turns into quite a lot of prop passing and bad separation of concerns.

NSURLRequests accepts a [Cache Policy](https://developer.apple.com/reference/fo
Closes https://github.com/facebook/react-native/pull/10844

Differential Revision: D4425959

Pulled By: lacker

fbshipit-source-id: 679835439c761a2fc894f56eb6d744c036cf0b49">Cache policy control for image source</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="9"><time-ago datetime="2017-01-18T00:58:27Z">Jan 18, 2017</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/a6844bdf7589b38297328e69f61e2986a129ab30/Examples/UIExplorer/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L302">302</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC302">  {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L303">303</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC303">    title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Cache Policy<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L304">304</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC304">    description<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>First image has never been loaded before and is instructed not to load unless in cache.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L305">305</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC305">    <span class="pl-s"><span class="pl-pds">&#39;</span>Placeholder image from above will stay. Second image is the same but forced to load regardless of<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L306">306</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC306">    <span class="pl-s"><span class="pl-pds">&#39;</span> local cache state.<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L307">307</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC307">    <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L308">308</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC308">      <span class="pl-k">return</span> (</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L309">309</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC309">        <span class="pl-k">&lt;</span>View style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">horizontal</span>}<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L310">310</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC310">          <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L311">311</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC311">            defaultSource<span class="pl-k">=</span>{<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>./bunny.png<span class="pl-pds">&#39;</span></span>)}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L312">312</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC312">            source<span class="pl-k">=</span>{{</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L313">313</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC313">              uri<span class="pl-k">:</span> <span class="pl-smi">smallImage</span>.<span class="pl-smi">uri</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>?cacheBust=notinCache<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">Date</span>.<span class="pl-en">now</span>(),</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L314">314</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC314">              cache<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>only-if-cached<span class="pl-pds">&#39;</span></span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L315">315</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC315">            }}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L316">316</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC316">            style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">base</span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L317">317</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC317">          <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L318">318</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC318">          <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L319">319</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC319">            defaultSource<span class="pl-k">=</span>{<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>./bunny.png<span class="pl-pds">&#39;</span></span>)}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L320">320</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC320">            source<span class="pl-k">=</span>{{</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L321">321</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC321">              uri<span class="pl-k">:</span> <span class="pl-smi">smallImage</span>.<span class="pl-smi">uri</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>?cacheBust=notinCache<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">Date</span>.<span class="pl-en">now</span>(),</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L322">322</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC322">              cache<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>reload<span class="pl-pds">&#39;</span></span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L323">323</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC323">            }}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L324">324</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC324">            style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">base</span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L325">325</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC325">          <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L326">326</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC326">        <span class="pl-k">&lt;</span><span class="pl-k">/</span>View<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L327">327</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC327">      );</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L328">328</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC328">    },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L329">329</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC329">    platform<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ios<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L330">330</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC330">  },</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sahrens" aria-label="sahrens" class="tooltipped tooltipped-e">
                      <img alt="@sahrens" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/1509831?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="message f6 text-gray-dark" data-pjax="true" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-02-20T04:10:52Z">Feb 20, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L331">331</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC331">  {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L332">332</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC332">    title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Border Color<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L333">333</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC333">    <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L334">334</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC334">      <span class="pl-k">return</span> (</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L335">335</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC335">        <span class="pl-k">&lt;</span>View style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">horizontal</span>}<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L336">336</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC336">          <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L337">337</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC337">            source<span class="pl-k">=</span>{smallImage}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L338">338</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC338">            style<span class="pl-k">=</span>{[</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L339">339</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC339">              <span class="pl-smi">styles</span>.<span class="pl-smi">base</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L340">340</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC340">              <span class="pl-smi">styles</span>.<span class="pl-c1">background</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L341">341</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC341">              {borderWidth<span class="pl-k">:</span> <span class="pl-c1">3</span>, borderColor<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#f099f0<span class="pl-pds">&#39;</span></span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L342">342</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC342">            ]}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L343">343</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC343">          <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L344">344</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC344">        <span class="pl-k">&lt;</span><span class="pl-k">/</span>View<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L345">345</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC345">      );</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L346">346</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC346">    },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L347">347</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC347">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L348">348</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC348">  {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L349">349</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC349">    title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Border Width<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L350">350</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC350">    <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L351">351</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC351">      <span class="pl-k">return</span> (</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L352">352</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC352">        <span class="pl-k">&lt;</span>View style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">horizontal</span>}<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L353">353</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC353">          <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L354">354</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC354">            source<span class="pl-k">=</span>{smallImage}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L355">355</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC355">            style<span class="pl-k">=</span>{[</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L356">356</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC356">              <span class="pl-smi">styles</span>.<span class="pl-smi">base</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L357">357</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC357">              <span class="pl-smi">styles</span>.<span class="pl-c1">background</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L358">358</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC358">              {borderWidth<span class="pl-k">:</span> <span class="pl-c1">5</span>, borderColor<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#f099f0<span class="pl-pds">&#39;</span></span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L359">359</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC359">            ]}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L360">360</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC360">          <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L361">361</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC361">        <span class="pl-k">&lt;</span><span class="pl-k">/</span>View<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L362">362</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC362">      );</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L363">363</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC363">    },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L364">364</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC364">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L365">365</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC365">  {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L366">366</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC366">    title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Border Radius<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L367">367</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC367">    <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L368">368</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC368">      <span class="pl-k">return</span> (</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L369">369</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC369">        <span class="pl-k">&lt;</span>View style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">horizontal</span>}<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L370">370</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC370">          <span class="pl-k">&lt;</span>Image</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/andreicoman11" aria-label="andreicoman11" class="tooltipped tooltipped-e">
                      <img alt="@andreicoman11" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/6615092?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/9cede03846932cd466bebcc4d6833a077a0942c8" class="message f6 text-gray-dark" data-pjax="true" title="[ReactNative][SyncDiff] Add Image Example">[ReactNative][SyncDiff] Add Image Example</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-09-01T15:51:46Z">Sep 1, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/c522e3b16e06e6a33f9a904657f440bc81d9d640/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L371">371</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC371">            style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">base</span>, {borderRadius<span class="pl-k">:</span> <span class="pl-c1">5</span>}]}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L372">372</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC372">            source<span class="pl-k">=</span>{fullImage}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sahrens" aria-label="sahrens" class="tooltipped tooltipped-e">
                      <img alt="@sahrens" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/1509831?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="message f6 text-gray-dark" data-pjax="true" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-02-20T04:10:52Z">Feb 20, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L373">373</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC373">          <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L374">374</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC374">          <span class="pl-k">&lt;</span>Image</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/andreicoman11" aria-label="andreicoman11" class="tooltipped tooltipped-e">
                      <img alt="@andreicoman11" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/6615092?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/9cede03846932cd466bebcc4d6833a077a0942c8" class="message f6 text-gray-dark" data-pjax="true" title="[ReactNative][SyncDiff] Add Image Example">[ReactNative][SyncDiff] Add Image Example</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-09-01T15:51:46Z">Sep 1, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/c522e3b16e06e6a33f9a904657f440bc81d9d640/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L375">375</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC375">            style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">base</span>, <span class="pl-smi">styles</span>.<span class="pl-smi">leftMargin</span>, {borderRadius<span class="pl-k">:</span> <span class="pl-c1">19</span>}]}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L376">376</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC376">            source<span class="pl-k">=</span>{fullImage}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sahrens" aria-label="sahrens" class="tooltipped tooltipped-e">
                      <img alt="@sahrens" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/1509831?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="message f6 text-gray-dark" data-pjax="true" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-02-20T04:10:52Z">Feb 20, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L377">377</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC377">          <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L378">378</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC378">        <span class="pl-k">&lt;</span><span class="pl-k">/</span>View<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L379">379</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC379">      );</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L380">380</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC380">    },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L381">381</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC381">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L382">382</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC382">  {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L383">383</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC383">    title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Background Color<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L384">384</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC384">    <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L385">385</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC385">      <span class="pl-k">return</span> (</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L386">386</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC386">        <span class="pl-k">&lt;</span>View style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">horizontal</span>}<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L387">387</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC387">          <span class="pl-k">&lt;</span>Image source<span class="pl-k">=</span>{smallImage} style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">base</span>} <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L388">388</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC388">          <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L389">389</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC389">            style<span class="pl-k">=</span>{[</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L390">390</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC390">              <span class="pl-smi">styles</span>.<span class="pl-smi">base</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L391">391</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC391">              <span class="pl-smi">styles</span>.<span class="pl-smi">leftMargin</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L392">392</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC392">              {backgroundColor<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>rgba(0, 0, 100, 0.25)<span class="pl-pds">&#39;</span></span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L393">393</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC393">            ]}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L394">394</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC394">            source<span class="pl-k">=</span>{smallImage}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L395">395</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC395">          <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L396">396</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC396">          <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L397">397</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC397">            style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">base</span>, <span class="pl-smi">styles</span>.<span class="pl-smi">leftMargin</span>, {backgroundColor<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>red<span class="pl-pds">&#39;</span></span>}]}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L398">398</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC398">            source<span class="pl-k">=</span>{smallImage}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L399">399</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC399">          <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L400">400</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC400">          <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L401">401</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC401">            style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">base</span>, <span class="pl-smi">styles</span>.<span class="pl-smi">leftMargin</span>, {backgroundColor<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>black<span class="pl-pds">&#39;</span></span>}]}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L402">402</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC402">            source<span class="pl-k">=</span>{smallImage}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L403">403</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC403">          <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L404">404</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC404">        <span class="pl-k">&lt;</span><span class="pl-k">/</span>View<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L405">405</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC405">      );</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L406">406</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC406">    },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L407">407</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC407">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L408">408</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC408">  {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L409">409</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC409">    title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Opacity<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L410">410</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC410">    <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L411">411</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC411">      <span class="pl-k">return</span> (</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L412">412</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC412">        <span class="pl-k">&lt;</span>View style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">horizontal</span>}<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L413">413</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC413">          <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L414">414</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC414">            style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">base</span>, {opacity<span class="pl-k">:</span> <span class="pl-c1">1</span>}]}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L415">415</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC415">            source<span class="pl-k">=</span>{fullImage}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L416">416</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC416">          <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L417">417</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC417">          <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L418">418</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC418">            style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">base</span>, <span class="pl-smi">styles</span>.<span class="pl-smi">leftMargin</span>, {opacity<span class="pl-k">:</span> <span class="pl-c1">0.8</span>}]}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L419">419</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC419">            source<span class="pl-k">=</span>{fullImage}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L420">420</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC420">          <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L421">421</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC421">          <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L422">422</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC422">            style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">base</span>, <span class="pl-smi">styles</span>.<span class="pl-smi">leftMargin</span>, {opacity<span class="pl-k">:</span> <span class="pl-c1">0.6</span>}]}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L423">423</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC423">            source<span class="pl-k">=</span>{fullImage}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L424">424</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC424">          <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L425">425</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC425">          <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L426">426</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC426">            style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">base</span>, <span class="pl-smi">styles</span>.<span class="pl-smi">leftMargin</span>, {opacity<span class="pl-k">:</span> <span class="pl-c1">0.4</span>}]}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L427">427</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC427">            source<span class="pl-k">=</span>{fullImage}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L428">428</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC428">          <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L429">429</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC429">          <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L430">430</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC430">            style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">base</span>, <span class="pl-smi">styles</span>.<span class="pl-smi">leftMargin</span>, {opacity<span class="pl-k">:</span> <span class="pl-c1">0.2</span>}]}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L431">431</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC431">            source<span class="pl-k">=</span>{fullImage}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L432">432</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC432">          <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L433">433</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC433">          <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L434">434</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC434">            style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">base</span>, <span class="pl-smi">styles</span>.<span class="pl-smi">leftMargin</span>, {opacity<span class="pl-k">:</span> <span class="pl-c1">0</span>}]}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L435">435</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC435">            source<span class="pl-k">=</span>{fullImage}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L436">436</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC436">          <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L437">437</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC437">        <span class="pl-k">&lt;</span><span class="pl-k">/</span>View<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L438">438</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC438">      );</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L439">439</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC439">    },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L440">440</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC440">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L441">441</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC441">  {</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="7">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/mdvacca" aria-label="mdvacca" class="tooltipped tooltipped-e">
                      <img alt="@mdvacca" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/515103?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/b694f96762a291b274dcd779245b246f44c1aa8f" class="message f6 text-gray-dark" data-pjax="true" title="adding error message including stacktrace and example

Reviewed By: fkgozali

Differential Revision: D5908789

fbshipit-source-id: 061e414d5105df607b7dcafefb134ad9c94a9a71">adding error message including stacktrace and example</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="7"><time-ago datetime="2017-09-26T04:55:56Z">Sep 26, 2017</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/29e76591110de914debec9b2458940baf79581e8/RNTester/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L442">442</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC442">    title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Nesting content inside &lt;Image&gt; component<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L443">443</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC443">    <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L444">444</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC444">      <span class="pl-k">return</span> (</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L445">445</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC445">        <span class="pl-k">&lt;</span>View style<span class="pl-k">=</span>{{width<span class="pl-k">:</span> <span class="pl-c1">60</span>, height<span class="pl-k">:</span> <span class="pl-c1">60</span>}}<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L446">446</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC446">          <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L447">447</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC447">            style<span class="pl-k">=</span>{{<span class="pl-k">...</span><span class="pl-c1">StyleSheet</span>.<span class="pl-smi">absoluteFillObject</span>}}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L448">448</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC448">            source<span class="pl-k">=</span>{fullImage}<span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L449">449</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC449">          <span class="pl-k">&lt;</span><span class="pl-c1">Text</span> style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">nestedText</span>}<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L450">450</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC450">            React</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L451">451</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC451">          <span class="pl-k">&lt;</span><span class="pl-k">/</span><span class="pl-c1">Text</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L452">452</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC452">        <span class="pl-k">&lt;</span><span class="pl-k">/</span>View<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L453">453</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC453">      );</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L454">454</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC454">    },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L455">455</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC455">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L456">456</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC456">  {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L457">457</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC457">    title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Nesting content inside &lt;ImageBackground&gt; component<span class="pl-pds">&#39;</span></span>,</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sahrens" aria-label="sahrens" class="tooltipped tooltipped-e">
                      <img alt="@sahrens" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/1509831?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="message f6 text-gray-dark" data-pjax="true" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-02-20T04:10:52Z">Feb 20, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L458">458</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC458">    <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L459">459</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC459">      <span class="pl-k">return</span> (</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="8">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/shergin" aria-label="shergin" class="tooltipped tooltipped-e">
                      <img alt="@shergin" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/22032?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/9637dd4a1b78d5f6da510b1b4ad10d45d67badbf" class="message f6 text-gray-dark" data-pjax="true" title="Introducing &lt;ImageBackground&gt;, replacement for &lt;Image&gt; which supports nesting views

Summary:
We are removing support of nesting views inside &lt;Image&gt; component. We decided to do this because having this feature makes supporting `intrinsinc content size` of the `&lt;Image&gt;` impossible; so when the transition process is complete, there will be no need to specify image size explicitly, it can be inferred from actual image bitmap.

And this is the step #0.

&lt;ImageBackground&gt; is very simple drop-in replacement which implements this functionality via very simple styling.
Please, use &lt;ImageBackground&gt; instead of &lt;Image&gt; if you want to put something inside.

Reviewed By: yungsters

Differential Revision: D5100021

fbshipit-source-id: 640c0fb2d1066e166d974efba39b4cfaaee7dd45">Introducing &lt;ImageBackground&gt;, replacement for &lt;Image&gt; which supports…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="8"><time-ago datetime="2017-05-24T18:19:31Z">May 24, 2017</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/275ba316c3eba7001677907dd334a453211b98d1/RNTester/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L460">460</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC460">        <span class="pl-k">&lt;</span>ImageBackground</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sahrens" aria-label="sahrens" class="tooltipped tooltipped-e">
                      <img alt="@sahrens" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/1509831?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="message f6 text-gray-dark" data-pjax="true" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-02-20T04:10:52Z">Feb 20, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L461">461</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC461">          style<span class="pl-k">=</span>{{width<span class="pl-k">:</span> <span class="pl-c1">60</span>, height<span class="pl-k">:</span> <span class="pl-c1">60</span>, backgroundColor<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>transparent<span class="pl-pds">&#39;</span></span>}}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L462">462</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC462">          source<span class="pl-k">=</span>{fullImage}<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L463">463</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC463">          <span class="pl-k">&lt;</span><span class="pl-c1">Text</span> style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">nestedText</span>}<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L464">464</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC464">            React</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L465">465</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC465">          <span class="pl-k">&lt;</span><span class="pl-k">/</span><span class="pl-c1">Text</span><span class="pl-k">&gt;</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="8">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/shergin" aria-label="shergin" class="tooltipped tooltipped-e">
                      <img alt="@shergin" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/22032?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/9637dd4a1b78d5f6da510b1b4ad10d45d67badbf" class="message f6 text-gray-dark" data-pjax="true" title="Introducing &lt;ImageBackground&gt;, replacement for &lt;Image&gt; which supports nesting views

Summary:
We are removing support of nesting views inside &lt;Image&gt; component. We decided to do this because having this feature makes supporting `intrinsinc content size` of the `&lt;Image&gt;` impossible; so when the transition process is complete, there will be no need to specify image size explicitly, it can be inferred from actual image bitmap.

And this is the step #0.

&lt;ImageBackground&gt; is very simple drop-in replacement which implements this functionality via very simple styling.
Please, use &lt;ImageBackground&gt; instead of &lt;Image&gt; if you want to put something inside.

Reviewed By: yungsters

Differential Revision: D5100021

fbshipit-source-id: 640c0fb2d1066e166d974efba39b4cfaaee7dd45">Introducing &lt;ImageBackground&gt;, replacement for &lt;Image&gt; which supports…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="8"><time-ago datetime="2017-05-24T18:19:31Z">May 24, 2017</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/275ba316c3eba7001677907dd334a453211b98d1/RNTester/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L466">466</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC466">        <span class="pl-k">&lt;</span><span class="pl-k">/</span>ImageBackground<span class="pl-k">&gt;</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sahrens" aria-label="sahrens" class="tooltipped tooltipped-e">
                      <img alt="@sahrens" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/1509831?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="message f6 text-gray-dark" data-pjax="true" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-02-20T04:10:52Z">Feb 20, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L467">467</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC467">      );</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L468">468</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC468">    },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L469">469</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC469">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L470">470</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC470">  {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L471">471</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC471">    title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Tint Color<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L472">472</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC472">    description<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>The `tintColor` style prop changes all the non-alpha <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L473">473</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC473">      <span class="pl-s"><span class="pl-pds">&#39;</span>pixels to the tint color.<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L474">474</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC474">    <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L475">475</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC475">      <span class="pl-k">return</span> (</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ide" aria-label="ide" class="tooltipped tooltipped-e">
                      <img alt="@ide" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/379606?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/d5943b0e47428fda78121a5b51c7a40a646af865" class="message f6 text-gray-dark" data-pjax="true" title="[Image] Add support for tintColor to remote images

Summary:
Remote images now support the `tintColor` prop.

Also picked nicer demo colors for the UIExplorer example.

Fixes #1867

Closes https://github.com/facebook/react-native/pull/1932
Github Author: James Ide &lt;ide@jameside.com&gt;">[Image] Add support for tintColor to remote images</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-13T17:30:34Z">Jul 13, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/90dd7a13f0a3997517f8c560bc53e213efc88049/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L476">476</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC476">        <span class="pl-k">&lt;</span>View<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L477">477</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC477">          <span class="pl-k">&lt;</span>View style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">horizontal</span>}<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L478">478</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC478">            <span class="pl-k">&lt;</span>Image</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/andybb" aria-label="andybb" class="tooltipped tooltipped-e">
                      <img alt="@andybb" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/3686509?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/b85a52a46181b096faf665d3382aa7a10fc65f76" class="message f6 text-gray-dark" data-pjax="true" title="Update Image docs and examples to the new asset system

Summary:
After the release of 0.14, static images should be placed in the source code tree and then required as explained in the [Images guide] (https://facebook.github.io/react-native/docs/images.html). This pull request updates the image documentation and examples to the new asset system. UIExplorer tested on iOS and Android.
Closes https://github.com/facebook/react-native/pull/4987

Reviewed By: svcscm

Differential Revision: D2796276

Pulled By: bestander

fb-gh-sync-id: 732ffa2f136391bb8a3e40a54b5b1ff5022c97f2">Update Image docs and examples to the new asset system</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-01-27T21:21:42Z">Jan 27, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/04d14e5a2eac29fbecaf0d6e3973ff3fe2177a42/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L479">479</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC479">              source<span class="pl-k">=</span>{<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>./uie_thumb_normal.png<span class="pl-pds">&#39;</span></span>)}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/andreicoman11" aria-label="andreicoman11" class="tooltipped tooltipped-e">
                      <img alt="@andreicoman11" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/6615092?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/9cede03846932cd466bebcc4d6833a077a0942c8" class="message f6 text-gray-dark" data-pjax="true" title="[ReactNative][SyncDiff] Add Image Example">[ReactNative][SyncDiff] Add Image Example</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-09-01T15:51:46Z">Sep 1, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/c522e3b16e06e6a33f9a904657f440bc81d9d640/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L480">480</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC480">              style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">icon</span>, {borderRadius<span class="pl-k">:</span> <span class="pl-c1">5</span>, tintColor<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#5ac8fa<span class="pl-pds">&#39;</span></span> }]}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ide" aria-label="ide" class="tooltipped tooltipped-e">
                      <img alt="@ide" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/379606?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/d5943b0e47428fda78121a5b51c7a40a646af865" class="message f6 text-gray-dark" data-pjax="true" title="[Image] Add support for tintColor to remote images

Summary:
Remote images now support the `tintColor` prop.

Also picked nicer demo colors for the UIExplorer example.

Fixes #1867

Closes https://github.com/facebook/react-native/pull/1932
Github Author: James Ide &lt;ide@jameside.com&gt;">[Image] Add support for tintColor to remote images</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-13T17:30:34Z">Jul 13, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/90dd7a13f0a3997517f8c560bc53e213efc88049/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L481">481</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC481">            <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L482">482</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC482">            <span class="pl-k">&lt;</span>Image</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/andybb" aria-label="andybb" class="tooltipped tooltipped-e">
                      <img alt="@andybb" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/3686509?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/b85a52a46181b096faf665d3382aa7a10fc65f76" class="message f6 text-gray-dark" data-pjax="true" title="Update Image docs and examples to the new asset system

Summary:
After the release of 0.14, static images should be placed in the source code tree and then required as explained in the [Images guide] (https://facebook.github.io/react-native/docs/images.html). This pull request updates the image documentation and examples to the new asset system. UIExplorer tested on iOS and Android.
Closes https://github.com/facebook/react-native/pull/4987

Reviewed By: svcscm

Differential Revision: D2796276

Pulled By: bestander

fb-gh-sync-id: 732ffa2f136391bb8a3e40a54b5b1ff5022c97f2">Update Image docs and examples to the new asset system</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-01-27T21:21:42Z">Jan 27, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/04d14e5a2eac29fbecaf0d6e3973ff3fe2177a42/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L483">483</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC483">              source<span class="pl-k">=</span>{<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>./uie_thumb_normal.png<span class="pl-pds">&#39;</span></span>)}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/andreicoman11" aria-label="andreicoman11" class="tooltipped tooltipped-e">
                      <img alt="@andreicoman11" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/6615092?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/9cede03846932cd466bebcc4d6833a077a0942c8" class="message f6 text-gray-dark" data-pjax="true" title="[ReactNative][SyncDiff] Add Image Example">[ReactNative][SyncDiff] Add Image Example</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-09-01T15:51:46Z">Sep 1, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/c522e3b16e06e6a33f9a904657f440bc81d9d640/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L484">484</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC484">              style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">icon</span>, <span class="pl-smi">styles</span>.<span class="pl-smi">leftMargin</span>, {borderRadius<span class="pl-k">:</span> <span class="pl-c1">5</span>, tintColor<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#4cd964<span class="pl-pds">&#39;</span></span> }]}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ide" aria-label="ide" class="tooltipped tooltipped-e">
                      <img alt="@ide" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/379606?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/d5943b0e47428fda78121a5b51c7a40a646af865" class="message f6 text-gray-dark" data-pjax="true" title="[Image] Add support for tintColor to remote images

Summary:
Remote images now support the `tintColor` prop.

Also picked nicer demo colors for the UIExplorer example.

Fixes #1867

Closes https://github.com/facebook/react-native/pull/1932
Github Author: James Ide &lt;ide@jameside.com&gt;">[Image] Add support for tintColor to remote images</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-13T17:30:34Z">Jul 13, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/90dd7a13f0a3997517f8c560bc53e213efc88049/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L485">485</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC485">            <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L486">486</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC486">            <span class="pl-k">&lt;</span>Image</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/andybb" aria-label="andybb" class="tooltipped tooltipped-e">
                      <img alt="@andybb" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/3686509?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/b85a52a46181b096faf665d3382aa7a10fc65f76" class="message f6 text-gray-dark" data-pjax="true" title="Update Image docs and examples to the new asset system

Summary:
After the release of 0.14, static images should be placed in the source code tree and then required as explained in the [Images guide] (https://facebook.github.io/react-native/docs/images.html). This pull request updates the image documentation and examples to the new asset system. UIExplorer tested on iOS and Android.
Closes https://github.com/facebook/react-native/pull/4987

Reviewed By: svcscm

Differential Revision: D2796276

Pulled By: bestander

fb-gh-sync-id: 732ffa2f136391bb8a3e40a54b5b1ff5022c97f2">Update Image docs and examples to the new asset system</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-01-27T21:21:42Z">Jan 27, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/04d14e5a2eac29fbecaf0d6e3973ff3fe2177a42/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L487">487</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC487">              source<span class="pl-k">=</span>{<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>./uie_thumb_normal.png<span class="pl-pds">&#39;</span></span>)}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/andreicoman11" aria-label="andreicoman11" class="tooltipped tooltipped-e">
                      <img alt="@andreicoman11" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/6615092?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/9cede03846932cd466bebcc4d6833a077a0942c8" class="message f6 text-gray-dark" data-pjax="true" title="[ReactNative][SyncDiff] Add Image Example">[ReactNative][SyncDiff] Add Image Example</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-09-01T15:51:46Z">Sep 1, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/c522e3b16e06e6a33f9a904657f440bc81d9d640/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L488">488</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC488">              style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">icon</span>, <span class="pl-smi">styles</span>.<span class="pl-smi">leftMargin</span>, {borderRadius<span class="pl-k">:</span> <span class="pl-c1">5</span>, tintColor<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#ff2d55<span class="pl-pds">&#39;</span></span> }]}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ide" aria-label="ide" class="tooltipped tooltipped-e">
                      <img alt="@ide" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/379606?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/d5943b0e47428fda78121a5b51c7a40a646af865" class="message f6 text-gray-dark" data-pjax="true" title="[Image] Add support for tintColor to remote images

Summary:
Remote images now support the `tintColor` prop.

Also picked nicer demo colors for the UIExplorer example.

Fixes #1867

Closes https://github.com/facebook/react-native/pull/1932
Github Author: James Ide &lt;ide@jameside.com&gt;">[Image] Add support for tintColor to remote images</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-13T17:30:34Z">Jul 13, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/90dd7a13f0a3997517f8c560bc53e213efc88049/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L489">489</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC489">            <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L490">490</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC490">            <span class="pl-k">&lt;</span>Image</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/andybb" aria-label="andybb" class="tooltipped tooltipped-e">
                      <img alt="@andybb" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/3686509?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/b85a52a46181b096faf665d3382aa7a10fc65f76" class="message f6 text-gray-dark" data-pjax="true" title="Update Image docs and examples to the new asset system

Summary:
After the release of 0.14, static images should be placed in the source code tree and then required as explained in the [Images guide] (https://facebook.github.io/react-native/docs/images.html). This pull request updates the image documentation and examples to the new asset system. UIExplorer tested on iOS and Android.
Closes https://github.com/facebook/react-native/pull/4987

Reviewed By: svcscm

Differential Revision: D2796276

Pulled By: bestander

fb-gh-sync-id: 732ffa2f136391bb8a3e40a54b5b1ff5022c97f2">Update Image docs and examples to the new asset system</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-01-27T21:21:42Z">Jan 27, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/04d14e5a2eac29fbecaf0d6e3973ff3fe2177a42/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L491">491</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC491">              source<span class="pl-k">=</span>{<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>./uie_thumb_normal.png<span class="pl-pds">&#39;</span></span>)}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/andreicoman11" aria-label="andreicoman11" class="tooltipped tooltipped-e">
                      <img alt="@andreicoman11" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/6615092?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/9cede03846932cd466bebcc4d6833a077a0942c8" class="message f6 text-gray-dark" data-pjax="true" title="[ReactNative][SyncDiff] Add Image Example">[ReactNative][SyncDiff] Add Image Example</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-09-01T15:51:46Z">Sep 1, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/c522e3b16e06e6a33f9a904657f440bc81d9d640/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L492">492</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC492">              style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">icon</span>, <span class="pl-smi">styles</span>.<span class="pl-smi">leftMargin</span>, {borderRadius<span class="pl-k">:</span> <span class="pl-c1">5</span>, tintColor<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#8e8e93<span class="pl-pds">&#39;</span></span> }]}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ide" aria-label="ide" class="tooltipped tooltipped-e">
                      <img alt="@ide" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/379606?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/d5943b0e47428fda78121a5b51c7a40a646af865" class="message f6 text-gray-dark" data-pjax="true" title="[Image] Add support for tintColor to remote images

Summary:
Remote images now support the `tintColor` prop.

Also picked nicer demo colors for the UIExplorer example.

Fixes #1867

Closes https://github.com/facebook/react-native/pull/1932
Github Author: James Ide &lt;ide@jameside.com&gt;">[Image] Add support for tintColor to remote images</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-13T17:30:34Z">Jul 13, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/90dd7a13f0a3997517f8c560bc53e213efc88049/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L493">493</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC493">            <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L494">494</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC494">          <span class="pl-k">&lt;</span><span class="pl-k">/</span>View<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L495">495</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC495">          <span class="pl-k">&lt;</span><span class="pl-c1">Text</span> style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">sectionText</span>}<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L496">496</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC496">            It also works <span class="pl-k">with</span> downloaded images<span class="pl-k">:</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L497">497</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC497">          <span class="pl-k">&lt;</span><span class="pl-k">/</span><span class="pl-c1">Text</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L498">498</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC498">          <span class="pl-k">&lt;</span>View style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">horizontal</span>}<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L499">499</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC499">            <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L500">500</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC500">              source<span class="pl-k">=</span>{smallImage}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/andreicoman11" aria-label="andreicoman11" class="tooltipped tooltipped-e">
                      <img alt="@andreicoman11" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/6615092?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/9cede03846932cd466bebcc4d6833a077a0942c8" class="message f6 text-gray-dark" data-pjax="true" title="[ReactNative][SyncDiff] Add Image Example">[ReactNative][SyncDiff] Add Image Example</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-09-01T15:51:46Z">Sep 1, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/c522e3b16e06e6a33f9a904657f440bc81d9d640/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L501">501</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC501">              style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">base</span>, {borderRadius<span class="pl-k">:</span> <span class="pl-c1">5</span>, tintColor<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#5ac8fa<span class="pl-pds">&#39;</span></span> }]}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ide" aria-label="ide" class="tooltipped tooltipped-e">
                      <img alt="@ide" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/379606?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/d5943b0e47428fda78121a5b51c7a40a646af865" class="message f6 text-gray-dark" data-pjax="true" title="[Image] Add support for tintColor to remote images

Summary:
Remote images now support the `tintColor` prop.

Also picked nicer demo colors for the UIExplorer example.

Fixes #1867

Closes https://github.com/facebook/react-native/pull/1932
Github Author: James Ide &lt;ide@jameside.com&gt;">[Image] Add support for tintColor to remote images</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-13T17:30:34Z">Jul 13, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/90dd7a13f0a3997517f8c560bc53e213efc88049/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L502">502</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC502">            <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L503">503</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC503">            <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L504">504</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC504">              source<span class="pl-k">=</span>{smallImage}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/andreicoman11" aria-label="andreicoman11" class="tooltipped tooltipped-e">
                      <img alt="@andreicoman11" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/6615092?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/9cede03846932cd466bebcc4d6833a077a0942c8" class="message f6 text-gray-dark" data-pjax="true" title="[ReactNative][SyncDiff] Add Image Example">[ReactNative][SyncDiff] Add Image Example</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-09-01T15:51:46Z">Sep 1, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/c522e3b16e06e6a33f9a904657f440bc81d9d640/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L505">505</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC505">              style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">base</span>, <span class="pl-smi">styles</span>.<span class="pl-smi">leftMargin</span>, {borderRadius<span class="pl-k">:</span> <span class="pl-c1">5</span>, tintColor<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#4cd964<span class="pl-pds">&#39;</span></span> }]}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ide" aria-label="ide" class="tooltipped tooltipped-e">
                      <img alt="@ide" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/379606?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/d5943b0e47428fda78121a5b51c7a40a646af865" class="message f6 text-gray-dark" data-pjax="true" title="[Image] Add support for tintColor to remote images

Summary:
Remote images now support the `tintColor` prop.

Also picked nicer demo colors for the UIExplorer example.

Fixes #1867

Closes https://github.com/facebook/react-native/pull/1932
Github Author: James Ide &lt;ide@jameside.com&gt;">[Image] Add support for tintColor to remote images</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-13T17:30:34Z">Jul 13, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/90dd7a13f0a3997517f8c560bc53e213efc88049/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L506">506</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC506">            <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L507">507</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC507">            <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L508">508</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC508">              source<span class="pl-k">=</span>{smallImage}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/andreicoman11" aria-label="andreicoman11" class="tooltipped tooltipped-e">
                      <img alt="@andreicoman11" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/6615092?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/9cede03846932cd466bebcc4d6833a077a0942c8" class="message f6 text-gray-dark" data-pjax="true" title="[ReactNative][SyncDiff] Add Image Example">[ReactNative][SyncDiff] Add Image Example</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-09-01T15:51:46Z">Sep 1, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/c522e3b16e06e6a33f9a904657f440bc81d9d640/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L509">509</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC509">              style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">base</span>, <span class="pl-smi">styles</span>.<span class="pl-smi">leftMargin</span>, {borderRadius<span class="pl-k">:</span> <span class="pl-c1">5</span>, tintColor<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#ff2d55<span class="pl-pds">&#39;</span></span> }]}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ide" aria-label="ide" class="tooltipped tooltipped-e">
                      <img alt="@ide" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/379606?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/d5943b0e47428fda78121a5b51c7a40a646af865" class="message f6 text-gray-dark" data-pjax="true" title="[Image] Add support for tintColor to remote images

Summary:
Remote images now support the `tintColor` prop.

Also picked nicer demo colors for the UIExplorer example.

Fixes #1867

Closes https://github.com/facebook/react-native/pull/1932
Github Author: James Ide &lt;ide@jameside.com&gt;">[Image] Add support for tintColor to remote images</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-13T17:30:34Z">Jul 13, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/90dd7a13f0a3997517f8c560bc53e213efc88049/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L510">510</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC510">            <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L511">511</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC511">            <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L512">512</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC512">              source<span class="pl-k">=</span>{smallImage}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/andreicoman11" aria-label="andreicoman11" class="tooltipped tooltipped-e">
                      <img alt="@andreicoman11" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/6615092?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/9cede03846932cd466bebcc4d6833a077a0942c8" class="message f6 text-gray-dark" data-pjax="true" title="[ReactNative][SyncDiff] Add Image Example">[ReactNative][SyncDiff] Add Image Example</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-09-01T15:51:46Z">Sep 1, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/c522e3b16e06e6a33f9a904657f440bc81d9d640/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L513">513</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC513">              style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">base</span>, <span class="pl-smi">styles</span>.<span class="pl-smi">leftMargin</span>, {borderRadius<span class="pl-k">:</span> <span class="pl-c1">5</span>, tintColor<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#8e8e93<span class="pl-pds">&#39;</span></span> }]}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ide" aria-label="ide" class="tooltipped tooltipped-e">
                      <img alt="@ide" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/379606?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/d5943b0e47428fda78121a5b51c7a40a646af865" class="message f6 text-gray-dark" data-pjax="true" title="[Image] Add support for tintColor to remote images

Summary:
Remote images now support the `tintColor` prop.

Also picked nicer demo colors for the UIExplorer example.

Fixes #1867

Closes https://github.com/facebook/react-native/pull/1932
Github Author: James Ide &lt;ide@jameside.com&gt;">[Image] Add support for tintColor to remote images</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-13T17:30:34Z">Jul 13, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/90dd7a13f0a3997517f8c560bc53e213efc88049/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L514">514</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC514">            <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L515">515</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC515">          <span class="pl-k">&lt;</span><span class="pl-k">/</span>View<span class="pl-k">&gt;</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sahrens" aria-label="sahrens" class="tooltipped tooltipped-e">
                      <img alt="@sahrens" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/1509831?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="message f6 text-gray-dark" data-pjax="true" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-02-20T04:10:52Z">Feb 20, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L516">516</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC516">        <span class="pl-k">&lt;</span><span class="pl-k">/</span>View<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L517">517</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC517">      );</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L518">518</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC518">    },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L519">519</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC519">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L520">520</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC520">  {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L521">521</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC521">    title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Resize Mode<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L522">522</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC522">    description<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>The `resizeMode` style prop controls how the image is <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L523">523</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC523">      <span class="pl-s"><span class="pl-pds">&#39;</span>rendered within the frame.<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L524">524</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC524">    <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L525">525</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC525">      <span class="pl-k">return</span> (</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/cosmith" aria-label="cosmith" class="tooltipped tooltipped-e">
                      <img alt="@cosmith" class="avatar blame-commit-avatar" height="20" src="https://avatars0.githubusercontent.com/u/1194749?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/2070efa019f6b5dfb38500d41e4d7e263f59f0d2" class="message f6 text-gray-dark" data-pjax="true" title="Convert Image resizeMode `contain` to FIT_CENTER

Summary:Convert from `CENTER_INSIDE` to `FIT_CENTER`.
The difference between those is that `CENTER_INSIDE` will not upscale if the image is too small.
See the Fresco docs: http://frescolib.org/javadoc/reference/com/facebook/drawee/drawable/ScalingUtils.ScaleType.html

Original issue: https://github.com/facebook/react-native/issues/4031
Closes https://github.com/facebook/react-native/pull/5738

Differential Revision: D2959473

Pulled By: mkonicek

fb-gh-sync-id: 8f76944e53b3d56fec0dc7303db339a71d0c389e
shipit-source-id: 8f76944e53b3d56fec0dc7303db339a71d0c389e">Convert Image resizeMode `contain` to FIT_CENTER</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-03-08T20:09:17Z">Mar 8, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/10ad47a711954f1af077c7f237ad37ff269d324e/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L526">526</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC526">        <span class="pl-k">&lt;</span>View<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L527">527</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC527">          {[smallImage, fullImage].<span class="pl-en">map</span>((<span class="pl-smi">image</span>, <span class="pl-smi">index</span>) <span class="pl-k">=&gt;</span> {</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/alonsch" aria-label="alonsch" class="tooltipped tooltipped-e">
                      <img alt="@alonsch" class="avatar blame-commit-avatar" height="20" src="https://avatars2.githubusercontent.com/u/8719674?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/fb8340d2899067bcd3d4c50b92690f19eb62c305" class="message f6 text-gray-dark" data-pjax="true" title="Add center ImageResizeMode option

Summary:Adds a `center` option to `Image`&#39;s `resizeMode` prop, which doesn&#39;t enlarge images.
This is how it looks in UIExplorer:
{F60386921}

Reviewed By: dmmiller

Differential Revision: D3064284

fb-gh-sync-id: 79cd2da8f44c5b3da2e42d3bebf3131335f53c28
shipit-source-id: 79cd2da8f44c5b3da2e42d3bebf3131335f53c28">Add center ImageResizeMode option</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-03-19T18:24:06Z">Mar 19, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/05b9902ae689b2bcab95cb6315aaee4a59e4fe99/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L528">528</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC528">            <span class="pl-k">return</span> (</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L529">529</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC529">            <span class="pl-k">&lt;</span>View key<span class="pl-k">=</span>{index}<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L530">530</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC530">              <span class="pl-k">&lt;</span>View style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">horizontal</span>}<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L531">531</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC531">                <span class="pl-k">&lt;</span>View<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L532">532</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC532">                  <span class="pl-k">&lt;</span><span class="pl-c1">Text</span> style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">resizeModeText</span>]}<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L533">533</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC533">                    Contain</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L534">534</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC534">                  <span class="pl-k">&lt;</span><span class="pl-k">/</span><span class="pl-c1">Text</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L535">535</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC535">                  <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L536">536</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC536">                    style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">resizeMode</span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L537">537</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC537">                    resizeMode<span class="pl-k">=</span>{<span class="pl-smi">Image</span>.<span class="pl-smi">resizeMode</span>.<span class="pl-smi">contain</span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L538">538</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC538">                    source<span class="pl-k">=</span>{image}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L539">539</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC539">                  <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L540">540</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC540">                <span class="pl-k">&lt;</span><span class="pl-k">/</span>View<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L541">541</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC541">                <span class="pl-k">&lt;</span>View style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">leftMargin</span>}<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L542">542</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC542">                  <span class="pl-k">&lt;</span><span class="pl-c1">Text</span> style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">resizeModeText</span>]}<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L543">543</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC543">                    Cover</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L544">544</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC544">                  <span class="pl-k">&lt;</span><span class="pl-k">/</span><span class="pl-c1">Text</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L545">545</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC545">                  <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L546">546</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC546">                    style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">resizeMode</span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L547">547</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC547">                    resizeMode<span class="pl-k">=</span>{<span class="pl-smi">Image</span>.<span class="pl-smi">resizeMode</span>.<span class="pl-smi">cover</span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L548">548</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC548">                    source<span class="pl-k">=</span>{image}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L549">549</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC549">                  <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L550">550</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC550">                <span class="pl-k">&lt;</span><span class="pl-k">/</span>View<span class="pl-k">&gt;</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/cosmith" aria-label="cosmith" class="tooltipped tooltipped-e">
                      <img alt="@cosmith" class="avatar blame-commit-avatar" height="20" src="https://avatars0.githubusercontent.com/u/1194749?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/2070efa019f6b5dfb38500d41e4d7e263f59f0d2" class="message f6 text-gray-dark" data-pjax="true" title="Convert Image resizeMode `contain` to FIT_CENTER

Summary:Convert from `CENTER_INSIDE` to `FIT_CENTER`.
The difference between those is that `CENTER_INSIDE` will not upscale if the image is too small.
See the Fresco docs: http://frescolib.org/javadoc/reference/com/facebook/drawee/drawable/ScalingUtils.ScaleType.html

Original issue: https://github.com/facebook/react-native/issues/4031
Closes https://github.com/facebook/react-native/pull/5738

Differential Revision: D2959473

Pulled By: mkonicek

fb-gh-sync-id: 8f76944e53b3d56fec0dc7303db339a71d0c389e
shipit-source-id: 8f76944e53b3d56fec0dc7303db339a71d0c389e">Convert Image resizeMode `contain` to FIT_CENTER</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-03-08T20:09:17Z">Mar 8, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/10ad47a711954f1af077c7f237ad37ff269d324e/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L551">551</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC551">              <span class="pl-k">&lt;</span><span class="pl-k">/</span>View<span class="pl-k">&gt;</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/alonsch" aria-label="alonsch" class="tooltipped tooltipped-e">
                      <img alt="@alonsch" class="avatar blame-commit-avatar" height="20" src="https://avatars2.githubusercontent.com/u/8719674?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/fb8340d2899067bcd3d4c50b92690f19eb62c305" class="message f6 text-gray-dark" data-pjax="true" title="Add center ImageResizeMode option

Summary:Adds a `center` option to `Image`&#39;s `resizeMode` prop, which doesn&#39;t enlarge images.
This is how it looks in UIExplorer:
{F60386921}

Reviewed By: dmmiller

Differential Revision: D3064284

fb-gh-sync-id: 79cd2da8f44c5b3da2e42d3bebf3131335f53c28
shipit-source-id: 79cd2da8f44c5b3da2e42d3bebf3131335f53c28">Add center ImageResizeMode option</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-03-19T18:24:06Z">Mar 19, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/05b9902ae689b2bcab95cb6315aaee4a59e4fe99/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L552">552</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC552">              <span class="pl-k">&lt;</span>View style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">horizontal</span>}<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L553">553</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC553">                <span class="pl-k">&lt;</span>View<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L554">554</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC554">                  <span class="pl-k">&lt;</span><span class="pl-c1">Text</span> style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">resizeModeText</span>]}<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L555">555</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC555">                    Stretch</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L556">556</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC556">                  <span class="pl-k">&lt;</span><span class="pl-k">/</span><span class="pl-c1">Text</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L557">557</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC557">                  <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L558">558</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC558">                    style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">resizeMode</span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L559">559</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC559">                    resizeMode<span class="pl-k">=</span>{<span class="pl-smi">Image</span>.<span class="pl-smi">resizeMode</span>.<span class="pl-smi">stretch</span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L560">560</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC560">                    source<span class="pl-k">=</span>{image}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L561">561</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC561">                  <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L562">562</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC562">                <span class="pl-k">&lt;</span><span class="pl-k">/</span>View<span class="pl-k">&gt;</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/janicduplessis" aria-label="janicduplessis" class="tooltipped tooltipped-e">
                      <img alt="@janicduplessis" class="avatar blame-commit-avatar" height="20" src="https://avatars2.githubusercontent.com/u/2677334?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/4c8323751142510192b28b25da720a40d639eac7" class="message f6 text-gray-dark" data-pjax="true" title="Add Image resizeMode repeat on iOS

Summary:
This adds a new resize mode for iOS &#39;repeat&#39; that tiles the image over it&#39;s frame. This allow to easily create a view with a repeating background pattern which there is no way to do at the moment without including a bunch of different sized assets.

I&#39;m not 100% sure it should be a resizeMode or a separate prop but I went with resizeMode since it made more sense to me and the are not really any use cases where we&#39;d want to use this with another resizeMode other than &#39;stretch&#39;.

**Test plan**

Tested mainly by adding a UIExplorer example, also tested that changing the resizeMode prop from and to &#39;repeat&#39; worked properly.
![screen shot 2016-06-07 at 3 06 17 am](https://cloud.githubusercontent.com/assets/2677334/15848755/d95d8046-2c5c-11e6-9f3d-1ce8a1c9c846.png)

I&#39;d like to implement this on Android too but it is a bit trickier since Fresco&#39;s ImageView doesn&#39;t support image tiling and would require submitting a PR there too :(
Closes https://github.com/facebook/react-native/pull/7968

Differential Revision: D3469119

Pulled By: javache

fbshipit-source-id: ab9dbfe448a5b0771dbf0c41fcceeb366210f583">Add Image resizeMode repeat on iOS</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-22T11:13:22Z">Jun 22, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/0669a38b0113a5c4de14ad93d1845a332dcdd566/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L563">563</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC563">                { <span class="pl-smi">Platform</span>.<span class="pl-c1">OS</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ios<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L564">564</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC564">                  <span class="pl-k">&lt;</span>View style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">leftMargin</span>}<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L565">565</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC565">                    <span class="pl-k">&lt;</span><span class="pl-c1">Text</span> style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">resizeModeText</span>]}<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L566">566</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC566">                      Repeat</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L567">567</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC567">                    <span class="pl-k">&lt;</span><span class="pl-k">/</span><span class="pl-c1">Text</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L568">568</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC568">                    <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L569">569</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC569">                      style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">resizeMode</span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L570">570</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC570">                      resizeMode<span class="pl-k">=</span>{<span class="pl-smi">Image</span>.<span class="pl-smi">resizeMode</span>.<span class="pl-smi">repeat</span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L571">571</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC571">                      source<span class="pl-k">=</span>{image}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L572">572</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC572">                    <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L573">573</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC573">                  <span class="pl-k">&lt;</span><span class="pl-k">/</span>View<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L574">574</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC574">                <span class="pl-k">:</span> <span class="pl-c1">null</span> }</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="2">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/motiz88" aria-label="motiz88" class="tooltipped tooltipped-e">
                      <img alt="@motiz88" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/2246565?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/be7037fd8e1c4b92646caf7a70b9d6d28ef2c30a" class="message f6 text-gray-dark" data-pjax="true" title="Test and document Image resizeMode=center on iOS

Summary:
`&lt;Image resizeMode=&quot;center&quot;&gt;` already works on iOS (implemented in #8792), but is neither tested nor documented the way the other `resizeMode` values are.

This PR primarily enables the relevant RNTester case on iOS, and secondarily copies over the doc comment from `Image.android.js` to `Image.ios.js`. A PR to `react-native-website` will follow shortly and it is there I will try and revise the wording a bit.

Updated RNTester screenshot (iOS):

&lt;img src=https://user-images.githubusercontent.com/2246565/35470720-44b38282-0357-11e8-941c-1b3c5a1b2f3b.png width=300&gt;

react-native-website PR coming soon.

[IOS] [MINOR] [Image] - Include resizeMode=center in RNTester
Closes https://github.com/facebook/react-native/pull/17759

Differential Revision: D6829051

Pulled By: hramos

fbshipit-source-id: c6e0000a75765e8bf3a1d0306aaafad002b14a58">Test and document Image resizeMode=center on iOS</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="2"><time-ago datetime="2018-01-27T19:29:52Z">Jan 27, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/29f8354c1946a6325e9020b9ef5ee4ccdf0fa51f/RNTester/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L575">575</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC575">                <span class="pl-k">&lt;</span>View style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">leftMargin</span>}<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L576">576</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC576">                  <span class="pl-k">&lt;</span><span class="pl-c1">Text</span> style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">resizeModeText</span>]}<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L577">577</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC577">                    Center</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L578">578</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC578">                  <span class="pl-k">&lt;</span><span class="pl-k">/</span><span class="pl-c1">Text</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L579">579</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC579">                  <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L580">580</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC580">                    style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">resizeMode</span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L581">581</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC581">                    resizeMode<span class="pl-k">=</span>{<span class="pl-smi">Image</span>.<span class="pl-smi">resizeMode</span>.<span class="pl-smi">center</span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L582">582</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC582">                    source<span class="pl-k">=</span>{image}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L583">583</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC583">                  <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L584">584</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC584">                <span class="pl-k">&lt;</span><span class="pl-k">/</span>View<span class="pl-k">&gt;</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/cosmith" aria-label="cosmith" class="tooltipped tooltipped-e">
                      <img alt="@cosmith" class="avatar blame-commit-avatar" height="20" src="https://avatars0.githubusercontent.com/u/1194749?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/2070efa019f6b5dfb38500d41e4d7e263f59f0d2" class="message f6 text-gray-dark" data-pjax="true" title="Convert Image resizeMode `contain` to FIT_CENTER

Summary:Convert from `CENTER_INSIDE` to `FIT_CENTER`.
The difference between those is that `CENTER_INSIDE` will not upscale if the image is too small.
See the Fresco docs: http://frescolib.org/javadoc/reference/com/facebook/drawee/drawable/ScalingUtils.ScaleType.html

Original issue: https://github.com/facebook/react-native/issues/4031
Closes https://github.com/facebook/react-native/pull/5738

Differential Revision: D2959473

Pulled By: mkonicek

fb-gh-sync-id: 8f76944e53b3d56fec0dc7303db339a71d0c389e
shipit-source-id: 8f76944e53b3d56fec0dc7303db339a71d0c389e">Convert Image resizeMode `contain` to FIT_CENTER</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-03-08T20:09:17Z">Mar 8, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/10ad47a711954f1af077c7f237ad37ff269d324e/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L585">585</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC585">              <span class="pl-k">&lt;</span><span class="pl-k">/</span>View<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L586">586</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC586">            <span class="pl-k">&lt;</span><span class="pl-k">/</span>View<span class="pl-k">&gt;</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/alonsch" aria-label="alonsch" class="tooltipped tooltipped-e">
                      <img alt="@alonsch" class="avatar blame-commit-avatar" height="20" src="https://avatars2.githubusercontent.com/u/8719674?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/fb8340d2899067bcd3d4c50b92690f19eb62c305" class="message f6 text-gray-dark" data-pjax="true" title="Add center ImageResizeMode option

Summary:Adds a `center` option to `Image`&#39;s `resizeMode` prop, which doesn&#39;t enlarge images.
This is how it looks in UIExplorer:
{F60386921}

Reviewed By: dmmiller

Differential Revision: D3064284

fb-gh-sync-id: 79cd2da8f44c5b3da2e42d3bebf3131335f53c28
shipit-source-id: 79cd2da8f44c5b3da2e42d3bebf3131335f53c28">Add center ImageResizeMode option</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-03-19T18:24:06Z">Mar 19, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/05b9902ae689b2bcab95cb6315aaee4a59e4fe99/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L587">587</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC587">          );</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/cosmith" aria-label="cosmith" class="tooltipped tooltipped-e">
                      <img alt="@cosmith" class="avatar blame-commit-avatar" height="20" src="https://avatars0.githubusercontent.com/u/1194749?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/2070efa019f6b5dfb38500d41e4d7e263f59f0d2" class="message f6 text-gray-dark" data-pjax="true" title="Convert Image resizeMode `contain` to FIT_CENTER

Summary:Convert from `CENTER_INSIDE` to `FIT_CENTER`.
The difference between those is that `CENTER_INSIDE` will not upscale if the image is too small.
See the Fresco docs: http://frescolib.org/javadoc/reference/com/facebook/drawee/drawable/ScalingUtils.ScaleType.html

Original issue: https://github.com/facebook/react-native/issues/4031
Closes https://github.com/facebook/react-native/pull/5738

Differential Revision: D2959473

Pulled By: mkonicek

fb-gh-sync-id: 8f76944e53b3d56fec0dc7303db339a71d0c389e
shipit-source-id: 8f76944e53b3d56fec0dc7303db339a71d0c389e">Convert Image resizeMode `contain` to FIT_CENTER</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-03-08T20:09:17Z">Mar 8, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/10ad47a711954f1af077c7f237ad37ff269d324e/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L588">588</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC588">        })}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sahrens" aria-label="sahrens" class="tooltipped tooltipped-e">
                      <img alt="@sahrens" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/1509831?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="message f6 text-gray-dark" data-pjax="true" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-02-20T04:10:52Z">Feb 20, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L589">589</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC589">        <span class="pl-k">&lt;</span><span class="pl-k">/</span>View<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L590">590</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC590">      );</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L591">591</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC591">    },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L592">592</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC592">  },</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/nicklockwood" aria-label="nicklockwood" class="tooltipped tooltipped-e">
                      <img alt="@nicklockwood" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/546885?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/e4110456abb29a5d53814e8626e8dcb6161089d2" class="message f6 text-gray-dark" data-pjax="true" title="Changed RCTImageLoader to always return a UIImage

Summary:
GIF images are currently loaded as a CAKeyframeAnimation, however returning this animation directly from RCTImageLoader was dangerous, as any code that expected a UIImage would crash.

This diff changes RCTGIFImageLoader to return a UIImage of the first frame, with the keyframe animation attached as an associated object. This way, code that is not expecting an animation will still work correctly.">Changed RCTImageLoader to always return a UIImage</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-09-04T11:35:44Z">Sep 4, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/3c4adeb2e730bb3e252d1611d9da2c777d63998f/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L593">593</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC593">  {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L594">594</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC594">    title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Animated GIF<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L595">595</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC595">    <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L596">596</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC596">      <span class="pl-k">return</span> (</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L597">597</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC597">        <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L598">598</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC598">          style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">gif</span>}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/originerd" aria-label="originerd" class="tooltipped tooltipped-e">
                      <img alt="@originerd" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/2003265?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/52d90da75e70f383161be06d5d1b52864c329954" class="message f6 text-gray-dark" data-pjax="true" title="Modify image url from http to https on examples

Summary:
Modify image url from http to https on examples

&gt; App Transport Security (ATS) is enabled by default for apps linked against the iOS 9.0 or OS X v10.11 SDKs or later, as indicated by the default Boolean value of NO for the NSAllowsArbitraryLoads key. This key is at the root level of the NSAppTransportSecurity dictionary.
With ATS enabled, HTTP connections must use HTTPS (RFC 2818). Attempts to connect using insecure HTTP fail. ATS employs the Transport Layer Security (TLS) protocol version 1.2 (RFC 5246). For background on secure Internet connections, read HTTPS Server Trust Evaluation.
https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW35
Closes https://github.com/facebook/react-native/pull/10714

Differential Revision: D4124471

Pulled By: hramos

fbshipit-source-id: a7cc9d0267906747b00a1d88245af52c967c7b11">Modify image url from http to https on examples</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-11-03T15:04:42Z">Nov 3, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/2ac6c754c1541ae52df7881ec077b9271c3061e5/Examples/UIExplorer/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L599">599</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC599">          source<span class="pl-k">=</span>{{uri<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>https://38.media.tumblr.com/9e9bd08c6e2d10561dd1fb4197df4c4e/tumblr_mfqekpMktw1rn90umo1_500.gif<span class="pl-pds">&#39;</span></span>}}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/nicklockwood" aria-label="nicklockwood" class="tooltipped tooltipped-e">
                      <img alt="@nicklockwood" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/546885?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/e4110456abb29a5d53814e8626e8dcb6161089d2" class="message f6 text-gray-dark" data-pjax="true" title="Changed RCTImageLoader to always return a UIImage

Summary:
GIF images are currently loaded as a CAKeyframeAnimation, however returning this animation directly from RCTImageLoader was dangerous, as any code that expected a UIImage would crash.

This diff changes RCTGIFImageLoader to return a UIImage of the first frame, with the keyframe animation attached as an associated object. This way, code that is not expecting an animation will still work correctly.">Changed RCTImageLoader to always return a UIImage</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-09-04T11:35:44Z">Sep 4, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/3c4adeb2e730bb3e252d1611d9da2c777d63998f/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L600">600</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC600">        <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L601">601</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC601">      );</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L602">602</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC602">    },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L603">603</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC603">    platform<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ios<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L604">604</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC604">  },</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/nicklockwood" aria-label="nicklockwood" class="tooltipped tooltipped-e">
                      <img alt="@nicklockwood" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/546885?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/1076f4a172069b4d9e8f9d194f0f924341e354e2" class="message f6 text-gray-dark" data-pjax="true" title="Added RCTDataRequestHandler

Summary: public

Added RCTDataRequestHandler, which is responsible for loading data URLs. This moves the logic for data URL handling out of RCTImageDownloader (no longer needed) and into the RCTNetwork library, where it makes more sense.

This also means that it is now possible to load data URLs via XHR, and use them for purposes other than just images.

Reviewed By: javache

Differential Revision: D2540964

fb-gh-sync-id: 4f0418bd6b9186f047cc8297276bb970795af104">Added RCTDataRequestHandler</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-10-19T16:04:54Z">Oct 19, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/31f9a690f3b3524adf08aa9d8c01843e8524453e/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L605">605</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC605">  {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L606">606</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC606">    title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Base64 image<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L607">607</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC607">    <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L608">608</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC608">      <span class="pl-k">return</span> (</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L609">609</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC609">        <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L610">610</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC610">          style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">base64</span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L611">611</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC611">          source<span class="pl-k">=</span>{{uri<span class="pl-k">:</span> base64Icon, scale<span class="pl-k">:</span> <span class="pl-c1">3</span>}}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L612">612</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC612">        <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L613">613</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC613">      );</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L614">614</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC614">    },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L615">615</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC615">    platform<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ios<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L616">616</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC616">  },</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sahrens" aria-label="sahrens" class="tooltipped tooltipped-e">
                      <img alt="@sahrens" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/1509831?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="message f6 text-gray-dark" data-pjax="true" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-02-20T04:10:52Z">Feb 20, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L617">617</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC617">  {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L618">618</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC618">    title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Cap Insets<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L619">619</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC619">    description<span class="pl-k">:</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L620">620</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC620">      <span class="pl-s"><span class="pl-pds">&#39;</span>When the image is resized, the corners of the size specified <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L621">621</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC621">      <span class="pl-s"><span class="pl-pds">&#39;</span>by capInsets will stay a fixed size, but the center content and <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L622">622</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC622">      <span class="pl-s"><span class="pl-pds">&#39;</span>borders of the image will be stretched. This is useful for creating <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L623">623</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC623">      <span class="pl-s"><span class="pl-pds">&#39;</span>resizable rounded buttons, shadows, and other resizable assets.<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L624">624</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC624">    <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L625">625</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC625">      <span class="pl-k">return</span> <span class="pl-k">&lt;</span>ImageCapInsetsExample <span class="pl-k">/</span><span class="pl-k">&gt;</span>;</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L626">626</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC626">    },</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/andreicoman11" aria-label="andreicoman11" class="tooltipped tooltipped-e">
                      <img alt="@andreicoman11" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/6615092?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/9cede03846932cd466bebcc4d6833a077a0942c8" class="message f6 text-gray-dark" data-pjax="true" title="[ReactNative][SyncDiff] Add Image Example">[ReactNative][SyncDiff] Add Image Example</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-09-01T15:51:46Z">Sep 1, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/c522e3b16e06e6a33f9a904657f440bc81d9d640/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L627">627</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC627">    platform<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ios<span class="pl-pds">&#39;</span></span>,</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sahrens" aria-label="sahrens" class="tooltipped tooltipped-e">
                      <img alt="@sahrens" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/1509831?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="message f6 text-gray-dark" data-pjax="true" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-02-20T04:10:52Z">Feb 20, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L628">628</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC628">  },</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/nicklockwood" aria-label="nicklockwood" class="tooltipped tooltipped-e">
                      <img alt="@nicklockwood" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/546885?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/718cd7953f6a30338882c4b56bd11c83fb311d7f" class="message f6 text-gray-dark" data-pjax="true" title="Added getImageSize method

Summary:
public

This diff adds a `getSize()` method to `Image` to retrieve the width and height of an image prior to displaying it. This is useful when working with images from uncontrolled sources, and has been a much-requested feature.

In order to retrieve the image dimensions, the image may first need to be loaded or downloaded, after which it will be cached. This means that in principle you could use this method to preload images, however it is not optimized for that purpose, and may in future be implemented in a way that does not fully load/download the image data.

A fully supported way to preload images will be provided in a future diff.

The API (separate success and failure callbacks) is far from ideal, but until we agree on a unified standard, this was the most conventional way I could think of to implement it. If it returned a promise or something similar, it would be unique among all such APIS in the framework.

Please note that this has been a long time coming, in part due to much bikeshedding about what the API should look like, so while it&#39;s not unlikely that the API may change in future, I think having *some* way to do this is better than waiting until we can define the &quot;perfect&quot; way.

Reviewed By: vjeux

Differential Revision: D2797365

fb-gh-sync-id: 11eb1b8547773b1f8be0bc55ddf6dfedebf7fc0a">Added getImageSize method</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-01-01T02:50:26Z">Jan 1, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/24b942faeb67ede5b042660f75720d5e6c6bd429/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L629">629</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC629">  {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L630">630</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC630">    title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Image Size<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L631">631</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC631">    <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/alonsch" aria-label="alonsch" class="tooltipped tooltipped-e">
                      <img alt="@alonsch" class="avatar blame-commit-avatar" height="20" src="https://avatars2.githubusercontent.com/u/8719674?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/fb8340d2899067bcd3d4c50b92690f19eb62c305" class="message f6 text-gray-dark" data-pjax="true" title="Add center ImageResizeMode option

Summary:Adds a `center` option to `Image`&#39;s `resizeMode` prop, which doesn&#39;t enlarge images.
This is how it looks in UIExplorer:
{F60386921}

Reviewed By: dmmiller

Differential Revision: D3064284

fb-gh-sync-id: 79cd2da8f44c5b3da2e42d3bebf3131335f53c28
shipit-source-id: 79cd2da8f44c5b3da2e42d3bebf3131335f53c28">Add center ImageResizeMode option</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-03-19T18:24:06Z">Mar 19, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/05b9902ae689b2bcab95cb6315aaee4a59e4fe99/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L632">632</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC632">      <span class="pl-k">return</span> <span class="pl-k">&lt;</span>ImageSizeExample source<span class="pl-k">=</span>{fullImage} <span class="pl-k">/</span><span class="pl-k">&gt;</span>;</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/browniefed" aria-label="browniefed" class="tooltipped tooltipped-e">
                      <img alt="@browniefed" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/1714673?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/b8aac8b77a6b0737c23fd7d68c7b83ff068f5c4c" class="message f6 text-gray-dark" data-pjax="true" title="Implement draggable annotations on MapView. Closes #2512

Summary: Closes https://github.com/facebook/react-native/pull/4441

Reviewed By: svcscm

Differential Revision: D2707897

Pulled By: nicklockwood

fb-gh-sync-id: 6f67f711c1ec1f821d03b9b1ea5cc39859d28fd1">Implement draggable annotations on MapView. <span aria-label="This commit closes issue #2512." class="issue-keyword tooltipped tooltipped-se">Closes</span> <a href="https://github.com/facebook/react-native/issues/2512" class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="104227364" data-permission-text="Issue title is private" data-url="https://github.com/facebook/react-native/issues/2512">#2512</a>
</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-01-04T14:37:15Z">Jan 4, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/64edddadccecb8a6b062c16253daac403486cbcb/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L633">633</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC633">    },</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/nicklockwood" aria-label="nicklockwood" class="tooltipped tooltipped-e">
                      <img alt="@nicklockwood" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/546885?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/718cd7953f6a30338882c4b56bd11c83fb311d7f" class="message f6 text-gray-dark" data-pjax="true" title="Added getImageSize method

Summary:
public

This diff adds a `getSize()` method to `Image` to retrieve the width and height of an image prior to displaying it. This is useful when working with images from uncontrolled sources, and has been a much-requested feature.

In order to retrieve the image dimensions, the image may first need to be loaded or downloaded, after which it will be cached. This means that in principle you could use this method to preload images, however it is not optimized for that purpose, and may in future be implemented in a way that does not fully load/download the image data.

A fully supported way to preload images will be provided in a future diff.

The API (separate success and failure callbacks) is far from ideal, but until we agree on a unified standard, this was the most conventional way I could think of to implement it. If it returned a promise or something similar, it would be unique among all such APIS in the framework.

Please note that this has been a long time coming, in part due to much bikeshedding about what the API should look like, so while it&#39;s not unlikely that the API may change in future, I think having *some* way to do this is better than waiting until we can define the &quot;perfect&quot; way.

Reviewed By: vjeux

Differential Revision: D2797365

fb-gh-sync-id: 11eb1b8547773b1f8be0bc55ddf6dfedebf7fc0a">Added getImageSize method</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-01-01T02:50:26Z">Jan 1, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/24b942faeb67ede5b042660f75720d5e6c6bd429/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L634">634</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC634">  },</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/andreicoman11" aria-label="andreicoman11" class="tooltipped tooltipped-e">
                      <img alt="@andreicoman11" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/6615092?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/617a38d9846fee81b3d94d1e9d06fd74ecb5abe1" class="message f6 text-gray-dark" data-pjax="true" title="Support multi sources for images

Summary:
This adds support for specifying multiple sources for an image component, so that native can choose the best one based on the flexbox-computed size of the image.
The API is as follows: the image component receives in the `source` prop an array of objects of the type `{uri, width, height}`. On the native side, the native component will wait for the layout pass to receive the width and height of the image, and then parse the array to find the best fitting one. For now, this does not support local resources, but it will be added soon.
To see how this works and play with it, there&#39;s an example called `MultipleSourcesExample` under `ImageExample` In UIExplorer.

Reviewed By: foghina

Differential Revision: D3364550

fbshipit-source-id: 66c5aeb2794f2ffeff8da39a9c0b95155fb2d41f">Support multi sources for images</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-13T21:04:19Z">Jun 13, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/9443bc5c3f7c294306c65176c132e4254c3f70b0/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L635">635</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC635">  {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L636">636</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC636">    title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>MultipleSourcesExample<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L637">637</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC637">    description<span class="pl-k">:</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L638">638</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC638">      <span class="pl-s"><span class="pl-pds">&#39;</span>The `source` prop allows passing in an array of uris, so that native to choose which image <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L639">639</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC639">      <span class="pl-s"><span class="pl-pds">&#39;</span>to diplay based on the size of the of the target image<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L640">640</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC640">    <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L641">641</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC641">      <span class="pl-k">return</span> <span class="pl-k">&lt;</span>MultipleSourcesExample <span class="pl-k">/</span><span class="pl-k">&gt;</span>;</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L642">642</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC642">    },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L643">643</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC643">  },</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/janicduplessis" aria-label="janicduplessis" class="tooltipped tooltipped-e">
                      <img alt="@janicduplessis" class="avatar blame-commit-avatar" height="20" src="https://avatars2.githubusercontent.com/u/2677334?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/5903949ad64fc7eb71427c382d93c1535fceab03" class="message f6 text-gray-dark" data-pjax="true" title="Load local assets synchronously to prevent image flicker

Summary:
This uses `[UIImage imageNamed:]` to load local assets that are bundled using `require(&#39;../image/path.png&#39;)` and makes sure it is done synchronously on the main queue to prevent images from flickering. This improves user experience a lot when using large local images and prevents icon flickers to match the behaviour of most native apps.

This adds to methods to the ImageLoader protocol, one to tell if the image loader must be executed on the url cache queue and one to tell if the result of the image loader should be cached. I then use these to make the LocalImageLoader bypass the url cache queue and avoid caching images twice.

Note that this doesn&#39;t affect debug builds since images are loaded from the packager.

I&#39;m not sure if we want to still support async loading of local images as I&#39;m not sure how much of a perf difference this will make. Maybe someone at fb can benchmark this see how it affects your apps but there wasn&#39;t a noticeable one in mine. Also I only enabled this for loading png and jpg im
Closes https://github.com/facebook/react-native/pull/8102

Reviewed By: bnham

Differential Revision: D3433647

Pulled By: javache

fbshipit-source-id: 37bd6aff20c0465c163db3cdbcaeaedff55f7b1f">Load local assets synchronously to prevent image flicker</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-07-21T14:45:54Z">Jul 21, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/7e5de707be0d0bdfe90f908b1fc7d6de08050613/Examples/UIExplorer/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L644">644</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC644">  {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L645">645</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC645">    title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Legacy local image<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L646">646</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC646">    description<span class="pl-k">:</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L647">647</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC647">      <span class="pl-s"><span class="pl-pds">&#39;</span>Images shipped with the native bundle, but not managed <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L648">648</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC648">      <span class="pl-s"><span class="pl-pds">&#39;</span>by the JS packager<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L649">649</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC649">    <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L650">650</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC650">      <span class="pl-k">return</span> (</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L651">651</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC651">        <span class="pl-k">&lt;</span>Image</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="9">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/frantic" aria-label="frantic" class="tooltipped tooltipped-e">
                      <img alt="@frantic" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/192222?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/cab88104a3629d34ce4d17adea6acac45d2974cd" class="message f6 text-gray-dark" data-pjax="true" title="Cleanup before image! codemod

Reviewed By: fkgozali

Differential Revision: D4196297

fbshipit-source-id: 5c32646dfe858f34c185a917e7d081a60777f242">Cleanup before image! codemod</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="9"><time-ago datetime="2016-11-23T05:01:34Z">Nov 23, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/3aa25f79172159e3079568d0131623054916fb59/Examples/UIExplorer/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L652">652</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC652">          source<span class="pl-k">=</span>{{uri<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>legacy_image<span class="pl-pds">&#39;</span></span>, width<span class="pl-k">:</span> <span class="pl-c1">120</span>, height<span class="pl-k">:</span> <span class="pl-c1">120</span>}}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/janicduplessis" aria-label="janicduplessis" class="tooltipped tooltipped-e">
                      <img alt="@janicduplessis" class="avatar blame-commit-avatar" height="20" src="https://avatars2.githubusercontent.com/u/2677334?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/5903949ad64fc7eb71427c382d93c1535fceab03" class="message f6 text-gray-dark" data-pjax="true" title="Load local assets synchronously to prevent image flicker

Summary:
This uses `[UIImage imageNamed:]` to load local assets that are bundled using `require(&#39;../image/path.png&#39;)` and makes sure it is done synchronously on the main queue to prevent images from flickering. This improves user experience a lot when using large local images and prevents icon flickers to match the behaviour of most native apps.

This adds to methods to the ImageLoader protocol, one to tell if the image loader must be executed on the url cache queue and one to tell if the result of the image loader should be cached. I then use these to make the LocalImageLoader bypass the url cache queue and avoid caching images twice.

Note that this doesn&#39;t affect debug builds since images are loaded from the packager.

I&#39;m not sure if we want to still support async loading of local images as I&#39;m not sure how much of a perf difference this will make. Maybe someone at fb can benchmark this see how it affects your apps but there wasn&#39;t a noticeable one in mine. Also I only enabled this for loading png and jpg im
Closes https://github.com/facebook/react-native/pull/8102

Reviewed By: bnham

Differential Revision: D3433647

Pulled By: javache

fbshipit-source-id: 37bd6aff20c0465c163db3cdbcaeaedff55f7b1f">Load local assets synchronously to prevent image flicker</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-07-21T14:45:54Z">Jul 21, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/7e5de707be0d0bdfe90f908b1fc7d6de08050613/Examples/UIExplorer/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L653">653</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC653">        <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L654">654</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC654">      );</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L655">655</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC655">    },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L656">656</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC656">  },</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/javache" aria-label="javache" class="tooltipped tooltipped-e">
                      <img alt="@javache" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/5676?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/46b54fd7a80d6c8f422c7d2125733c18a20c7d7d" class="message f6 text-gray-dark" data-pjax="true" title="Support bundle argument for image loading

Reviewed By: mmmulani

Differential Revision: D3768798

fbshipit-source-id: 5b35f06957cebfe74aca90fe6a456f7f739509a9">Support bundle argument for image loading</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-09-01T00:30:50Z">Sep 1, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/74308209f90a9ed98f4d9b4858ef0dab3e9f750b/Examples/UIExplorer/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L657">657</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC657">  {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L658">658</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC658">    title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Bundled images<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L659">659</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC659">    description<span class="pl-k">:</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L660">660</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC660">      <span class="pl-s"><span class="pl-pds">&#39;</span>Images shipped in a separate native bundle<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L661">661</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC661">    <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L662">662</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC662">      <span class="pl-k">return</span> (</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L663">663</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC663">        <span class="pl-k">&lt;</span>View style<span class="pl-k">=</span>{{flexDirection<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>row<span class="pl-pds">&#39;</span></span>}}<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L664">664</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC664">          <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L665">665</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC665">            source<span class="pl-k">=</span>{{</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="9">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/mehcode" aria-label="mehcode" class="tooltipped tooltipped-e">
                      <img alt="@mehcode" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/753919?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/9b882a3b44a9b35210de53cccc8e61c8fbfca566" class="message f6 text-gray-dark" data-pjax="true" title="Use uri instead of url in source property of Image

Summary:
https://github.com/facebook/react-native/issues/13478#issuecomment-294002694

Fix incorrect usage of `url` in the `source` property of `&lt;Image /&gt;` in the example.
Closes https://github.com/facebook/react-native/pull/13496

Differential Revision: D4893299

Pulled By: hramos

fbshipit-source-id: 134f9100d16997627b14c145256818e05017bbe3">Use uri instead of url in source property of Image</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="9"><time-ago datetime="2017-04-19T09:53:15Z">Apr 19, 2017</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/3e866e0380058b200bdb838d59bff2f602732780/Examples/UIExplorer/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L666">666</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC666">              uri<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ImageInBundle<span class="pl-pds">&#39;</span></span>,</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="8">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ericvicenti" aria-label="ericvicenti" class="tooltipped tooltipped-e">
                      <img alt="@ericvicenti" class="avatar blame-commit-avatar" height="20" src="https://avatars2.githubusercontent.com/u/1483597?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/4a80dceac7e35b669301c7aa8180dcd0348f4e93" class="message f6 text-gray-dark" data-pjax="true" title="Re-license and rename UIExplorer integration test app as RNTester

Reviewed By: yungsters

Differential Revision: D4950085

fbshipit-source-id: 44574b5d0ef0d2ad5dfc714309b18dc69cbad9ff">Re-license and rename UIExplorer integration test app as RNTester</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="8"><time-ago datetime="2017-05-06T03:50:47Z">May 6, 2017</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/82c4b9f0b756ad05416d800668c5dd3e08358d5e/Examples/UIExplorer/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L667">667</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC667">              bundle<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>RNTesterBundle<span class="pl-pds">&#39;</span></span>,</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/javache" aria-label="javache" class="tooltipped tooltipped-e">
                      <img alt="@javache" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/5676?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/46b54fd7a80d6c8f422c7d2125733c18a20c7d7d" class="message f6 text-gray-dark" data-pjax="true" title="Support bundle argument for image loading

Reviewed By: mmmulani

Differential Revision: D3768798

fbshipit-source-id: 5b35f06957cebfe74aca90fe6a456f7f739509a9">Support bundle argument for image loading</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-09-01T00:30:50Z">Sep 1, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/74308209f90a9ed98f4d9b4858ef0dab3e9f750b/Examples/UIExplorer/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L668">668</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC668">              width<span class="pl-k">:</span> <span class="pl-c1">100</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L669">669</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC669">              height<span class="pl-k">:</span> <span class="pl-c1">100</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L670">670</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC670">            }}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L671">671</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC671">            style<span class="pl-k">=</span>{{borderColor<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>yellow<span class="pl-pds">&#39;</span></span>, borderWidth<span class="pl-k">:</span> <span class="pl-c1">4</span>}}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L672">672</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC672">          <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L673">673</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC673">          <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L674">674</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC674">            source<span class="pl-k">=</span>{{</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="9">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/mehcode" aria-label="mehcode" class="tooltipped tooltipped-e">
                      <img alt="@mehcode" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/753919?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/9b882a3b44a9b35210de53cccc8e61c8fbfca566" class="message f6 text-gray-dark" data-pjax="true" title="Use uri instead of url in source property of Image

Summary:
https://github.com/facebook/react-native/issues/13478#issuecomment-294002694

Fix incorrect usage of `url` in the `source` property of `&lt;Image /&gt;` in the example.
Closes https://github.com/facebook/react-native/pull/13496

Differential Revision: D4893299

Pulled By: hramos

fbshipit-source-id: 134f9100d16997627b14c145256818e05017bbe3">Use uri instead of url in source property of Image</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="9"><time-ago datetime="2017-04-19T09:53:15Z">Apr 19, 2017</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/3e866e0380058b200bdb838d59bff2f602732780/Examples/UIExplorer/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L675">675</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC675">              uri<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ImageInAssetCatalog<span class="pl-pds">&#39;</span></span>,</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="8">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ericvicenti" aria-label="ericvicenti" class="tooltipped tooltipped-e">
                      <img alt="@ericvicenti" class="avatar blame-commit-avatar" height="20" src="https://avatars2.githubusercontent.com/u/1483597?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/4a80dceac7e35b669301c7aa8180dcd0348f4e93" class="message f6 text-gray-dark" data-pjax="true" title="Re-license and rename UIExplorer integration test app as RNTester

Reviewed By: yungsters

Differential Revision: D4950085

fbshipit-source-id: 44574b5d0ef0d2ad5dfc714309b18dc69cbad9ff">Re-license and rename UIExplorer integration test app as RNTester</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="8"><time-ago datetime="2017-05-06T03:50:47Z">May 6, 2017</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/82c4b9f0b756ad05416d800668c5dd3e08358d5e/Examples/UIExplorer/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L676">676</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC676">              bundle<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>RNTesterBundle<span class="pl-pds">&#39;</span></span>,</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/javache" aria-label="javache" class="tooltipped tooltipped-e">
                      <img alt="@javache" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/5676?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/46b54fd7a80d6c8f422c7d2125733c18a20c7d7d" class="message f6 text-gray-dark" data-pjax="true" title="Support bundle argument for image loading

Reviewed By: mmmulani

Differential Revision: D3768798

fbshipit-source-id: 5b35f06957cebfe74aca90fe6a456f7f739509a9">Support bundle argument for image loading</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-09-01T00:30:50Z">Sep 1, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/74308209f90a9ed98f4d9b4858ef0dab3e9f750b/Examples/UIExplorer/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L677">677</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC677">              width<span class="pl-k">:</span> <span class="pl-c1">100</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L678">678</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC678">              height<span class="pl-k">:</span> <span class="pl-c1">100</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L679">679</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC679">            }}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L680">680</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC680">            style<span class="pl-k">=</span>{{marginLeft<span class="pl-k">:</span> <span class="pl-c1">10</span>, borderColor<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>blue<span class="pl-pds">&#39;</span></span>, borderWidth<span class="pl-k">:</span> <span class="pl-c1">4</span>}}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L681">681</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC681">          <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L682">682</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC682">        <span class="pl-k">&lt;</span><span class="pl-k">/</span>View<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L683">683</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC683">      );</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L684">684</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC684">    },</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/andreicoman11" aria-label="andreicoman11" class="tooltipped tooltipped-e">
                      <img alt="@andreicoman11" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/6615092?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/17405b97746bf8279cae1ddecc612a355fce1fad" class="message f6 text-gray-dark" data-pjax="true" title="Fix image example

Summary: Bundled images is ios only, legacy image was not present in android resources.

Reviewed By: javache

Differential Revision: D3930349

fbshipit-source-id: 663019351615b173621ef27dbf67ec595f8a590f">Fix image example</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-09-29T14:23:36Z">Sep 29, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/05de4dbb94a4f09fd9a23a423e8328038d7b9c01/Examples/UIExplorer/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L685">685</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC685">    platform<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ios<span class="pl-pds">&#39;</span></span>,</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/javache" aria-label="javache" class="tooltipped tooltipped-e">
                      <img alt="@javache" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/5676?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/46b54fd7a80d6c8f422c7d2125733c18a20c7d7d" class="message f6 text-gray-dark" data-pjax="true" title="Support bundle argument for image loading

Reviewed By: mmmulani

Differential Revision: D3768798

fbshipit-source-id: 5b35f06957cebfe74aca90fe6a456f7f739509a9">Support bundle argument for image loading</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-09-01T00:30:50Z">Sep 1, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/74308209f90a9ed98f4d9b4858ef0dab3e9f750b/Examples/UIExplorer/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L686">686</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC686">  },</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="9">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    
                      <img alt="" class="avatar blame-commit-avatar" data-canonical-src="https://0.gravatar.com/avatar/9300d616c57f171a417ea3f2fa81538b?d=https%3A%2F%2Fassets-cdn.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;r=g&amp;s=140" height="20" src="https://camo.githubusercontent.com/c1545410e38096034eb61465a61f7f76068932c3/68747470733a2f2f302e67726176617461722e636f6d2f6176617461722f39333030643631366335376631373161343137656133663266613831353338623f643d68747470732533412532462532466173736574732d63646e2e6769746875622e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d6726733d313430" width="20" />
                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/0b348095b687d0d6f5268ecac6dffedfcc268110" class="message f6 text-gray-dark" data-pjax="true" title="blurRadius for Image

Summary:
This adds blurRadius support for &lt;Image&gt;, similar to iOS.
The heavy-lifting was done by lambdapioneer in the stack of diffs ending with
D3924013, we&#39;re just patching this in.
Two notes: we might need to apply two postprocessors going forward, will tackle
that in a separate diff, so we can ship this asap.
However, we need a new version of fresco to be released in order
to ship this.

Reviewed By: lexs

Differential Revision: D3936438

fbshipit-source-id: 353bf1f1120ebd5f4f8266c5a20188b41478a741">blurRadius for Image</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="9"><time-ago datetime="2017-03-02T15:32:08Z">Mar 2, 2017</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/94901b1e1d0a3e54b40d766ad148a5570db2020b/Examples/UIExplorer/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L687">687</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC687">  {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L688">688</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC688">    title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Blur Radius<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L689">689</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC689">    <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L690">690</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC690">      <span class="pl-k">return</span> (</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L691">691</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC691">        <span class="pl-k">&lt;</span>View style<span class="pl-k">=</span>{<span class="pl-smi">styles</span>.<span class="pl-smi">horizontal</span>}<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L692">692</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC692">          <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L693">693</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC693">            style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">base</span>,]}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L694">694</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC694">            source<span class="pl-k">=</span>{fullImage}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L695">695</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC695">            blurRadius<span class="pl-k">=</span>{<span class="pl-c1">0</span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L696">696</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC696">          <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L697">697</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC697">          <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L698">698</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC698">            style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">base</span>, <span class="pl-smi">styles</span>.<span class="pl-smi">leftMargin</span>]}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L699">699</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC699">            source<span class="pl-k">=</span>{fullImage}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L700">700</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC700">            blurRadius<span class="pl-k">=</span>{<span class="pl-c1">5</span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L701">701</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC701">          <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L702">702</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC702">          <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L703">703</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC703">            style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">base</span>, <span class="pl-smi">styles</span>.<span class="pl-smi">leftMargin</span>]}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L704">704</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC704">            source<span class="pl-k">=</span>{fullImage}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L705">705</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC705">            blurRadius<span class="pl-k">=</span>{<span class="pl-c1">10</span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L706">706</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC706">          <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L707">707</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC707">          <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L708">708</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC708">            style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">base</span>, <span class="pl-smi">styles</span>.<span class="pl-smi">leftMargin</span>]}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L709">709</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC709">            source<span class="pl-k">=</span>{fullImage}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L710">710</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC710">            blurRadius<span class="pl-k">=</span>{<span class="pl-c1">15</span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L711">711</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC711">          <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L712">712</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC712">          <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L713">713</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC713">            style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">base</span>, <span class="pl-smi">styles</span>.<span class="pl-smi">leftMargin</span>]}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L714">714</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC714">            source<span class="pl-k">=</span>{fullImage}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L715">715</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC715">            blurRadius<span class="pl-k">=</span>{<span class="pl-c1">20</span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L716">716</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC716">          <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L717">717</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC717">          <span class="pl-k">&lt;</span>Image</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L718">718</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC718">            style<span class="pl-k">=</span>{[<span class="pl-smi">styles</span>.<span class="pl-smi">base</span>, <span class="pl-smi">styles</span>.<span class="pl-smi">leftMargin</span>]}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L719">719</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC719">            source<span class="pl-k">=</span>{fullImage}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L720">720</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC720">            blurRadius<span class="pl-k">=</span>{<span class="pl-c1">25</span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L721">721</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC721">          <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L722">722</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC722">        <span class="pl-k">&lt;</span><span class="pl-k">/</span>View<span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L723">723</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC723">      );</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L724">724</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC724">    },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L725">725</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC725">  },</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sahrens" aria-label="sahrens" class="tooltipped tooltipped-e">
                      <img alt="@sahrens" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/1509831?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="message f6 text-gray-dark" data-pjax="true" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-02-20T04:10:52Z">Feb 20, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L726">726</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC726">];</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L727">727</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC727"></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="5">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/gusgard" aria-label="gusgard" class="tooltipped tooltipped-e">
                      <img alt="@gusgard" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/2577356?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/8547b7e11163d545b7b99d4bdd063ef71129d62c" class="message f6 text-gray-dark" data-pjax="true" title="Correct logo URL

Summary:
Added static files to remove dependency with `react` website, related PR https://github.com/facebook/react-native/pull/16204

After is merged to master, check if all the URLs are working correctly.

TheSavior
Closes https://github.com/facebook/react-native/pull/16207

Differential Revision: D6509133

Pulled By: hramos

fbshipit-source-id: a31dcc07742211dc17046e7e98d805c2282f2a82">Correct logo URL</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="5"><time-ago datetime="2017-12-07T16:28:35Z">Dec 7, 2017</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/76a2ca4c9c09c9bdf922154c28040138a44ae672/RNTester/js/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L728">728</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC728"><span class="pl-k">var</span> fullImage <span class="pl-k">=</span> {uri<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>https://facebook.github.io/react-native/img/opengraph.png<span class="pl-pds">&#39;</span></span>};</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L729">729</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC729"><span class="pl-k">var</span> smallImage <span class="pl-k">=</span> {uri<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>https://facebook.github.io/react-native/img/favicon.png<span class="pl-pds">&#39;</span></span>};</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sahrens" aria-label="sahrens" class="tooltipped tooltipped-e">
                      <img alt="@sahrens" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/1509831?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="message f6 text-gray-dark" data-pjax="true" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-02-20T04:10:52Z">Feb 20, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L730">730</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC730"></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L731">731</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC731"><span class="pl-k">var</span> styles <span class="pl-k">=</span> <span class="pl-c1">StyleSheet</span>.<span class="pl-en">create</span>({</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L732">732</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC732">  base<span class="pl-k">:</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L733">733</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC733">    width<span class="pl-k">:</span> <span class="pl-c1">38</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L734">734</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC734">    height<span class="pl-k">:</span> <span class="pl-c1">38</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L735">735</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC735">  },</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ptmt" aria-label="ptmt" class="tooltipped tooltipped-e">
                      <img alt="@ptmt" class="avatar blame-commit-avatar" height="20" src="https://avatars0.githubusercontent.com/u/1004115?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/74f8055692893ddc8e756f1a262c0488a205d529" class="message f6 text-gray-dark" data-pjax="true" title="[Image] Add examples to UIExplorer, fix some bugs

Summary:
Add two simple examples.
![image](https://cloud.githubusercontent.com/assets/1004115/8674092/03052652-2a55-11e5-8531-8f01c7970af4.png)

Also:
- do not start the task at DownloadTaskWrapper (it starts from ImageDowloader if image isn&#39;t cached yet);
- fire `onLoadAbor`t event;
- send more readable `error.localizedDescription` with `onLoadError`;
- rename `onLoaded` to `onLoadEnd`
Closes https://github.com/facebook/react-native/pull/1987
Github Author: Dmitriy Loktev &lt;unknownliveid@hotmail.com&gt;">[Image] Add examples to UIExplorer, fix some bugs</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-14T20:56:55Z">Jul 14, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/d1a82c4af120c7c8562d8c4774c939bd59a4cd77/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L736">736</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC736">  progress<span class="pl-k">:</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L737">737</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC737">    flex<span class="pl-k">:</span> <span class="pl-c1">1</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L738">738</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC738">    alignItems<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>center<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L739">739</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC739">    flexDirection<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>row<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L740">740</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC740">    width<span class="pl-k">:</span> <span class="pl-c1">100</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L741">741</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC741">  },</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sahrens" aria-label="sahrens" class="tooltipped tooltipped-e">
                      <img alt="@sahrens" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/1509831?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="message f6 text-gray-dark" data-pjax="true" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-02-20T04:10:52Z">Feb 20, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L742">742</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC742">  leftMargin<span class="pl-k">:</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L743">743</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC743">    marginLeft<span class="pl-k">:</span> <span class="pl-c1">10</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L744">744</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC744">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L745">745</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC745">  background<span class="pl-k">:</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L746">746</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC746">    backgroundColor<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#222222<span class="pl-pds">&#39;</span></span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L747">747</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC747">  },</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/ide" aria-label="ide" class="tooltipped tooltipped-e">
                      <img alt="@ide" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/379606?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/d5943b0e47428fda78121a5b51c7a40a646af865" class="message f6 text-gray-dark" data-pjax="true" title="[Image] Add support for tintColor to remote images

Summary:
Remote images now support the `tintColor` prop.

Also picked nicer demo colors for the UIExplorer example.

Fixes #1867

Closes https://github.com/facebook/react-native/pull/1932
Github Author: James Ide &lt;ide@jameside.com&gt;">[Image] Add support for tintColor to remote images</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-13T17:30:34Z">Jul 13, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/90dd7a13f0a3997517f8c560bc53e213efc88049/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L748">748</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC748">  sectionText<span class="pl-k">:</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L749">749</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC749">    marginVertical<span class="pl-k">:</span> <span class="pl-c1">6</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L750">750</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC750">  },</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sahrens" aria-label="sahrens" class="tooltipped tooltipped-e">
                      <img alt="@sahrens" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/1509831?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="message f6 text-gray-dark" data-pjax="true" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-02-20T04:10:52Z">Feb 20, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L751">751</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC751">  nestedText<span class="pl-k">:</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L752">752</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC752">    marginLeft<span class="pl-k">:</span> <span class="pl-c1">12</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L753">753</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC753">    marginTop<span class="pl-k">:</span> <span class="pl-c1">20</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L754">754</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC754">    backgroundColor<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>transparent<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L755">755</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC755">    color<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>white<span class="pl-pds">&#39;</span></span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L756">756</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC756">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L757">757</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC757">  resizeMode<span class="pl-k">:</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L758">758</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC758">    width<span class="pl-k">:</span> <span class="pl-c1">90</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L759">759</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC759">    height<span class="pl-k">:</span> <span class="pl-c1">60</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L760">760</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC760">    borderWidth<span class="pl-k">:</span> <span class="pl-c1">0.5</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L761">761</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC761">    borderColor<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>black<span class="pl-pds">&#39;</span></span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L762">762</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC762">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L763">763</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC763">  resizeModeText<span class="pl-k">:</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L764">764</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC764">    fontSize<span class="pl-k">:</span> <span class="pl-c1">11</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L765">765</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC765">    marginBottom<span class="pl-k">:</span> <span class="pl-c1">3</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L766">766</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC766">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L767">767</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC767">  icon<span class="pl-k">:</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L768">768</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC768">    width<span class="pl-k">:</span> <span class="pl-c1">15</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L769">769</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC769">    height<span class="pl-k">:</span> <span class="pl-c1">15</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L770">770</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC770">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L771">771</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC771">  horizontal<span class="pl-k">:</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L772">772</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC772">    flexDirection<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>row<span class="pl-pds">&#39;</span></span>,</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/nicklockwood" aria-label="nicklockwood" class="tooltipped tooltipped-e">
                      <img alt="@nicklockwood" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/546885?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/e4110456abb29a5d53814e8626e8dcb6161089d2" class="message f6 text-gray-dark" data-pjax="true" title="Changed RCTImageLoader to always return a UIImage

Summary:
GIF images are currently loaded as a CAKeyframeAnimation, however returning this animation directly from RCTImageLoader was dangerous, as any code that expected a UIImage would crash.

This diff changes RCTGIFImageLoader to return a UIImage of the first frame, with the keyframe animation attached as an associated object. This way, code that is not expecting an animation will still work correctly.">Changed RCTImageLoader to always return a UIImage</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-09-04T11:35:44Z">Sep 4, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/3c4adeb2e730bb3e252d1611d9da2c777d63998f/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L773">773</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC773">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L774">774</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC774">  gif<span class="pl-k">:</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L775">775</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC775">    flex<span class="pl-k">:</span> <span class="pl-c1">1</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L776">776</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC776">    height<span class="pl-k">:</span> <span class="pl-c1">200</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L777">777</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC777">  },</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/nicklockwood" aria-label="nicklockwood" class="tooltipped tooltipped-e">
                      <img alt="@nicklockwood" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/546885?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/1076f4a172069b4d9e8f9d194f0f924341e354e2" class="message f6 text-gray-dark" data-pjax="true" title="Added RCTDataRequestHandler

Summary: public

Added RCTDataRequestHandler, which is responsible for loading data URLs. This moves the logic for data URL handling out of RCTImageDownloader (no longer needed) and into the RCTNetwork library, where it makes more sense.

This also means that it is now possible to load data URLs via XHR, and use them for purposes other than just images.

Reviewed By: javache

Differential Revision: D2540964

fb-gh-sync-id: 4f0418bd6b9186f047cc8297276bb970795af104">Added RCTDataRequestHandler</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-10-19T16:04:54Z">Oct 19, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/31f9a690f3b3524adf08aa9d8c01843e8524453e/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L778">778</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC778">  base64<span class="pl-k">:</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L779">779</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC779">    flex<span class="pl-k">:</span> <span class="pl-c1">1</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L780">780</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC780">    height<span class="pl-k">:</span> <span class="pl-c1">50</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L781">781</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC781">    resizeMode<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>contain<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L782">782</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC782">  },</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/andreicoman11" aria-label="andreicoman11" class="tooltipped tooltipped-e">
                      <img alt="@andreicoman11" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/6615092?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/617a38d9846fee81b3d94d1e9d06fd74ecb5abe1" class="message f6 text-gray-dark" data-pjax="true" title="Support multi sources for images

Summary:
This adds support for specifying multiple sources for an image component, so that native can choose the best one based on the flexbox-computed size of the image.
The API is as follows: the image component receives in the `source` prop an array of objects of the type `{uri, width, height}`. On the native side, the native component will wait for the layout pass to receive the width and height of the image, and then parse the array to find the best fitting one. For now, this does not support local resources, but it will be added soon.
To see how this works and play with it, there&#39;s an example called `MultipleSourcesExample` under `ImageExample` In UIExplorer.

Reviewed By: foghina

Differential Revision: D3364550

fbshipit-source-id: 66c5aeb2794f2ffeff8da39a9c0b95155fb2d41f">Support multi sources for images</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-13T21:04:19Z">Jun 13, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/9443bc5c3f7c294306c65176c132e4254c3f70b0/Examples/UIExplorer/ImageExample.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L783">783</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC783">  touchableText<span class="pl-k">:</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L784">784</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC784">    fontWeight<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>500<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L785">785</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC785">    color<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>blue<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L786">786</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC786">  },</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sahrens" aria-label="sahrens" class="tooltipped tooltipped-e">
                      <img alt="@sahrens" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/1509831?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/efae175a8e1b05c976cc5a1cbd492da71eb3bb12" class="message f6 text-gray-dark" data-pjax="true" title="[react-packager][streamline oss] Move open sourced JS source to react-native-github">[react-packager][streamline oss] Move open sourced JS source to react…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-02-20T04:10:52Z">Feb 20, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L787">787</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC787">});</div>
                </div>
            </div>
          </div>
      </div>
    </div>

  </div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between py-6 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2018 <span title="0.31708s from unicorn-3305610588-7tl1g">GitHub</span>, Inc.</li>
        <li class="mr-3"><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li class="mr-3"><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li class="mr-3"><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>

    <a href="https://github.com" aria-label="Homepage" class="footer-octicon" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li class="mr-3"><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li class="mr-3"><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/compat-bea37eecc124.js" type="application/javascript"></script>
    <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-8eabc368bf2e.js" type="application/javascript"></script>
    
    <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-ff31ff92f735.js" type="application/javascript"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>

  

  </body>
</html>

