





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
  
  <title>react-native/Libraries/Image/Image.ios.js at master · facebook/react-native · GitHub</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars0.githubusercontent.com/u/69631?s=400&amp;v=4" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="facebook/react-native" property="og:title" /><meta content="https://github.com/facebook/react-native" property="og:url" /><meta content="react-native - A framework for building native apps with React." property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="E9DA:5994:E6D13:1A605E:5A79FAF6" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="E9DA:5994:E6D13:1A605E:5A79FAF6" name="octolytics-dimension-request_id" /><meta content="iad" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" />
<meta content="https://github.com/hydro_browser_events" name="hydro-events-url" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/blame" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged Out">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="MDE4MDg2NGM5YjQyNmYyNGYzNDVjYTc0ZDM5OWIyNjM1MDRhZTQzNTZhYzY4NzdkMDkzYzI4NWZhMWU5MDkxNnx7InJlbW90ZV9hZGRyZXNzIjoiNDcuMTcuNjIuODAiLCJyZXF1ZXN0X2lkIjoiRTlEQTo1OTk0OkU2RDEzOjFBNjA1RTo1QTc5RkFGNiIsInRpbWVzdGFtcCI6MTUxNzk0MzU0MiwiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">

    <meta name="enabled-features" content="UNIVERSE_BANNER,FREE_TRIALS,MARKETPLACE_HERO_CARD_UPLOADER">

  <meta name="html-safe-nonce" content="123e26f6bbf674d65bf6f2003ea1eca01cfe1253">

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
        <a href="/facebook/react-native/blame/master/Libraries/Image/Image.ios.js" class="header-search-scope no-underline">This repository</a>
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
              <a class="text-bold text-white no-underline" href="/login?return_to=%2Ffacebook%2Freact-native%2Fblame%2Fmaster%2FLibraries%2FImage%2FImage.ios.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
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

  <a href="/facebook/react-native/blame/613afbab7f30748ba767b055f23d0d294562805f/Libraries/Image/Image.ios.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <div class="breadcrumb css-truncate blame-breadcrumb js-zeroclipboard-container">
    <span class="css-truncate-target js-zeroclipboard-target"><span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/facebook/react-native" data-pjax="true"><span>react-native</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/facebook/react-native/tree/master/Libraries" data-pjax="true"><span>Libraries</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/facebook/react-native/tree/master/Libraries/Image" data-pjax="true"><span>Image</span></a></span><span class="separator">/</span><strong class="final-path">Image.ios.js</strong></span>
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
          <a href="/facebook/react-native/raw/master/Libraries/Image/Image.ios.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
          <a href="/facebook/react-native/blob/master/Libraries/Image/Image.ios.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item">Normal view</a>
          <a href="/facebook/react-native/commits/master/Libraries/Image/Image.ios.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
        </div>
      </div>

  

      <div class="file-info">
        <svg aria-hidden="true" class="octicon octicon-file" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
        <span class="file-mode" title="File Mode">100644</span>
        <span class="file-info-divider"></span>
          269 lines (251 sloc)
          <span class="file-info-divider"></span>
        7.9 KB
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

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/vjeux" aria-label="vjeux" class="tooltipped tooltipped-e">
                      <img alt="@vjeux" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/197597?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/e1ef0328d9e8aa5437bb3b2b9602247d41fe9465" class="message f6 text-gray-dark" data-pjax="true" title="[ReactNative] Expanded license on js files">[ReactNative] Expanded license on js files</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-03-23T20:35:08Z">Mar 23, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/0cdf56cc4f198679d58d66f42def5781d9eaa7f7/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L2">2</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC2"><span class="pl-c"> * Copyright (c) 2015-present, Facebook, Inc.</span></div>
                </div>
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
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L8">8</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC8"><span class="pl-c"> *</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L9">9</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC9"><span class="pl-c"> * @providesModule Image</span></div>
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
                        <a href="/facebook/react-native/commit/030b264eb44de17c1d0b4673ba48eb512addc917" class="message f6 text-gray-dark" data-pjax="true" title="flowify a few more Libraries">flowify a few more Libraries</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-03-26T17:06:50Z">Mar 26, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/7e02a1e111d0371cf89d4434f92dfe1f000149fd/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L10">10</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC10"><span class="pl-c"> * @flow</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="4">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/shergin" aria-label="shergin" class="tooltipped tooltipped-e">
                      <img alt="@shergin" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/22032?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/a5af841d259b6b29d95a9fb346a0ffce9c6efbfe" class="message f6 text-gray-dark" data-pjax="true" title="Prettier for View, Image and co.

Summary: Trivial beauty.

Reviewed By: sahrens

Differential Revision: D6715955

fbshipit-source-id: 3632750591f53d4673a2ce76309a0cc62946524d">Prettier for View, Image and co.</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="4"><time-ago datetime="2018-01-15T03:32:26Z">Jan 15, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/bf9cabb03c7245930c270a19816545eae1b9007d/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L11">11</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC11"><span class="pl-c"> * @format</span></div>
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
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L12">12</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC12"><span class="pl-c"> <span class="pl-c">*/</span></span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L13">13</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC13"><span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L14">14</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC14"></div>
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
                        <a href="/facebook/react-native/commit/748a5078619340cf441594e66af727664823cc3d" class="message f6 text-gray-dark" data-pjax="true" title="Simplified Image.js

Summary:
Now that we no longer have a separate NetworkImageView implementation, we can remove that code path from Image.js

I&#39;ve also moved the prefetch method into RCTImageViewManager for consistency with the getImageSize method, which means we no longer need to export the RCTImageLoader module to js.

Reviewed By: javache

Differential Revision: D3398157

fbshipit-source-id: fbbcf90a61549831ad28bad0cb3b50c375aae32c">Simplified Image.js</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-07T12:29:13Z">Jun 7, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/592d5fb8f37fd9a250554cd1485bf477a262b19e/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L15">15</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC15"><span class="pl-k">const</span> <span class="pl-c1">EdgeInsetsPropType</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>EdgeInsetsPropType<span class="pl-pds">&#39;</span></span>);</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L16">16</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC16"><span class="pl-k">const</span> <span class="pl-c1">ImageResizeMode</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>ImageResizeMode<span class="pl-pds">&#39;</span></span>);</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L17">17</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC17"><span class="pl-k">const</span> <span class="pl-c1">ImageSourcePropType</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>ImageSourcePropType<span class="pl-pds">&#39;</span></span>);</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L18">18</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC18"><span class="pl-k">const</span> <span class="pl-c1">ImageStylePropTypes</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>ImageStylePropTypes<span class="pl-pds">&#39;</span></span>);</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/davidaurelio" aria-label="davidaurelio" class="tooltipped tooltipped-e">
                      <img alt="@davidaurelio" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/158859?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/3683beb88ab3233038ac32b9c33112d537478088" class="message f6 text-gray-dark" data-pjax="true" title="RN: Update React (2/2)

Reviewed By: kentaromiura

Differential Revision: D4026114

fbshipit-source-id: 67808af91454d95941fea01eef58a4d9086f46e1">RN: Update React (2/2)</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-11-04T12:40:26Z">Nov 4, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/b76ab8e3a199b2884b35c8425cfa69e350ef04cc/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L19">19</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC19"><span class="pl-k">const</span> <span class="pl-c1">NativeMethodsMixin</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>NativeMethodsMixin<span class="pl-pds">&#39;</span></span>);</div>
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
                        <a href="/facebook/react-native/commit/748a5078619340cf441594e66af727664823cc3d" class="message f6 text-gray-dark" data-pjax="true" title="Simplified Image.js

Summary:
Now that we no longer have a separate NetworkImageView implementation, we can remove that code path from Image.js

I&#39;ve also moved the prefetch method into RCTImageViewManager for consistency with the getImageSize method, which means we no longer need to export the RCTImageLoader module to js.

Reviewed By: javache

Differential Revision: D3398157

fbshipit-source-id: fbbcf90a61549831ad28bad0cb3b50c375aae32c">Simplified Image.js</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-07T12:29:13Z">Jun 7, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/592d5fb8f37fd9a250554cd1485bf477a262b19e/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L20">20</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC20"><span class="pl-k">const</span> <span class="pl-c1">NativeModules</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>NativeModules<span class="pl-pds">&#39;</span></span>);</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L21">21</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC21"><span class="pl-k">const</span> <span class="pl-c1">React</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>React<span class="pl-pds">&#39;</span></span>);</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="9">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/bvaughn" aria-label="bvaughn" class="tooltipped tooltipped-e">
                      <img alt="@bvaughn" class="avatar blame-commit-avatar" height="20" src="https://avatars0.githubusercontent.com/u/29597?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/6564edce5e828685099957741db935cda029ca23" class="message f6 text-gray-dark" data-pjax="true" title="Ran PropTypes -&gt; prop-types codemod against Libraries/FBReactKit/js/react-native-github

Reviewed By: acdlite

Differential Revision: D4876709

fbshipit-source-id: 3a5e92bfc74287b7a9054546c438580bed0147af">Ran PropTypes -&gt; prop-types codemod against Libraries/FBReactKit/js/r…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="9"><time-ago datetime="2017-04-12T23:09:48Z">Apr 12, 2017</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/8085ceca6acdf363c92d25c606689523e9f628e2/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L22">22</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC22"><span class="pl-k">const</span> <span class="pl-c1">PropTypes</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>prop-types<span class="pl-pds">&#39;</span></span>);</div>
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
                        <a href="/facebook/react-native/commit/748a5078619340cf441594e66af727664823cc3d" class="message f6 text-gray-dark" data-pjax="true" title="Simplified Image.js

Summary:
Now that we no longer have a separate NetworkImageView implementation, we can remove that code path from Image.js

I&#39;ve also moved the prefetch method into RCTImageViewManager for consistency with the getImageSize method, which means we no longer need to export the RCTImageLoader module to js.

Reviewed By: javache

Differential Revision: D3398157

fbshipit-source-id: fbbcf90a61549831ad28bad0cb3b50c375aae32c">Simplified Image.js</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-07T12:29:13Z">Jun 7, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/592d5fb8f37fd9a250554cd1485bf477a262b19e/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L23">23</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC23"><span class="pl-k">const</span> <span class="pl-c1">ReactNativeViewAttributes</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>ReactNativeViewAttributes<span class="pl-pds">&#39;</span></span>);</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L24">24</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC24"><span class="pl-k">const</span> <span class="pl-c1">StyleSheet</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>StyleSheet<span class="pl-pds">&#39;</span></span>);</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L25">25</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC25"><span class="pl-k">const</span> <span class="pl-c1">StyleSheetPropType</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>StyleSheetPropType<span class="pl-pds">&#39;</span></span>);</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L26">26</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC26"></div>
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
                <a href="/facebook/react-native/blame/20224b74a447f859428bd84e942ae6ca61dd92a6/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L27">27</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC27"><span class="pl-k">const</span> <span class="pl-c1">createReactClass</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>create-react-class<span class="pl-pds">&#39;</span></span>);</div>
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
                        <a href="/facebook/react-native/commit/748a5078619340cf441594e66af727664823cc3d" class="message f6 text-gray-dark" data-pjax="true" title="Simplified Image.js

Summary:
Now that we no longer have a separate NetworkImageView implementation, we can remove that code path from Image.js

I&#39;ve also moved the prefetch method into RCTImageViewManager for consistency with the getImageSize method, which means we no longer need to export the RCTImageLoader module to js.

Reviewed By: javache

Differential Revision: D3398157

fbshipit-source-id: fbbcf90a61549831ad28bad0cb3b50c375aae32c">Simplified Image.js</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-07T12:29:13Z">Jun 7, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/592d5fb8f37fd9a250554cd1485bf477a262b19e/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L28">28</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC28"><span class="pl-k">const</span> <span class="pl-c1">flattenStyle</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>flattenStyle<span class="pl-pds">&#39;</span></span>);</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L29">29</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC29"><span class="pl-k">const</span> <span class="pl-c1">requireNativeComponent</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>requireNativeComponent<span class="pl-pds">&#39;</span></span>);</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L30">30</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC30"><span class="pl-k">const</span> <span class="pl-c1">resolveAssetSource</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>resolveAssetSource<span class="pl-pds">&#39;</span></span>);</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L31">31</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC31"></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L32">32</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC32"><span class="pl-k">const</span> <span class="pl-c1">ImageViewManager</span> <span class="pl-k">=</span> <span class="pl-smi">NativeModules</span>.<span class="pl-smi">ImageViewManager</span>;</div>
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
                <a href="/facebook/react-native/blame/24b942faeb67ede5b042660f75720d5e6c6bd429/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L33">33</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC33"></div>
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
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L34">34</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC34"><span class="pl-c"><span class="pl-c">/**</span></span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sophiebits" aria-label="sophiebits" class="tooltipped tooltipped-e">
                      <img alt="@sophiebits" class="avatar blame-commit-avatar" height="20" src="https://avatars2.githubusercontent.com/u/6820?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/dd56ccb9c732511fb380d28dd2a5c17119467c72" class="message f6 text-gray-dark" data-pjax="true" title="[react-native] Fix capitalization of &quot;REact&quot;">[react-native] Fix capitalization of "REact"</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-04-27T20:55:01Z">Apr 27, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/3f723f451d2eccd73d1306813c9d40d4b9e683a6/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L35">35</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC35"><span class="pl-c"> * A React component for displaying different types of images,</span></div>
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
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L36">36</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC36"><span class="pl-c"> * including network images, static resources, temporary local images, and</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/vjeux" aria-label="vjeux" class="tooltipped tooltipped-e">
                      <img alt="@vjeux" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/197597?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/d8e83c882e26844a2eff8fd1ed2243ddc96ddb92" class="message f6 text-gray-dark" data-pjax="true" title="[ReactNative] Move around and reformat comments for the documentation">[ReactNative] Move around and reformat comments for the documentation</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-03-09T16:28:51Z">Mar 9, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/705a8e0144775ff695f26a1f6b41d0baa6bed683/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L37">37</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC37"><span class="pl-c"> * images from local disk, such as the camera roll.</span></div>
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
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L38">38</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC38"><span class="pl-c"> *</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="2">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/hramos" aria-label="hramos" class="tooltipped tooltipped-e">
                      <img alt="@hramos" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/165856?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/28d60b68ad7bc5b7ebda6b720981feacd3bde337" class="message f6 text-gray-dark" data-pjax="true" title="Trim docs that are already present in the open source docs site

Summary:
A lot of these docs are already present in https://github.com/facebook/react-native-website.
Closes https://github.com/facebook/react-native/pull/17776

Differential Revision: D6839783

Pulled By: hramos

fbshipit-source-id: 945fde22afb8f181d0463617d224d3f3429faa24">Trim docs that are already present in the open source docs site</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="2"><time-ago datetime="2018-01-30T00:10:49Z">Jan 30, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/31288161e188723456fdb336c494f3c8a3f5b0a8/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L39">39</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC39"><span class="pl-c"> * See https://facebook.github.io/react-native/docs/image.html</span></div>
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
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L40">40</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC40"><span class="pl-c"> <span class="pl-c">*/</span></span></div>
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
                <a href="/facebook/react-native/blame/20224b74a447f859428bd84e942ae6ca61dd92a6/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L41">41</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC41"><span class="pl-k">const</span> <span class="pl-c1">Image</span> <span class="pl-k">=</span> <span class="pl-en">createReactClass</span>({</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L42">42</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC42">  displayName<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Image<span class="pl-pds">&#39;</span></span>,</div>
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
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L43">43</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC43">  propTypes<span class="pl-k">:</span> {</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/JoelMarcey" aria-label="JoelMarcey" class="tooltipped tooltipped-e">
                      <img alt="@JoelMarcey" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/3757713?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/db7b44ec8ebb9a72f13a8397dd35007e24f4e903" class="message f6 text-gray-dark" data-pjax="true" title="Update Image API

Summary:
- Provide runnable examples
- Add more details to properties and jsdoc-ify the methods

Ref #8203
Closes https://github.com/facebook/react-native/pull/8413

Differential Revision: D3482168

Pulled By: caabernathy

fbshipit-source-id: 04fce5133317af282cced5850a53858e3f5b72f2">Update Image API</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-24T17:39:06Z">Jun 24, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/f66acad30b00e89a81c19812300ca1c4bae895a1/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L44">44</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC44">    <span class="pl-c"><span class="pl-c">/**</span></span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="2">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/hramos" aria-label="hramos" class="tooltipped tooltipped-e">
                      <img alt="@hramos" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/165856?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/28d60b68ad7bc5b7ebda6b720981feacd3bde337" class="message f6 text-gray-dark" data-pjax="true" title="Trim docs that are already present in the open source docs site

Summary:
A lot of these docs are already present in https://github.com/facebook/react-native-website.
Closes https://github.com/facebook/react-native/pull/17776

Differential Revision: D6839783

Pulled By: hramos

fbshipit-source-id: 945fde22afb8f181d0463617d224d3f3429faa24">Trim docs that are already present in the open source docs site</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="2"><time-ago datetime="2018-01-30T00:10:49Z">Jan 30, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/31288161e188723456fdb336c494f3c8a3f5b0a8/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L45">45</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC45"><span class="pl-c">     * See https://facebook.github.io/react-native/docs/image.html#style</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/JoelMarcey" aria-label="JoelMarcey" class="tooltipped tooltipped-e">
                      <img alt="@JoelMarcey" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/3757713?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/db7b44ec8ebb9a72f13a8397dd35007e24f4e903" class="message f6 text-gray-dark" data-pjax="true" title="Update Image API

Summary:
- Provide runnable examples
- Add more details to properties and jsdoc-ify the methods

Ref #8203
Closes https://github.com/facebook/react-native/pull/8413

Differential Revision: D3482168

Pulled By: caabernathy

fbshipit-source-id: 04fce5133317af282cced5850a53858e3f5b72f2">Update Image API</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-24T17:39:06Z">Jun 24, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/f66acad30b00e89a81c19812300ca1c4bae895a1/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L46">46</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC46"><span class="pl-c">     <span class="pl-c">*/</span></span></div>
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
                <a href="/facebook/react-native/blame/82a774e92bf19b9a135004cca53b6e1e98dde052/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L47">47</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC47">    style<span class="pl-k">:</span> <span class="pl-en">StyleSheetPropType</span>(ImageStylePropTypes),</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/vjeux" aria-label="vjeux" class="tooltipped tooltipped-e">
                      <img alt="@vjeux" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/197597?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/dee36b8e0732464df9836c5fc52d93d09463ff9d" class="message f6 text-gray-dark" data-pjax="true" title="[ReactNative] Improve &lt;Image&gt; docs">[ReactNative] Improve &lt;Image&gt; docs</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-04-01T17:56:21Z">Apr 1, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/4838d5921f887d7d5b48e32598d309d8c7b66bf6/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L48">48</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC48">    <span class="pl-c"><span class="pl-c">/**</span></span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/rigdern" aria-label="rigdern" class="tooltipped tooltipped-e">
                      <img alt="@rigdern" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/199935?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/ee8496f364070f1b3629b94b347a0e11b2895dec" class="message f6 text-gray-dark" data-pjax="true" title="iOS: Support HTTP headers for source prop on &lt;Image&gt; components

Summary:
Allows developers to specify headers to include in the HTTP request
when fetching a remote image. For example, one might leverage this
when fetching an image from an endpoint that requires authentication:

```
&lt;Image
  style={styles.logo}
  source={{
    uri: &#39;http://facebook.github.io/react/img/logo_og.png&#39;,
    headers: {
      Authorization: &#39;someAuthToken&#39;
    }
  }}
/&gt;
```

Note that the header values must be strings.

Works on iOS and Android.

**Test plan (required)**

- Ran a small example like the one above on iOS and Android and ensured the headers were sent to the server.
- Ran a small example to ensure that \&lt;Image\&gt; components without headers still work.
- Currently using this code in our app.

Adam Comella
Microsoft Corp.
Closes https://github.com/facebook/react-native/pull/7338

Reviewed By: javache

Differential Revision: D3371458

Pulled By: nicklockwood

fbshipit-source-id: cdb24fe2572c3ae3ba82c86ad383af6d85157e20">iOS: Support HTTP headers for source prop on &lt;Image&gt; components</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-01T17:32:20Z">Jun 1, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/cec913e7ce05d26181ab4d46e2e41d72acdfb87d/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L49">49</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC49"><span class="pl-c">     * The image source (either a remote URL or a local file resource).</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    
                      <img alt="" class="avatar blame-commit-avatar" data-canonical-src="https://0.gravatar.com/avatar/1dd06f1ccc71b3351bfc41da65bc63ff?d=https%3A%2F%2Fassets-cdn.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;r=g&amp;s=140" height="20" src="https://camo.githubusercontent.com/c32b0f41270deddbd1a4ae53ff3a91d3adcd4954/68747470733a2f2f302e67726176617461722e636f6d2f6176617461722f31646430366631636363373162333335316266633431646136356263363366663f643d68747470732533412532462532466173736574732d63646e2e6769746875622e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d6726733d313430" width="20" />
                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/fd48bc3cff29797f5f2f251ad00c1ba3caf5ea4d" class="message f6 text-gray-dark" data-pjax="true" title="Implement multi-source Images on iOS

Summary: Mirrors Android&#39;s support for multiple sources for Image, allowing us to fetch new images as the size of the view changes.

Reviewed By: mmmulani

Differential Revision: D3615134

fbshipit-source-id: 3d0bf2b75f63a4379e0e49f2dab9aea351b31d5f">Implement multi-source Images on iOS</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-07-28T20:58:50Z">Jul 28, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/7e2e0deeb05a1a290bf24322bb9aef0acb1481a3/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L50">50</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC50"><span class="pl-c">     *</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="2">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/hramos" aria-label="hramos" class="tooltipped tooltipped-e">
                      <img alt="@hramos" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/165856?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/28d60b68ad7bc5b7ebda6b720981feacd3bde337" class="message f6 text-gray-dark" data-pjax="true" title="Trim docs that are already present in the open source docs site

Summary:
A lot of these docs are already present in https://github.com/facebook/react-native-website.
Closes https://github.com/facebook/react-native/pull/17776

Differential Revision: D6839783

Pulled By: hramos

fbshipit-source-id: 945fde22afb8f181d0463617d224d3f3429faa24">Trim docs that are already present in the open source docs site</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="2"><time-ago datetime="2018-01-30T00:10:49Z">Jan 30, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/31288161e188723456fdb336c494f3c8a3f5b0a8/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L51">51</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC51"><span class="pl-c">     * See https://facebook.github.io/react-native/docs/image.html#source</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/vjeux" aria-label="vjeux" class="tooltipped tooltipped-e">
                      <img alt="@vjeux" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/197597?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/dee36b8e0732464df9836c5fc52d93d09463ff9d" class="message f6 text-gray-dark" data-pjax="true" title="[ReactNative] Improve &lt;Image&gt; docs">[ReactNative] Improve &lt;Image&gt; docs</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-04-01T17:56:21Z">Apr 1, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/4838d5921f887d7d5b48e32598d309d8c7b66bf6/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L52">52</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC52"><span class="pl-c">     <span class="pl-c">*/</span></span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/rigdern" aria-label="rigdern" class="tooltipped tooltipped-e">
                      <img alt="@rigdern" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/199935?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/ee8496f364070f1b3629b94b347a0e11b2895dec" class="message f6 text-gray-dark" data-pjax="true" title="iOS: Support HTTP headers for source prop on &lt;Image&gt; components

Summary:
Allows developers to specify headers to include in the HTTP request
when fetching a remote image. For example, one might leverage this
when fetching an image from an endpoint that requires authentication:

```
&lt;Image
  style={styles.logo}
  source={{
    uri: &#39;http://facebook.github.io/react/img/logo_og.png&#39;,
    headers: {
      Authorization: &#39;someAuthToken&#39;
    }
  }}
/&gt;
```

Note that the header values must be strings.

Works on iOS and Android.

**Test plan (required)**

- Ran a small example like the one above on iOS and Android and ensured the headers were sent to the server.
- Ran a small example to ensure that \&lt;Image\&gt; components without headers still work.
- Currently using this code in our app.

Adam Comella
Microsoft Corp.
Closes https://github.com/facebook/react-native/pull/7338

Reviewed By: javache

Differential Revision: D3371458

Pulled By: nicklockwood

fbshipit-source-id: cdb24fe2572c3ae3ba82c86ad383af6d85157e20">iOS: Support HTTP headers for source prop on &lt;Image&gt; components</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-01T17:32:20Z">Jun 1, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/cec913e7ce05d26181ab4d46e2e41d72acdfb87d/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L53">53</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC53">    source<span class="pl-k">:</span> ImageSourcePropType,</div>
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
                        <a href="/facebook/react-native/commit/915151c5d75aea054cf0a16335abd5c84ddd19cf" class="message f6 text-gray-dark" data-pjax="true" title="[ReactNative] verifyPropTypes against native exports">[ReactNative] verifyPropTypes against native exports</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-04-17T01:17:19Z">Apr 17, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/764854c04aae6418ba1a771c0412624407e42978/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L54">54</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC54">    <span class="pl-c"><span class="pl-c">/**</span></span></div>
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
                        <a href="/facebook/react-native/commit/b67229485834113674b25bda193a7426bf44cfc8" class="message f6 text-gray-dark" data-pjax="true" title="Added RCTImageSource

Summary:
public

The +[RCTConvert UIImage:] function, while convenient, is inherently limited by being synchronous, which means that it cannot be used to load remote images, and may not be efficient for local images either. It&#39;s also unable to access the bridge, which means that it cannot take advantage of the modular image-loading pipeline.

This diff introduces a new RCTImageSource class which can be used to pass image source objects over the bridge and defer loading until later.

I&#39;ve also added automatic application of the `resolveAssetSource()` function based on prop type, and fixed up the image logic in NavigatorIOS and TabBarIOS.

Reviewed By: javache

Differential Revision: D2631541

fb-gh-sync-id: 6604635e8bb5394425102487f1ee7cd729321877">Added RCTImageSource</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-12-08T11:29:08Z">Dec 8, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/dcebe8cd374d149dd9d870f77967554b0d1f3802/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L55">55</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC55"><span class="pl-c">     * A static image to display while loading the image source.</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/JoelMarcey" aria-label="JoelMarcey" class="tooltipped tooltipped-e">
                      <img alt="@JoelMarcey" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/3757713?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/db7b44ec8ebb9a72f13a8397dd35007e24f4e903" class="message f6 text-gray-dark" data-pjax="true" title="Update Image API

Summary:
- Provide runnable examples
- Add more details to properties and jsdoc-ify the methods

Ref #8203
Closes https://github.com/facebook/react-native/pull/8413

Differential Revision: D3482168

Pulled By: caabernathy

fbshipit-source-id: 04fce5133317af282cced5850a53858e3f5b72f2">Update Image API</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-24T17:39:06Z">Jun 24, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/f66acad30b00e89a81c19812300ca1c4bae895a1/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L56">56</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC56"><span class="pl-c">     *</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="2">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/hramos" aria-label="hramos" class="tooltipped tooltipped-e">
                      <img alt="@hramos" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/165856?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/28d60b68ad7bc5b7ebda6b720981feacd3bde337" class="message f6 text-gray-dark" data-pjax="true" title="Trim docs that are already present in the open source docs site

Summary:
A lot of these docs are already present in https://github.com/facebook/react-native-website.
Closes https://github.com/facebook/react-native/pull/17776

Differential Revision: D6839783

Pulled By: hramos

fbshipit-source-id: 945fde22afb8f181d0463617d224d3f3429faa24">Trim docs that are already present in the open source docs site</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="2"><time-ago datetime="2018-01-30T00:10:49Z">Jan 30, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/31288161e188723456fdb336c494f3c8a3f5b0a8/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L57">57</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC57"><span class="pl-c">     * See https://facebook.github.io/react-native/docs/image.html#defaultsource</span></div>
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
                        <a href="/facebook/react-native/commit/915151c5d75aea054cf0a16335abd5c84ddd19cf" class="message f6 text-gray-dark" data-pjax="true" title="[ReactNative] verifyPropTypes against native exports">[ReactNative] verifyPropTypes against native exports</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-04-17T01:17:19Z">Apr 17, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/764854c04aae6418ba1a771c0412624407e42978/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L58">58</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC58"><span class="pl-c">     <span class="pl-c">*/</span></span></div>
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
                        <a href="/facebook/react-native/commit/b67229485834113674b25bda193a7426bf44cfc8" class="message f6 text-gray-dark" data-pjax="true" title="Added RCTImageSource

Summary:
public

The +[RCTConvert UIImage:] function, while convenient, is inherently limited by being synchronous, which means that it cannot be used to load remote images, and may not be efficient for local images either. It&#39;s also unable to access the bridge, which means that it cannot take advantage of the modular image-loading pipeline.

This diff introduces a new RCTImageSource class which can be used to pass image source objects over the bridge and defer loading until later.

I&#39;ve also added automatic application of the `resolveAssetSource()` function based on prop type, and fixed up the image logic in NavigatorIOS and TabBarIOS.

Reviewed By: javache

Differential Revision: D2631541

fb-gh-sync-id: 6604635e8bb5394425102487f1ee7cd729321877">Added RCTImageSource</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-12-08T11:29:08Z">Dec 8, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/dcebe8cd374d149dd9d870f77967554b0d1f3802/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L59">59</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC59">    defaultSource<span class="pl-k">:</span> <span class="pl-smi">PropTypes</span>.<span class="pl-en">oneOfType</span>([</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L60">60</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC60">      <span class="pl-smi">PropTypes</span>.<span class="pl-c1">shape</span>({</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L61">61</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC61">        uri<span class="pl-k">:</span> <span class="pl-smi">PropTypes</span>.<span class="pl-smi">string</span>,</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/rigdern" aria-label="rigdern" class="tooltipped tooltipped-e">
                      <img alt="@rigdern" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/199935?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/ee8496f364070f1b3629b94b347a0e11b2895dec" class="message f6 text-gray-dark" data-pjax="true" title="iOS: Support HTTP headers for source prop on &lt;Image&gt; components

Summary:
Allows developers to specify headers to include in the HTTP request
when fetching a remote image. For example, one might leverage this
when fetching an image from an endpoint that requires authentication:

```
&lt;Image
  style={styles.logo}
  source={{
    uri: &#39;http://facebook.github.io/react/img/logo_og.png&#39;,
    headers: {
      Authorization: &#39;someAuthToken&#39;
    }
  }}
/&gt;
```

Note that the header values must be strings.

Works on iOS and Android.

**Test plan (required)**

- Ran a small example like the one above on iOS and Android and ensured the headers were sent to the server.
- Ran a small example to ensure that \&lt;Image\&gt; components without headers still work.
- Currently using this code in our app.

Adam Comella
Microsoft Corp.
Closes https://github.com/facebook/react-native/pull/7338

Reviewed By: javache

Differential Revision: D3371458

Pulled By: nicklockwood

fbshipit-source-id: cdb24fe2572c3ae3ba82c86ad383af6d85157e20">iOS: Support HTTP headers for source prop on &lt;Image&gt; components</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-01T17:32:20Z">Jun 1, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/cec913e7ce05d26181ab4d46e2e41d72acdfb87d/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L62">62</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC62">        width<span class="pl-k">:</span> <span class="pl-smi">PropTypes</span>.<span class="pl-smi">number</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L63">63</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC63">        height<span class="pl-k">:</span> <span class="pl-smi">PropTypes</span>.<span class="pl-smi">number</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L64">64</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC64">        scale<span class="pl-k">:</span> <span class="pl-smi">PropTypes</span>.<span class="pl-smi">number</span>,</div>
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
                        <a href="/facebook/react-native/commit/b67229485834113674b25bda193a7426bf44cfc8" class="message f6 text-gray-dark" data-pjax="true" title="Added RCTImageSource

Summary:
public

The +[RCTConvert UIImage:] function, while convenient, is inherently limited by being synchronous, which means that it cannot be used to load remote images, and may not be efficient for local images either. It&#39;s also unable to access the bridge, which means that it cannot take advantage of the modular image-loading pipeline.

This diff introduces a new RCTImageSource class which can be used to pass image source objects over the bridge and defer loading until later.

I&#39;ve also added automatic application of the `resolveAssetSource()` function based on prop type, and fixed up the image logic in NavigatorIOS and TabBarIOS.

Reviewed By: javache

Differential Revision: D2631541

fb-gh-sync-id: 6604635e8bb5394425102487f1ee7cd729321877">Added RCTImageSource</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-12-08T11:29:08Z">Dec 8, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/dcebe8cd374d149dd9d870f77967554b0d1f3802/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L65">65</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC65">      }),</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L66">66</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC66">      <span class="pl-smi">PropTypes</span>.<span class="pl-smi">number</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L67">67</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC67">    ]),</div>
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
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L68">68</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC68">    <span class="pl-c"><span class="pl-c">/**</span></span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/mkonicek" aria-label="mkonicek" class="tooltipped tooltipped-e">
                      <img alt="@mkonicek" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/346214?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/7c87952e431967b21639c6a818a99e2063eabc6e" class="message f6 text-gray-dark" data-pjax="true" title="[ReactNative] Image docs

Summary:
In preparation for open sourcing React Native for Android, document which Image props are platform-specific.">[ReactNative] Image docs</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-24T13:01:33Z">Jul 24, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/1b06e41c8319010a9b659e47e51a931600793268/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L69">69</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC69"><span class="pl-c">     * When true, indicates the image is an accessibility element.</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="2">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/hramos" aria-label="hramos" class="tooltipped tooltipped-e">
                      <img alt="@hramos" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/165856?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/28d60b68ad7bc5b7ebda6b720981feacd3bde337" class="message f6 text-gray-dark" data-pjax="true" title="Trim docs that are already present in the open source docs site

Summary:
A lot of these docs are already present in https://github.com/facebook/react-native-website.
Closes https://github.com/facebook/react-native/pull/17776

Differential Revision: D6839783

Pulled By: hramos

fbshipit-source-id: 945fde22afb8f181d0463617d224d3f3429faa24">Trim docs that are already present in the open source docs site</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="2"><time-ago datetime="2018-01-30T00:10:49Z">Jan 30, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/31288161e188723456fdb336c494f3c8a3f5b0a8/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L70">70</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC70"><span class="pl-c">     *</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L71">71</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC71"><span class="pl-c">     * See https://facebook.github.io/react-native/docs/image.html#accessible</span></div>
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
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L72">72</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC72"><span class="pl-c">     <span class="pl-c">*/</span></span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L73">73</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC73">    accessible<span class="pl-k">:</span> <span class="pl-smi">PropTypes</span>.<span class="pl-smi">bool</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L74">74</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC74">    <span class="pl-c"><span class="pl-c">/**</span></span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/mkonicek" aria-label="mkonicek" class="tooltipped tooltipped-e">
                      <img alt="@mkonicek" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/346214?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/7c87952e431967b21639c6a818a99e2063eabc6e" class="message f6 text-gray-dark" data-pjax="true" title="[ReactNative] Image docs

Summary:
In preparation for open sourcing React Native for Android, document which Image props are platform-specific.">[ReactNative] Image docs</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-24T13:01:33Z">Jul 24, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/1b06e41c8319010a9b659e47e51a931600793268/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L75">75</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC75"><span class="pl-c">     * The text that&#39;s read by the screen reader when the user interacts with</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L76">76</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC76"><span class="pl-c">     * the image.</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="2">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/hramos" aria-label="hramos" class="tooltipped tooltipped-e">
                      <img alt="@hramos" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/165856?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/28d60b68ad7bc5b7ebda6b720981feacd3bde337" class="message f6 text-gray-dark" data-pjax="true" title="Trim docs that are already present in the open source docs site

Summary:
A lot of these docs are already present in https://github.com/facebook/react-native-website.
Closes https://github.com/facebook/react-native/pull/17776

Differential Revision: D6839783

Pulled By: hramos

fbshipit-source-id: 945fde22afb8f181d0463617d224d3f3429faa24">Trim docs that are already present in the open source docs site</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="2"><time-ago datetime="2018-01-30T00:10:49Z">Jan 30, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/31288161e188723456fdb336c494f3c8a3f5b0a8/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L77">77</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC77"><span class="pl-c">     *</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L78">78</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC78"><span class="pl-c">     * See https://facebook.github.io/react-native/docs/image.html#accessibilitylabel</span></div>
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
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L79">79</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC79"><span class="pl-c">     <span class="pl-c">*/</span></span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="9">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/yungsters" aria-label="yungsters" class="tooltipped tooltipped-e">
                      <img alt="@yungsters" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/55161?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/b053fd5bdd1e96d1baa303ebd72f2d782ccda38d" class="message f6 text-gray-dark" data-pjax="true" title="RN: Fix Type of `accessibilityLabel` in &lt;Image&gt;

Summary: Fixes the prop type of `accessibilityLabel` in `&lt;Image&gt;` so that it matches that of `&lt;View&gt;`.

Reviewed By: fkgozali

Differential Revision: D4499103

fbshipit-source-id: 66bf3dce60bd79857849e0c46c989e7866d83d81">RN: Fix Type of `accessibilityLabel` in &lt;Image&gt;</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="9"><time-ago datetime="2017-02-03T06:10:35Z">Feb 3, 2017</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/b2179ebedf719772187839e065195b8096b3233c/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L80">80</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC80">    accessibilityLabel<span class="pl-k">:</span> <span class="pl-smi">PropTypes</span>.<span class="pl-smi">node</span>,</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    
                      <img alt="" class="avatar blame-commit-avatar" data-canonical-src="https://1.gravatar.com/avatar/1a8a007db56f81030e27b92cab7ed515?d=https%3A%2F%2Fassets-cdn.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;r=g&amp;s=140" height="20" src="https://camo.githubusercontent.com/c170059f0d031ebf30c114e3624afea70576b903/68747470733a2f2f312e67726176617461722e636f6d2f6176617461722f31613861303037646235366638313033306532376239326361623765643531353f643d68747470732533412532462532466173736574732d63646e2e6769746875622e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d6726733d313430" width="20" />
                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/9cb3ec94246e26d8c8291f7f90160b72a3009d0d" class="message f6 text-gray-dark" data-pjax="true" title="Add blur effect to RCTImageView

Summary: This diff introduces a blur radius property to the Image component on ios. If the radius specified is greater then 0 then native will apply a blur filter to the image

Reviewed By: nicklockwood

Differential Revision: D3054671

fb-gh-sync-id: d7a81ce5a08a3a2091c583f5053c6a86638b21b2
shipit-source-id: d7a81ce5a08a3a2091c583f5053c6a86638b21b2">Add blur effect to RCTImageView</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-03-17T19:25:07Z">Mar 17, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/8d7b419ed72ec5a628946ec2ddaff331b1fcc36b/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L81">81</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC81">    <span class="pl-c"><span class="pl-c">/**</span></span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="4">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/shergin" aria-label="shergin" class="tooltipped tooltipped-e">
                      <img alt="@shergin" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/22032?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/a5af841d259b6b29d95a9fb346a0ffce9c6efbfe" class="message f6 text-gray-dark" data-pjax="true" title="Prettier for View, Image and co.

Summary: Trivial beauty.

Reviewed By: sahrens

Differential Revision: D6715955

fbshipit-source-id: 3632750591f53d4673a2ce76309a0cc62946524d">Prettier for View, Image and co.</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="4"><time-ago datetime="2018-01-15T03:32:26Z">Jan 15, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/bf9cabb03c7245930c270a19816545eae1b9007d/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L82">82</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC82"><span class="pl-c">     * blurRadius: the blur radius of the blur filter added to the image</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="2">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/hramos" aria-label="hramos" class="tooltipped tooltipped-e">
                      <img alt="@hramos" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/165856?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/28d60b68ad7bc5b7ebda6b720981feacd3bde337" class="message f6 text-gray-dark" data-pjax="true" title="Trim docs that are already present in the open source docs site

Summary:
A lot of these docs are already present in https://github.com/facebook/react-native-website.
Closes https://github.com/facebook/react-native/pull/17776

Differential Revision: D6839783

Pulled By: hramos

fbshipit-source-id: 945fde22afb8f181d0463617d224d3f3429faa24">Trim docs that are already present in the open source docs site</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="2"><time-ago datetime="2018-01-30T00:10:49Z">Jan 30, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/31288161e188723456fdb336c494f3c8a3f5b0a8/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L83">83</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC83"><span class="pl-c">     *</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L84">84</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC84"><span class="pl-c">     * See https://facebook.github.io/react-native/docs/image.html#blurradius</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="4">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/shergin" aria-label="shergin" class="tooltipped tooltipped-e">
                      <img alt="@shergin" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/22032?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/a5af841d259b6b29d95a9fb346a0ffce9c6efbfe" class="message f6 text-gray-dark" data-pjax="true" title="Prettier for View, Image and co.

Summary: Trivial beauty.

Reviewed By: sahrens

Differential Revision: D6715955

fbshipit-source-id: 3632750591f53d4673a2ce76309a0cc62946524d">Prettier for View, Image and co.</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="4"><time-ago datetime="2018-01-15T03:32:26Z">Jan 15, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/bf9cabb03c7245930c270a19816545eae1b9007d/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L85">85</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC85"><span class="pl-c">     <span class="pl-c">*/</span></span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    
                      <img alt="" class="avatar blame-commit-avatar" data-canonical-src="https://1.gravatar.com/avatar/1a8a007db56f81030e27b92cab7ed515?d=https%3A%2F%2Fassets-cdn.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;r=g&amp;s=140" height="20" src="https://camo.githubusercontent.com/c170059f0d031ebf30c114e3624afea70576b903/68747470733a2f2f312e67726176617461722e636f6d2f6176617461722f31613861303037646235366638313033306532376239326361623765643531353f643d68747470732533412532462532466173736574732d63646e2e6769746875622e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d6726733d313430" width="20" />
                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/9cb3ec94246e26d8c8291f7f90160b72a3009d0d" class="message f6 text-gray-dark" data-pjax="true" title="Add blur effect to RCTImageView

Summary: This diff introduces a blur radius property to the Image component on ios. If the radius specified is greater then 0 then native will apply a blur filter to the image

Reviewed By: nicklockwood

Differential Revision: D3054671

fb-gh-sync-id: d7a81ce5a08a3a2091c583f5053c6a86638b21b2
shipit-source-id: d7a81ce5a08a3a2091c583f5053c6a86638b21b2">Add blur effect to RCTImageView</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-03-17T19:25:07Z">Mar 17, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/8d7b419ed72ec5a628946ec2ddaff331b1fcc36b/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L86">86</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC86">    blurRadius<span class="pl-k">:</span> <span class="pl-smi">PropTypes</span>.<span class="pl-smi">number</span>,</div>
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
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L87">87</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC87">    <span class="pl-c"><span class="pl-c">/**</span></span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="2">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/hramos" aria-label="hramos" class="tooltipped tooltipped-e">
                      <img alt="@hramos" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/165856?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/28d60b68ad7bc5b7ebda6b720981feacd3bde337" class="message f6 text-gray-dark" data-pjax="true" title="Trim docs that are already present in the open source docs site

Summary:
A lot of these docs are already present in https://github.com/facebook/react-native-website.
Closes https://github.com/facebook/react-native/pull/17776

Differential Revision: D6839783

Pulled By: hramos

fbshipit-source-id: 945fde22afb8f181d0463617d224d3f3429faa24">Trim docs that are already present in the open source docs site</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="2"><time-ago datetime="2018-01-30T00:10:49Z">Jan 30, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/31288161e188723456fdb336c494f3c8a3f5b0a8/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L88">88</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC88"><span class="pl-c">     * See https://facebook.github.io/react-native/docs/image.html#capinsets</span></div>
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
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L89">89</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC89"><span class="pl-c">     <span class="pl-c">*/</span></span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L90">90</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC90">    capInsets<span class="pl-k">:</span> EdgeInsetsPropType,</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/rigdern" aria-label="rigdern" class="tooltipped tooltipped-e">
                      <img alt="@rigdern" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/199935?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/b6735f33916429673fd65fb861ca963912bf2183" class="message f6 text-gray-dark" data-pjax="true" title="Enable developers to force Fresco to resize an image

Summary:
Here&#39;s a little background. Resizing is inferior to scaling. See http://frescolib.org/docs/resizing-rotating.html#_

Currently, React Native has a heuristic to use resize when the image is likely to be from the device&#39;s camera. However, there may be other cases where a developer wants to use resize. For example, when the developer knows they&#39;ll be downloading a large image from a service but the image will be rendered at a small size on the device.

This change adds a `resizeMethod` prop to the `Image` component so developers can choose how Fresco resizes the image. The options are &#39;auto&#39;, &#39;resize&#39;, or &#39;scale&#39;. When &#39;auto&#39; is specified, a heuristic is used to choose between &#39;resize&#39; and &#39;scale&#39;. The default value is &#39;auto&#39;.

**Test plan (required)**

In a small test app, verified that the `resizeMethod` prop properly influences the mechanism that is used to resize the image (e.g. resize or scale).

Adam Comella
Microsoft Corp.
Closes https://github.com/facebook/react-native/pull/9652

Differential Revision: D3841322

Pulled By: foghina

fbshipit-source-id: 6c78b5c75ea73053aa10386afd4cbff45f5b8ffe">Enable developers to force Fresco to resize an image</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-09-09T12:00:52Z">Sep 9, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/ea5b3353518f6f5fdd08123476c1eff807ee817d/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L91">91</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC91">    <span class="pl-c"><span class="pl-c">/**</span></span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="2">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/hramos" aria-label="hramos" class="tooltipped tooltipped-e">
                      <img alt="@hramos" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/165856?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/28d60b68ad7bc5b7ebda6b720981feacd3bde337" class="message f6 text-gray-dark" data-pjax="true" title="Trim docs that are already present in the open source docs site

Summary:
A lot of these docs are already present in https://github.com/facebook/react-native-website.
Closes https://github.com/facebook/react-native/pull/17776

Differential Revision: D6839783

Pulled By: hramos

fbshipit-source-id: 945fde22afb8f181d0463617d224d3f3429faa24">Trim docs that are already present in the open source docs site</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="2"><time-ago datetime="2018-01-30T00:10:49Z">Jan 30, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/31288161e188723456fdb336c494f3c8a3f5b0a8/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L92">92</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC92"><span class="pl-c">     * See https://facebook.github.io/react-native/docs/image.html#resizemethod</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/rigdern" aria-label="rigdern" class="tooltipped tooltipped-e">
                      <img alt="@rigdern" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/199935?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/b6735f33916429673fd65fb861ca963912bf2183" class="message f6 text-gray-dark" data-pjax="true" title="Enable developers to force Fresco to resize an image

Summary:
Here&#39;s a little background. Resizing is inferior to scaling. See http://frescolib.org/docs/resizing-rotating.html#_

Currently, React Native has a heuristic to use resize when the image is likely to be from the device&#39;s camera. However, there may be other cases where a developer wants to use resize. For example, when the developer knows they&#39;ll be downloading a large image from a service but the image will be rendered at a small size on the device.

This change adds a `resizeMethod` prop to the `Image` component so developers can choose how Fresco resizes the image. The options are &#39;auto&#39;, &#39;resize&#39;, or &#39;scale&#39;. When &#39;auto&#39; is specified, a heuristic is used to choose between &#39;resize&#39; and &#39;scale&#39;. The default value is &#39;auto&#39;.

**Test plan (required)**

In a small test app, verified that the `resizeMethod` prop properly influences the mechanism that is used to resize the image (e.g. resize or scale).

Adam Comella
Microsoft Corp.
Closes https://github.com/facebook/react-native/pull/9652

Differential Revision: D3841322

Pulled By: foghina

fbshipit-source-id: 6c78b5c75ea73053aa10386afd4cbff45f5b8ffe">Enable developers to force Fresco to resize an image</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-09-09T12:00:52Z">Sep 9, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/ea5b3353518f6f5fdd08123476c1eff807ee817d/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L93">93</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC93"><span class="pl-c">     <span class="pl-c">*/</span></span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L94">94</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC94">    resizeMethod<span class="pl-k">:</span> <span class="pl-smi">PropTypes</span>.<span class="pl-en">oneOf</span>([<span class="pl-s"><span class="pl-pds">&#39;</span>auto<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>resize<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>scale<span class="pl-pds">&#39;</span></span>]),</div>
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
                        <a href="/facebook/react-native/commit/915151c5d75aea054cf0a16335abd5c84ddd19cf" class="message f6 text-gray-dark" data-pjax="true" title="[ReactNative] verifyPropTypes against native exports">[ReactNative] verifyPropTypes against native exports</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-04-17T01:17:19Z">Apr 17, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/764854c04aae6418ba1a771c0412624407e42978/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L95">95</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC95">    <span class="pl-c"><span class="pl-c">/**</span></span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L96">96</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC96"><span class="pl-c">     * Determines how to resize the image when the frame doesn&#39;t match the raw</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L97">97</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC97"><span class="pl-c">     * image dimensions.</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/qbig" aria-label="qbig" class="tooltipped tooltipped-e">
                      <img alt="@qbig" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/5563225?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/edc318fcb9c2360e67dfa3d2d48462d6bacda3c0" class="message f6 text-gray-dark" data-pjax="true" title="added doc for image resizeMode

Summary:
based on https://github.com/facebook/react-native/blob/62e8ddc20561a39c3c839ab9f83c95493df117c0/ReactAndroid/src/main/java/com/facebook/react/views/image/ImageResizeMode.java  and http://developer.android.com/reference/android/widget/ImageView.ScaleType.html
Closes https://github.com/facebook/react-native/pull/4799

Reviewed By: svcscm

Differential Revision: D2762795

Pulled By: androidtrunkagent

fb-gh-sync-id: 2906c9f334f0afd4d58d4864a2b8472a5a871fc0">added doc for image resizeMode</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-12-16T01:33:37Z">Dec 16, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/53d18c83c8de220d3da5f30271a2e9a0765b8df2/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L98">98</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC98"><span class="pl-c">     *</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="2">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/hramos" aria-label="hramos" class="tooltipped tooltipped-e">
                      <img alt="@hramos" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/165856?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/28d60b68ad7bc5b7ebda6b720981feacd3bde337" class="message f6 text-gray-dark" data-pjax="true" title="Trim docs that are already present in the open source docs site

Summary:
A lot of these docs are already present in https://github.com/facebook/react-native-website.
Closes https://github.com/facebook/react-native/pull/17776

Differential Revision: D6839783

Pulled By: hramos

fbshipit-source-id: 945fde22afb8f181d0463617d224d3f3429faa24">Trim docs that are already present in the open source docs site</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="2"><time-ago datetime="2018-01-30T00:10:49Z">Jan 30, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/31288161e188723456fdb336c494f3c8a3f5b0a8/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L99">99</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC99"><span class="pl-c">     * See https://facebook.github.io/react-native/docs/image.html#resizemode</span></div>
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
                        <a href="/facebook/react-native/commit/915151c5d75aea054cf0a16335abd5c84ddd19cf" class="message f6 text-gray-dark" data-pjax="true" title="[ReactNative] verifyPropTypes against native exports">[ReactNative] verifyPropTypes against native exports</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-04-17T01:17:19Z">Apr 17, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/764854c04aae6418ba1a771c0412624407e42978/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L100">100</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC100"><span class="pl-c">     <span class="pl-c">*/</span></span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="4">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/shergin" aria-label="shergin" class="tooltipped tooltipped-e">
                      <img alt="@shergin" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/22032?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/a5af841d259b6b29d95a9fb346a0ffce9c6efbfe" class="message f6 text-gray-dark" data-pjax="true" title="Prettier for View, Image and co.

Summary: Trivial beauty.

Reviewed By: sahrens

Differential Revision: D6715955

fbshipit-source-id: 3632750591f53d4673a2ce76309a0cc62946524d">Prettier for View, Image and co.</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="4"><time-ago datetime="2018-01-15T03:32:26Z">Jan 15, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/bf9cabb03c7245930c270a19816545eae1b9007d/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L101">101</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC101">    resizeMode<span class="pl-k">:</span> <span class="pl-smi">PropTypes</span>.<span class="pl-en">oneOf</span>([</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L102">102</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC102">      <span class="pl-s"><span class="pl-pds">&#39;</span>cover<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L103">103</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC103">      <span class="pl-s"><span class="pl-pds">&#39;</span>contain<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L104">104</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC104">      <span class="pl-s"><span class="pl-pds">&#39;</span>stretch<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L105">105</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC105">      <span class="pl-s"><span class="pl-pds">&#39;</span>repeat<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L106">106</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC106">      <span class="pl-s"><span class="pl-pds">&#39;</span>center<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L107">107</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC107">    ]),</div>
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
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L108">108</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC108">    <span class="pl-c"><span class="pl-c">/**</span></span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/vjeux" aria-label="vjeux" class="tooltipped tooltipped-e">
                      <img alt="@vjeux" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/197597?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/dee36b8e0732464df9836c5fc52d93d09463ff9d" class="message f6 text-gray-dark" data-pjax="true" title="[ReactNative] Improve &lt;Image&gt; docs">[ReactNative] Improve &lt;Image&gt; docs</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-04-01T17:56:21Z">Apr 1, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/4838d5921f887d7d5b48e32598d309d8c7b66bf6/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L109">109</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC109"><span class="pl-c">     * A unique identifier for this element to be used in UI Automation</span></div>
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
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L110">110</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC110"><span class="pl-c">     * testing scripts.</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="2">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/hramos" aria-label="hramos" class="tooltipped tooltipped-e">
                      <img alt="@hramos" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/165856?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/28d60b68ad7bc5b7ebda6b720981feacd3bde337" class="message f6 text-gray-dark" data-pjax="true" title="Trim docs that are already present in the open source docs site

Summary:
A lot of these docs are already present in https://github.com/facebook/react-native-website.
Closes https://github.com/facebook/react-native/pull/17776

Differential Revision: D6839783

Pulled By: hramos

fbshipit-source-id: 945fde22afb8f181d0463617d224d3f3429faa24">Trim docs that are already present in the open source docs site</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="2"><time-ago datetime="2018-01-30T00:10:49Z">Jan 30, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/31288161e188723456fdb336c494f3c8a3f5b0a8/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L111">111</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC111"><span class="pl-c">     *</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L112">112</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC112"><span class="pl-c">     * See https://facebook.github.io/react-native/docs/image.html#testid</span></div>
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
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L113">113</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC113"><span class="pl-c">     <span class="pl-c">*/</span></span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L114">114</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC114">    testID<span class="pl-k">:</span> <span class="pl-smi">PropTypes</span>.<span class="pl-smi">string</span>,</div>
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
                        <a href="/facebook/react-native/commit/08d30e751b8ed0b5d485d5a4d2f479a89e2863a1" class="message f6 text-gray-dark" data-pjax="true" title="[ActivityIndicator] Add the onLayout prop to the outer container view

Summary:
ActivityIndicator was forwarding all of its props except `style` to the inner native view. This meant that onLayout would report a zero-sized frame that was relative to the wrapper view instead of the parent of the ActivityIndicator.

This diff adds `onLayout` to the wrapper view instead of the native view.

In general, all components that forward props need to be audited in this manner.

Closes https://github.com/facebook/react-native/pull/1292
Github Author: James Ide &lt;ide@jameside.com&gt;

Test Plan: `&lt;ActivityIndicator onLayout={...} /&gt;` reports the size of the spinner plus a position relative to its parent view.">[ActivityIndicator] Add the onLayout prop to the outer container view</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-05-16T01:05:49Z">May 16, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/c668fd5be03438f3b7fb8a85c6eb778115f60f9c/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L115">115</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC115">    <span class="pl-c"><span class="pl-c">/**</span></span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L116">116</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC116"><span class="pl-c">     * Invoked on mount and layout changes with</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/mkonicek" aria-label="mkonicek" class="tooltipped tooltipped-e">
                      <img alt="@mkonicek" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/346214?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/7c87952e431967b21639c6a818a99e2063eabc6e" class="message f6 text-gray-dark" data-pjax="true" title="[ReactNative] Image docs

Summary:
In preparation for open sourcing React Native for Android, document which Image props are platform-specific.">[ReactNative] Image docs</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-24T13:01:33Z">Jul 24, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/1b06e41c8319010a9b659e47e51a931600793268/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L117">117</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC117"><span class="pl-c">     * `{nativeEvent: {layout: {x, y, width, height}}}`.</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="2">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/hramos" aria-label="hramos" class="tooltipped tooltipped-e">
                      <img alt="@hramos" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/165856?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/28d60b68ad7bc5b7ebda6b720981feacd3bde337" class="message f6 text-gray-dark" data-pjax="true" title="Trim docs that are already present in the open source docs site

Summary:
A lot of these docs are already present in https://github.com/facebook/react-native-website.
Closes https://github.com/facebook/react-native/pull/17776

Differential Revision: D6839783

Pulled By: hramos

fbshipit-source-id: 945fde22afb8f181d0463617d224d3f3429faa24">Trim docs that are already present in the open source docs site</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="2"><time-ago datetime="2018-01-30T00:10:49Z">Jan 30, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/31288161e188723456fdb336c494f3c8a3f5b0a8/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L118">118</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC118"><span class="pl-c">     *</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L119">119</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC119"><span class="pl-c">     * See https://facebook.github.io/react-native/docs/image.html#onlayout</span></div>
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
                        <a href="/facebook/react-native/commit/08d30e751b8ed0b5d485d5a4d2f479a89e2863a1" class="message f6 text-gray-dark" data-pjax="true" title="[ActivityIndicator] Add the onLayout prop to the outer container view

Summary:
ActivityIndicator was forwarding all of its props except `style` to the inner native view. This meant that onLayout would report a zero-sized frame that was relative to the wrapper view instead of the parent of the ActivityIndicator.

This diff adds `onLayout` to the wrapper view instead of the native view.

In general, all components that forward props need to be audited in this manner.

Closes https://github.com/facebook/react-native/pull/1292
Github Author: James Ide &lt;ide@jameside.com&gt;

Test Plan: `&lt;ActivityIndicator onLayout={...} /&gt;` reports the size of the spinner plus a position relative to its parent view.">[ActivityIndicator] Add the onLayout prop to the outer container view</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-05-16T01:05:49Z">May 16, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/c668fd5be03438f3b7fb8a85c6eb778115f60f9c/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L120">120</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC120"><span class="pl-c">     <span class="pl-c">*/</span></span></div>
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
                        <a href="/facebook/react-native/commit/8e70c7f00320db6873ea1da51c21f46a23a2ce60" class="message f6 text-gray-dark" data-pjax="true" title="[Image] Add onLoadStart, onLoadProgress, onLoadError events to Image component

Summary:
This PR adds 4 native events to NetworkImage.

![demo](http://zippy.gfycat.com/MelodicLawfulCaecilian.gif)

Using these events I could wrap `Image` component into something like:
```javascript
class NetworkImage extends React.Component {
  getInitialState() {
    return {
      downloading: false,
      progress: 0
    }
  }

  render() {
    var loader = this.state.downloading ?
      &lt;View style={this.props.loaderStyles}&gt;
        &lt;ActivityIndicatorIOS animating={true} size={&#39;large&#39;} /&gt;
        &lt;Text style={{color: &#39;#bbb&#39;}}&gt;{this.state.progress}%&lt;/Text&gt;
      &lt;/View&gt;
      :
      null;

    return &lt;Image source={this.props.source}
      onLoadStart={() =&gt; this.setState({downloading: true}) }
      onLoaded={() =&gt; this.setState({downloading: false}) }
      onLoadProgress={(e)=&gt; this.setState({progress: Math.round(100 * e.nativeEvent.written / e.nativeEvent.total)});
      onLoadError={(e)=&gt; {
        alert(&#39;the image cannot be downloaded because: &#39;, JSON.stringify(e));
        this.setState({downloading: false});
      }}&gt;
      {loader}
    &lt;/Image&gt;
  }
}
```
Useful on slow connections and server errors.

There are dozen lines of Objective C, which I don&#39;t have experience with. There are neither specific tests nor documentation yet. And I do realize that you&#39;re already working right now on better `&lt;Image/&gt;` (pipeline, new asset management, etc.). So this is basically a proof concept of events for images, and if this idea is not completely wrong I could improve it or help somehow.

Closes https://github.com/facebook/react-native/pull/1318
Github Author: Dmitriy Loktev &lt;unknownliveid@hotmail.com&gt;">[Image] Add onLoadStart, onLoadProgress, onLoadError events to Image …</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-09T16:48:22Z">Jul 9, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/54c21ac6518978474a11f1e02228f1ce53bc88d1/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L121">121</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC121">    onLayout<span class="pl-k">:</span> <span class="pl-smi">PropTypes</span>.<span class="pl-smi">func</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L122">122</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC122">    <span class="pl-c"><span class="pl-c">/**</span></span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/JoelMarcey" aria-label="JoelMarcey" class="tooltipped tooltipped-e">
                      <img alt="@JoelMarcey" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/3757713?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/db7b44ec8ebb9a72f13a8397dd35007e24f4e903" class="message f6 text-gray-dark" data-pjax="true" title="Update Image API

Summary:
- Provide runnable examples
- Add more details to properties and jsdoc-ify the methods

Ref #8203
Closes https://github.com/facebook/react-native/pull/8413

Differential Revision: D3482168

Pulled By: caabernathy

fbshipit-source-id: 04fce5133317af282cced5850a53858e3f5b72f2">Update Image API</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-24T17:39:06Z">Jun 24, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/f66acad30b00e89a81c19812300ca1c4bae895a1/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L123">123</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC123"><span class="pl-c">     * Invoked on load start.</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L124">124</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC124"><span class="pl-c">     *</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="2">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/hramos" aria-label="hramos" class="tooltipped tooltipped-e">
                      <img alt="@hramos" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/165856?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/28d60b68ad7bc5b7ebda6b720981feacd3bde337" class="message f6 text-gray-dark" data-pjax="true" title="Trim docs that are already present in the open source docs site

Summary:
A lot of these docs are already present in https://github.com/facebook/react-native-website.
Closes https://github.com/facebook/react-native/pull/17776

Differential Revision: D6839783

Pulled By: hramos

fbshipit-source-id: 945fde22afb8f181d0463617d224d3f3429faa24">Trim docs that are already present in the open source docs site</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="2"><time-ago datetime="2018-01-30T00:10:49Z">Jan 30, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/31288161e188723456fdb336c494f3c8a3f5b0a8/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L125">125</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC125"><span class="pl-c">     * See https://facebook.github.io/react-native/docs/image.html#onloadstart</span></div>
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
                        <a href="/facebook/react-native/commit/8e70c7f00320db6873ea1da51c21f46a23a2ce60" class="message f6 text-gray-dark" data-pjax="true" title="[Image] Add onLoadStart, onLoadProgress, onLoadError events to Image component

Summary:
This PR adds 4 native events to NetworkImage.

![demo](http://zippy.gfycat.com/MelodicLawfulCaecilian.gif)

Using these events I could wrap `Image` component into something like:
```javascript
class NetworkImage extends React.Component {
  getInitialState() {
    return {
      downloading: false,
      progress: 0
    }
  }

  render() {
    var loader = this.state.downloading ?
      &lt;View style={this.props.loaderStyles}&gt;
        &lt;ActivityIndicatorIOS animating={true} size={&#39;large&#39;} /&gt;
        &lt;Text style={{color: &#39;#bbb&#39;}}&gt;{this.state.progress}%&lt;/Text&gt;
      &lt;/View&gt;
      :
      null;

    return &lt;Image source={this.props.source}
      onLoadStart={() =&gt; this.setState({downloading: true}) }
      onLoaded={() =&gt; this.setState({downloading: false}) }
      onLoadProgress={(e)=&gt; this.setState({progress: Math.round(100 * e.nativeEvent.written / e.nativeEvent.total)});
      onLoadError={(e)=&gt; {
        alert(&#39;the image cannot be downloaded because: &#39;, JSON.stringify(e));
        this.setState({downloading: false});
      }}&gt;
      {loader}
    &lt;/Image&gt;
  }
}
```
Useful on slow connections and server errors.

There are dozen lines of Objective C, which I don&#39;t have experience with. There are neither specific tests nor documentation yet. And I do realize that you&#39;re already working right now on better `&lt;Image/&gt;` (pipeline, new asset management, etc.). So this is basically a proof concept of events for images, and if this idea is not completely wrong I could improve it or help somehow.

Closes https://github.com/facebook/react-native/pull/1318
Github Author: Dmitriy Loktev &lt;unknownliveid@hotmail.com&gt;">[Image] Add onLoadStart, onLoadProgress, onLoadError events to Image …</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-09T16:48:22Z">Jul 9, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/54c21ac6518978474a11f1e02228f1ce53bc88d1/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L126">126</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC126"><span class="pl-c">     <span class="pl-c">*/</span></span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L127">127</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC127">    onLoadStart<span class="pl-k">:</span> <span class="pl-smi">PropTypes</span>.<span class="pl-smi">func</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L128">128</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC128">    <span class="pl-c"><span class="pl-c">/**</span></span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/JoelMarcey" aria-label="JoelMarcey" class="tooltipped tooltipped-e">
                      <img alt="@JoelMarcey" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/3757713?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/db7b44ec8ebb9a72f13a8397dd35007e24f4e903" class="message f6 text-gray-dark" data-pjax="true" title="Update Image API

Summary:
- Provide runnable examples
- Add more details to properties and jsdoc-ify the methods

Ref #8203
Closes https://github.com/facebook/react-native/pull/8413

Differential Revision: D3482168

Pulled By: caabernathy

fbshipit-source-id: 04fce5133317af282cced5850a53858e3f5b72f2">Update Image API</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-24T17:39:06Z">Jun 24, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/f66acad30b00e89a81c19812300ca1c4bae895a1/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L129">129</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC129"><span class="pl-c">     * Invoked on download progress with `{nativeEvent: {loaded, total}}`.</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="2">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/hramos" aria-label="hramos" class="tooltipped tooltipped-e">
                      <img alt="@hramos" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/165856?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/28d60b68ad7bc5b7ebda6b720981feacd3bde337" class="message f6 text-gray-dark" data-pjax="true" title="Trim docs that are already present in the open source docs site

Summary:
A lot of these docs are already present in https://github.com/facebook/react-native-website.
Closes https://github.com/facebook/react-native/pull/17776

Differential Revision: D6839783

Pulled By: hramos

fbshipit-source-id: 945fde22afb8f181d0463617d224d3f3429faa24">Trim docs that are already present in the open source docs site</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="2"><time-ago datetime="2018-01-30T00:10:49Z">Jan 30, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/31288161e188723456fdb336c494f3c8a3f5b0a8/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L130">130</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC130"><span class="pl-c">     *</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L131">131</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC131"><span class="pl-c">     * See https://facebook.github.io/react-native/docs/image.html#onprogress</span></div>
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
                        <a href="/facebook/react-native/commit/8e70c7f00320db6873ea1da51c21f46a23a2ce60" class="message f6 text-gray-dark" data-pjax="true" title="[Image] Add onLoadStart, onLoadProgress, onLoadError events to Image component

Summary:
This PR adds 4 native events to NetworkImage.

![demo](http://zippy.gfycat.com/MelodicLawfulCaecilian.gif)

Using these events I could wrap `Image` component into something like:
```javascript
class NetworkImage extends React.Component {
  getInitialState() {
    return {
      downloading: false,
      progress: 0
    }
  }

  render() {
    var loader = this.state.downloading ?
      &lt;View style={this.props.loaderStyles}&gt;
        &lt;ActivityIndicatorIOS animating={true} size={&#39;large&#39;} /&gt;
        &lt;Text style={{color: &#39;#bbb&#39;}}&gt;{this.state.progress}%&lt;/Text&gt;
      &lt;/View&gt;
      :
      null;

    return &lt;Image source={this.props.source}
      onLoadStart={() =&gt; this.setState({downloading: true}) }
      onLoaded={() =&gt; this.setState({downloading: false}) }
      onLoadProgress={(e)=&gt; this.setState({progress: Math.round(100 * e.nativeEvent.written / e.nativeEvent.total)});
      onLoadError={(e)=&gt; {
        alert(&#39;the image cannot be downloaded because: &#39;, JSON.stringify(e));
        this.setState({downloading: false});
      }}&gt;
      {loader}
    &lt;/Image&gt;
  }
}
```
Useful on slow connections and server errors.

There are dozen lines of Objective C, which I don&#39;t have experience with. There are neither specific tests nor documentation yet. And I do realize that you&#39;re already working right now on better `&lt;Image/&gt;` (pipeline, new asset management, etc.). So this is basically a proof concept of events for images, and if this idea is not completely wrong I could improve it or help somehow.

Closes https://github.com/facebook/react-native/pull/1318
Github Author: Dmitriy Loktev &lt;unknownliveid@hotmail.com&gt;">[Image] Add onLoadStart, onLoadProgress, onLoadError events to Image …</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-09T16:48:22Z">Jul 9, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/54c21ac6518978474a11f1e02228f1ce53bc88d1/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L132">132</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC132"><span class="pl-c">     <span class="pl-c">*/</span></span></div>
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
                <a href="/facebook/react-native/blame/82a774e92bf19b9a135004cca53b6e1e98dde052/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L133">133</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC133">    onProgress<span class="pl-k">:</span> <span class="pl-smi">PropTypes</span>.<span class="pl-smi">func</span>,</div>
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
                        <a href="/facebook/react-native/commit/8e70c7f00320db6873ea1da51c21f46a23a2ce60" class="message f6 text-gray-dark" data-pjax="true" title="[Image] Add onLoadStart, onLoadProgress, onLoadError events to Image component

Summary:
This PR adds 4 native events to NetworkImage.

![demo](http://zippy.gfycat.com/MelodicLawfulCaecilian.gif)

Using these events I could wrap `Image` component into something like:
```javascript
class NetworkImage extends React.Component {
  getInitialState() {
    return {
      downloading: false,
      progress: 0
    }
  }

  render() {
    var loader = this.state.downloading ?
      &lt;View style={this.props.loaderStyles}&gt;
        &lt;ActivityIndicatorIOS animating={true} size={&#39;large&#39;} /&gt;
        &lt;Text style={{color: &#39;#bbb&#39;}}&gt;{this.state.progress}%&lt;/Text&gt;
      &lt;/View&gt;
      :
      null;

    return &lt;Image source={this.props.source}
      onLoadStart={() =&gt; this.setState({downloading: true}) }
      onLoaded={() =&gt; this.setState({downloading: false}) }
      onLoadProgress={(e)=&gt; this.setState({progress: Math.round(100 * e.nativeEvent.written / e.nativeEvent.total)});
      onLoadError={(e)=&gt; {
        alert(&#39;the image cannot be downloaded because: &#39;, JSON.stringify(e));
        this.setState({downloading: false});
      }}&gt;
      {loader}
    &lt;/Image&gt;
  }
}
```
Useful on slow connections and server errors.

There are dozen lines of Objective C, which I don&#39;t have experience with. There are neither specific tests nor documentation yet. And I do realize that you&#39;re already working right now on better `&lt;Image/&gt;` (pipeline, new asset management, etc.). So this is basically a proof concept of events for images, and if this idea is not completely wrong I could improve it or help somehow.

Closes https://github.com/facebook/react-native/pull/1318
Github Author: Dmitriy Loktev &lt;unknownliveid@hotmail.com&gt;">[Image] Add onLoadStart, onLoadProgress, onLoadError events to Image …</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-09T16:48:22Z">Jul 9, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/54c21ac6518978474a11f1e02228f1ce53bc88d1/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L134">134</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC134">    <span class="pl-c"><span class="pl-c">/**</span></span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/JoelMarcey" aria-label="JoelMarcey" class="tooltipped tooltipped-e">
                      <img alt="@JoelMarcey" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/3757713?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/db7b44ec8ebb9a72f13a8397dd35007e24f4e903" class="message f6 text-gray-dark" data-pjax="true" title="Update Image API

Summary:
- Provide runnable examples
- Add more details to properties and jsdoc-ify the methods

Ref #8203
Closes https://github.com/facebook/react-native/pull/8413

Differential Revision: D3482168

Pulled By: caabernathy

fbshipit-source-id: 04fce5133317af282cced5850a53858e3f5b72f2">Update Image API</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-24T17:39:06Z">Jun 24, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/f66acad30b00e89a81c19812300ca1c4bae895a1/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L135">135</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC135"><span class="pl-c">     * Invoked on load error with `{nativeEvent: {error}}`.</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="2">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/hramos" aria-label="hramos" class="tooltipped tooltipped-e">
                      <img alt="@hramos" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/165856?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/28d60b68ad7bc5b7ebda6b720981feacd3bde337" class="message f6 text-gray-dark" data-pjax="true" title="Trim docs that are already present in the open source docs site

Summary:
A lot of these docs are already present in https://github.com/facebook/react-native-website.
Closes https://github.com/facebook/react-native/pull/17776

Differential Revision: D6839783

Pulled By: hramos

fbshipit-source-id: 945fde22afb8f181d0463617d224d3f3429faa24">Trim docs that are already present in the open source docs site</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="2"><time-ago datetime="2018-01-30T00:10:49Z">Jan 30, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/31288161e188723456fdb336c494f3c8a3f5b0a8/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L136">136</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC136"><span class="pl-c">     *</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L137">137</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC137"><span class="pl-c">     * See https://facebook.github.io/react-native/docs/image.html#onerror</span></div>
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
                        <a href="/facebook/react-native/commit/8e70c7f00320db6873ea1da51c21f46a23a2ce60" class="message f6 text-gray-dark" data-pjax="true" title="[Image] Add onLoadStart, onLoadProgress, onLoadError events to Image component

Summary:
This PR adds 4 native events to NetworkImage.

![demo](http://zippy.gfycat.com/MelodicLawfulCaecilian.gif)

Using these events I could wrap `Image` component into something like:
```javascript
class NetworkImage extends React.Component {
  getInitialState() {
    return {
      downloading: false,
      progress: 0
    }
  }

  render() {
    var loader = this.state.downloading ?
      &lt;View style={this.props.loaderStyles}&gt;
        &lt;ActivityIndicatorIOS animating={true} size={&#39;large&#39;} /&gt;
        &lt;Text style={{color: &#39;#bbb&#39;}}&gt;{this.state.progress}%&lt;/Text&gt;
      &lt;/View&gt;
      :
      null;

    return &lt;Image source={this.props.source}
      onLoadStart={() =&gt; this.setState({downloading: true}) }
      onLoaded={() =&gt; this.setState({downloading: false}) }
      onLoadProgress={(e)=&gt; this.setState({progress: Math.round(100 * e.nativeEvent.written / e.nativeEvent.total)});
      onLoadError={(e)=&gt; {
        alert(&#39;the image cannot be downloaded because: &#39;, JSON.stringify(e));
        this.setState({downloading: false});
      }}&gt;
      {loader}
    &lt;/Image&gt;
  }
}
```
Useful on slow connections and server errors.

There are dozen lines of Objective C, which I don&#39;t have experience with. There are neither specific tests nor documentation yet. And I do realize that you&#39;re already working right now on better `&lt;Image/&gt;` (pipeline, new asset management, etc.). So this is basically a proof concept of events for images, and if this idea is not completely wrong I could improve it or help somehow.

Closes https://github.com/facebook/react-native/pull/1318
Github Author: Dmitriy Loktev &lt;unknownliveid@hotmail.com&gt;">[Image] Add onLoadStart, onLoadProgress, onLoadError events to Image …</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-09T16:48:22Z">Jul 9, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/54c21ac6518978474a11f1e02228f1ce53bc88d1/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L138">138</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC138"><span class="pl-c">     <span class="pl-c">*/</span></span></div>
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
                <a href="/facebook/react-native/blame/82a774e92bf19b9a135004cca53b6e1e98dde052/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L139">139</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC139">    onError<span class="pl-k">:</span> <span class="pl-smi">PropTypes</span>.<span class="pl-smi">func</span>,</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/mmmulani" aria-label="mmmulani" class="tooltipped tooltipped-e">
                      <img alt="@mmmulani" class="avatar blame-commit-avatar" height="20" src="https://avatars0.githubusercontent.com/u/192928?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/820b1c0e46f781f6677caa3a62b59076bf2700e5" class="message f6 text-gray-dark" data-pjax="true" title="Add partial image loading to RCTImageView

Reviewed By: javache

Differential Revision: D3856918

fbshipit-source-id: ca98f8604213e7e583a188ccc4c25ea9d7aa9aa2">Add partial image loading to RCTImageView</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-09-21T19:11:19Z">Sep 21, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/048449b678a98d0c9c6d4da7fc51b8dd6277f481/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L140">140</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC140">    <span class="pl-c"><span class="pl-c">/**</span></span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="2">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/hramos" aria-label="hramos" class="tooltipped tooltipped-e">
                      <img alt="@hramos" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/165856?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/28d60b68ad7bc5b7ebda6b720981feacd3bde337" class="message f6 text-gray-dark" data-pjax="true" title="Trim docs that are already present in the open source docs site

Summary:
A lot of these docs are already present in https://github.com/facebook/react-native-website.
Closes https://github.com/facebook/react-native/pull/17776

Differential Revision: D6839783

Pulled By: hramos

fbshipit-source-id: 945fde22afb8f181d0463617d224d3f3429faa24">Trim docs that are already present in the open source docs site</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="2"><time-ago datetime="2018-01-30T00:10:49Z">Jan 30, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/31288161e188723456fdb336c494f3c8a3f5b0a8/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L141">141</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC141"><span class="pl-c">     * Invoked when a partial load of the image is complete.</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L142">142</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC142"><span class="pl-c">     *</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L143">143</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC143"><span class="pl-c">     * See https://facebook.github.io/react-native/docs/image.html#onpartialload</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/mmmulani" aria-label="mmmulani" class="tooltipped tooltipped-e">
                      <img alt="@mmmulani" class="avatar blame-commit-avatar" height="20" src="https://avatars0.githubusercontent.com/u/192928?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/820b1c0e46f781f6677caa3a62b59076bf2700e5" class="message f6 text-gray-dark" data-pjax="true" title="Add partial image loading to RCTImageView

Reviewed By: javache

Differential Revision: D3856918

fbshipit-source-id: ca98f8604213e7e583a188ccc4c25ea9d7aa9aa2">Add partial image loading to RCTImageView</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-09-21T19:11:19Z">Sep 21, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/048449b678a98d0c9c6d4da7fc51b8dd6277f481/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L144">144</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC144"><span class="pl-c">     <span class="pl-c">*/</span></span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L145">145</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC145">    onPartialLoad<span class="pl-k">:</span> <span class="pl-smi">PropTypes</span>.<span class="pl-smi">func</span>,</div>
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
                        <a href="/facebook/react-native/commit/8e70c7f00320db6873ea1da51c21f46a23a2ce60" class="message f6 text-gray-dark" data-pjax="true" title="[Image] Add onLoadStart, onLoadProgress, onLoadError events to Image component

Summary:
This PR adds 4 native events to NetworkImage.

![demo](http://zippy.gfycat.com/MelodicLawfulCaecilian.gif)

Using these events I could wrap `Image` component into something like:
```javascript
class NetworkImage extends React.Component {
  getInitialState() {
    return {
      downloading: false,
      progress: 0
    }
  }

  render() {
    var loader = this.state.downloading ?
      &lt;View style={this.props.loaderStyles}&gt;
        &lt;ActivityIndicatorIOS animating={true} size={&#39;large&#39;} /&gt;
        &lt;Text style={{color: &#39;#bbb&#39;}}&gt;{this.state.progress}%&lt;/Text&gt;
      &lt;/View&gt;
      :
      null;

    return &lt;Image source={this.props.source}
      onLoadStart={() =&gt; this.setState({downloading: true}) }
      onLoaded={() =&gt; this.setState({downloading: false}) }
      onLoadProgress={(e)=&gt; this.setState({progress: Math.round(100 * e.nativeEvent.written / e.nativeEvent.total)});
      onLoadError={(e)=&gt; {
        alert(&#39;the image cannot be downloaded because: &#39;, JSON.stringify(e));
        this.setState({downloading: false});
      }}&gt;
      {loader}
    &lt;/Image&gt;
  }
}
```
Useful on slow connections and server errors.

There are dozen lines of Objective C, which I don&#39;t have experience with. There are neither specific tests nor documentation yet. And I do realize that you&#39;re already working right now on better `&lt;Image/&gt;` (pipeline, new asset management, etc.). So this is basically a proof concept of events for images, and if this idea is not completely wrong I could improve it or help somehow.

Closes https://github.com/facebook/react-native/pull/1318
Github Author: Dmitriy Loktev &lt;unknownliveid@hotmail.com&gt;">[Image] Add onLoadStart, onLoadProgress, onLoadError events to Image …</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-09T16:48:22Z">Jul 9, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/54c21ac6518978474a11f1e02228f1ce53bc88d1/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L146">146</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC146">    <span class="pl-c"><span class="pl-c">/**</span></span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/JoelMarcey" aria-label="JoelMarcey" class="tooltipped tooltipped-e">
                      <img alt="@JoelMarcey" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/3757713?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/db7b44ec8ebb9a72f13a8397dd35007e24f4e903" class="message f6 text-gray-dark" data-pjax="true" title="Update Image API

Summary:
- Provide runnable examples
- Add more details to properties and jsdoc-ify the methods

Ref #8203
Closes https://github.com/facebook/react-native/pull/8413

Differential Revision: D3482168

Pulled By: caabernathy

fbshipit-source-id: 04fce5133317af282cced5850a53858e3f5b72f2">Update Image API</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-24T17:39:06Z">Jun 24, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/f66acad30b00e89a81c19812300ca1c4bae895a1/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L147">147</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC147"><span class="pl-c">     * Invoked when load completes successfully.</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="2">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/hramos" aria-label="hramos" class="tooltipped tooltipped-e">
                      <img alt="@hramos" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/165856?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/28d60b68ad7bc5b7ebda6b720981feacd3bde337" class="message f6 text-gray-dark" data-pjax="true" title="Trim docs that are already present in the open source docs site

Summary:
A lot of these docs are already present in https://github.com/facebook/react-native-website.
Closes https://github.com/facebook/react-native/pull/17776

Differential Revision: D6839783

Pulled By: hramos

fbshipit-source-id: 945fde22afb8f181d0463617d224d3f3429faa24">Trim docs that are already present in the open source docs site</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="2"><time-ago datetime="2018-01-30T00:10:49Z">Jan 30, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/31288161e188723456fdb336c494f3c8a3f5b0a8/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L148">148</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC148"><span class="pl-c">     *</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L149">149</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC149"><span class="pl-c">     * See https://facebook.github.io/react-native/docs/image.html#onload</span></div>
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
                        <a href="/facebook/react-native/commit/8e70c7f00320db6873ea1da51c21f46a23a2ce60" class="message f6 text-gray-dark" data-pjax="true" title="[Image] Add onLoadStart, onLoadProgress, onLoadError events to Image component

Summary:
This PR adds 4 native events to NetworkImage.

![demo](http://zippy.gfycat.com/MelodicLawfulCaecilian.gif)

Using these events I could wrap `Image` component into something like:
```javascript
class NetworkImage extends React.Component {
  getInitialState() {
    return {
      downloading: false,
      progress: 0
    }
  }

  render() {
    var loader = this.state.downloading ?
      &lt;View style={this.props.loaderStyles}&gt;
        &lt;ActivityIndicatorIOS animating={true} size={&#39;large&#39;} /&gt;
        &lt;Text style={{color: &#39;#bbb&#39;}}&gt;{this.state.progress}%&lt;/Text&gt;
      &lt;/View&gt;
      :
      null;

    return &lt;Image source={this.props.source}
      onLoadStart={() =&gt; this.setState({downloading: true}) }
      onLoaded={() =&gt; this.setState({downloading: false}) }
      onLoadProgress={(e)=&gt; this.setState({progress: Math.round(100 * e.nativeEvent.written / e.nativeEvent.total)});
      onLoadError={(e)=&gt; {
        alert(&#39;the image cannot be downloaded because: &#39;, JSON.stringify(e));
        this.setState({downloading: false});
      }}&gt;
      {loader}
    &lt;/Image&gt;
  }
}
```
Useful on slow connections and server errors.

There are dozen lines of Objective C, which I don&#39;t have experience with. There are neither specific tests nor documentation yet. And I do realize that you&#39;re already working right now on better `&lt;Image/&gt;` (pipeline, new asset management, etc.). So this is basically a proof concept of events for images, and if this idea is not completely wrong I could improve it or help somehow.

Closes https://github.com/facebook/react-native/pull/1318
Github Author: Dmitriy Loktev &lt;unknownliveid@hotmail.com&gt;">[Image] Add onLoadStart, onLoadProgress, onLoadError events to Image …</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2015-07-09T16:48:22Z">Jul 9, 2015</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/54c21ac6518978474a11f1e02228f1ce53bc88d1/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L150">150</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC150"><span class="pl-c">     <span class="pl-c">*/</span></span></div>
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
                <a href="/facebook/react-native/blame/82a774e92bf19b9a135004cca53b6e1e98dde052/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L151">151</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC151">    onLoad<span class="pl-k">:</span> <span class="pl-smi">PropTypes</span>.<span class="pl-smi">func</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L152">152</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC152">    <span class="pl-c"><span class="pl-c">/**</span></span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/JoelMarcey" aria-label="JoelMarcey" class="tooltipped tooltipped-e">
                      <img alt="@JoelMarcey" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/3757713?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/db7b44ec8ebb9a72f13a8397dd35007e24f4e903" class="message f6 text-gray-dark" data-pjax="true" title="Update Image API

Summary:
- Provide runnable examples
- Add more details to properties and jsdoc-ify the methods

Ref #8203
Closes https://github.com/facebook/react-native/pull/8413

Differential Revision: D3482168

Pulled By: caabernathy

fbshipit-source-id: 04fce5133317af282cced5850a53858e3f5b72f2">Update Image API</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-24T17:39:06Z">Jun 24, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/f66acad30b00e89a81c19812300ca1c4bae895a1/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L153">153</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC153"><span class="pl-c">     * Invoked when load either succeeds or fails.</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="2">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/hramos" aria-label="hramos" class="tooltipped tooltipped-e">
                      <img alt="@hramos" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/165856?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/28d60b68ad7bc5b7ebda6b720981feacd3bde337" class="message f6 text-gray-dark" data-pjax="true" title="Trim docs that are already present in the open source docs site

Summary:
A lot of these docs are already present in https://github.com/facebook/react-native-website.
Closes https://github.com/facebook/react-native/pull/17776

Differential Revision: D6839783

Pulled By: hramos

fbshipit-source-id: 945fde22afb8f181d0463617d224d3f3429faa24">Trim docs that are already present in the open source docs site</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="2"><time-ago datetime="2018-01-30T00:10:49Z">Jan 30, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/31288161e188723456fdb336c494f3c8a3f5b0a8/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L154">154</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC154"><span class="pl-c">     *</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L155">155</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC155"><span class="pl-c">     * See https://facebook.github.io/react-native/docs/image.html#onloadend</span></div>
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
                <a href="/facebook/react-native/blame/82a774e92bf19b9a135004cca53b6e1e98dde052/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L156">156</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC156"><span class="pl-c">     <span class="pl-c">*/</span></span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L157">157</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC157">    onLoadEnd<span class="pl-k">:</span> <span class="pl-smi">PropTypes</span>.<span class="pl-smi">func</span>,</div>
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
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L158">158</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC158">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L159">159</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC159"></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L160">160</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC160">  statics<span class="pl-k">:</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L161">161</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC161">    resizeMode<span class="pl-k">:</span> ImageResizeMode,</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sunnylqm" aria-label="sunnylqm" class="tooltipped tooltipped-e">
                      <img alt="@sunnylqm" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/615282?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/edb523c6d76bbca1709e3a8fd78c0744cff5c750" class="message f6 text-gray-dark" data-pjax="true" title="adjust getSize so that its doc can be shown on the page

Summary: Closes https://github.com/facebook/react-native/pull/5426

Reviewed By: svcscm

Differential Revision: D2848229

Pulled By: nicklockwood

fb-gh-sync-id: d1cc28af889c3b1e26a098044e85e0b10032a776">adjust getSize so that its doc can be shown on the page</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-01-21T16:22:44Z">Jan 21, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/5d9163b87d288194fc910a9e0e8aeecc513717a3/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L162">162</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC162">    <span class="pl-c"><span class="pl-c">/**</span></span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L163">163</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC163"><span class="pl-c">     * Retrieve the width and height (in pixels) of an image prior to displaying it.</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L164">164</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC164"><span class="pl-c">     *</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="2">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/hramos" aria-label="hramos" class="tooltipped tooltipped-e">
                      <img alt="@hramos" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/165856?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/28d60b68ad7bc5b7ebda6b720981feacd3bde337" class="message f6 text-gray-dark" data-pjax="true" title="Trim docs that are already present in the open source docs site

Summary:
A lot of these docs are already present in https://github.com/facebook/react-native-website.
Closes https://github.com/facebook/react-native/pull/17776

Differential Revision: D6839783

Pulled By: hramos

fbshipit-source-id: 945fde22afb8f181d0463617d224d3f3429faa24">Trim docs that are already present in the open source docs site</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="2"><time-ago datetime="2018-01-30T00:10:49Z">Jan 30, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/31288161e188723456fdb336c494f3c8a3f5b0a8/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L165">165</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC165"><span class="pl-c">     * See https://facebook.github.io/react-native/docs/image.html#getsize</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sunnylqm" aria-label="sunnylqm" class="tooltipped tooltipped-e">
                      <img alt="@sunnylqm" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/615282?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/edb523c6d76bbca1709e3a8fd78c0744cff5c750" class="message f6 text-gray-dark" data-pjax="true" title="adjust getSize so that its doc can be shown on the page

Summary: Closes https://github.com/facebook/react-native/pull/5426

Reviewed By: svcscm

Differential Revision: D2848229

Pulled By: nicklockwood

fb-gh-sync-id: d1cc28af889c3b1e26a098044e85e0b10032a776">adjust getSize so that its doc can be shown on the page</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-01-21T16:22:44Z">Jan 21, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/5d9163b87d288194fc910a9e0e8aeecc513717a3/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L166">166</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC166"><span class="pl-c">     <span class="pl-c">*/</span></span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L167">167</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC167">    <span class="pl-en">getSize</span><span class="pl-k">:</span> <span class="pl-k">function</span>(</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L168">168</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC168">      <span class="pl-smi">uri</span><span class="pl-k">:</span> <span class="pl-smi">string</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L169">169</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC169">      <span class="pl-en">success</span><span class="pl-k">:</span> (<span class="pl-smi">width</span><span class="pl-k">:</span> <span class="pl-smi">number</span>, <span class="pl-smi">height</span><span class="pl-k">:</span> <span class="pl-smi">number</span>) <span class="pl-k">=&gt;</span> <span class="pl-k">void</span>,</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="9">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/janicduplessis" aria-label="janicduplessis" class="tooltipped tooltipped-e">
                      <img alt="@janicduplessis" class="avatar blame-commit-avatar" height="20" src="https://avatars2.githubusercontent.com/u/2677334?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/c7387fefc85fd15dceadfa291857099ed3e848b8" class="message f6 text-gray-dark" data-pjax="true" title="Enable flow in react-native-implementation

Summary:
I noticed I didn&#39;t get type defs anymore for react-native. Looks like it is broken since we removed the .flow file in https://github.com/facebook/react-native/commit/3e153b2a5bee943f69621d05e271782e1a3b3edd. To fix it we can now enable flow in react-native-implementation since it now supports properties.

**Test plan**
Tested that I get type hints when using imports from react-native in a project.
Closes https://github.com/facebook/react-native/pull/12917

Differential Revision: D4704753

Pulled By: ericvicenti

fbshipit-source-id: cf882588d7f371931de8d7861a1a6d50f6c425dc">Enable flow in react-native-implementation</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="9"><time-ago datetime="2017-04-05T17:16:30Z">Apr 5, 2017</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/9a51fa8e15acc052b5d271c369dfa4b227d657c2/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L170">170</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC170">      <span class="pl-smi">failure</span><span class="pl-k">?:</span> (<span class="pl-smi">error</span><span class="pl-k">:</span> <span class="pl-smi">any</span>) <span class="pl-k">=&gt;</span> <span class="pl-k">void</span>,</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/sunnylqm" aria-label="sunnylqm" class="tooltipped tooltipped-e">
                      <img alt="@sunnylqm" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/615282?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/edb523c6d76bbca1709e3a8fd78c0744cff5c750" class="message f6 text-gray-dark" data-pjax="true" title="adjust getSize so that its doc can be shown on the page

Summary: Closes https://github.com/facebook/react-native/pull/5426

Reviewed By: svcscm

Differential Revision: D2848229

Pulled By: nicklockwood

fb-gh-sync-id: d1cc28af889c3b1e26a098044e85e0b10032a776">adjust getSize so that its doc can be shown on the page</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-01-21T16:22:44Z">Jan 21, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/5d9163b87d288194fc910a9e0e8aeecc513717a3/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L171">171</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC171">    ) {</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="4">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/shergin" aria-label="shergin" class="tooltipped tooltipped-e">
                      <img alt="@shergin" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/22032?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/a5af841d259b6b29d95a9fb346a0ffce9c6efbfe" class="message f6 text-gray-dark" data-pjax="true" title="Prettier for View, Image and co.

Summary: Trivial beauty.

Reviewed By: sahrens

Differential Revision: D6715955

fbshipit-source-id: 3632750591f53d4673a2ce76309a0cc62946524d">Prettier for View, Image and co.</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="4"><time-ago datetime="2018-01-15T03:32:26Z">Jan 15, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/bf9cabb03c7245930c270a19816545eae1b9007d/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L172">172</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC172">      <span class="pl-smi">ImageViewManager</span>.<span class="pl-en">getSize</span>(</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L173">173</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC173">        uri,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L174">174</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC174">        success,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L175">175</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC175">        failure <span class="pl-k">||</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L176">176</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC176">          <span class="pl-k">function</span>() {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L177">177</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC177">            <span class="pl-en">console</span>.<span class="pl-c1">warn</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Failed to get size for image: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> uri);</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L178">178</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC178">          },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L179">179</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC179">      );</div>
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
                <a href="/facebook/react-native/blame/4450d789e0760c294d885052c38ffa00e26a7554/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L180">180</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC180">    },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L181">181</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC181">    <span class="pl-c"><span class="pl-c">/**</span></span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L182">182</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC182"><span class="pl-c">     * Prefetches a remote image for later use by downloading it to the disk</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="2">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/hramos" aria-label="hramos" class="tooltipped tooltipped-e">
                      <img alt="@hramos" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/165856?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/28d60b68ad7bc5b7ebda6b720981feacd3bde337" class="message f6 text-gray-dark" data-pjax="true" title="Trim docs that are already present in the open source docs site

Summary:
A lot of these docs are already present in https://github.com/facebook/react-native-website.
Closes https://github.com/facebook/react-native/pull/17776

Differential Revision: D6839783

Pulled By: hramos

fbshipit-source-id: 945fde22afb8f181d0463617d224d3f3429faa24">Trim docs that are already present in the open source docs site</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="2"><time-ago datetime="2018-01-30T00:10:49Z">Jan 30, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/31288161e188723456fdb336c494f3c8a3f5b0a8/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L183">183</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC183"><span class="pl-c">     * cache.</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/JoelMarcey" aria-label="JoelMarcey" class="tooltipped tooltipped-e">
                      <img alt="@JoelMarcey" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/3757713?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/db7b44ec8ebb9a72f13a8397dd35007e24f4e903" class="message f6 text-gray-dark" data-pjax="true" title="Update Image API

Summary:
- Provide runnable examples
- Add more details to properties and jsdoc-ify the methods

Ref #8203
Closes https://github.com/facebook/react-native/pull/8413

Differential Revision: D3482168

Pulled By: caabernathy

fbshipit-source-id: 04fce5133317af282cced5850a53858e3f5b72f2">Update Image API</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-24T17:39:06Z">Jun 24, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/f66acad30b00e89a81c19812300ca1c4bae895a1/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L184">184</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC184"><span class="pl-c">     *</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="2">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/hramos" aria-label="hramos" class="tooltipped tooltipped-e">
                      <img alt="@hramos" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/165856?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/28d60b68ad7bc5b7ebda6b720981feacd3bde337" class="message f6 text-gray-dark" data-pjax="true" title="Trim docs that are already present in the open source docs site

Summary:
A lot of these docs are already present in https://github.com/facebook/react-native-website.
Closes https://github.com/facebook/react-native/pull/17776

Differential Revision: D6839783

Pulled By: hramos

fbshipit-source-id: 945fde22afb8f181d0463617d224d3f3429faa24">Trim docs that are already present in the open source docs site</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="2"><time-ago datetime="2018-01-30T00:10:49Z">Jan 30, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/31288161e188723456fdb336c494f3c8a3f5b0a8/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L185">185</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC185"><span class="pl-c">     * See https://facebook.github.io/react-native/docs/image.html#prefetch</span></div>
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
                <a href="/facebook/react-native/blame/4450d789e0760c294d885052c38ffa00e26a7554/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L186">186</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC186"><span class="pl-c">     <span class="pl-c">*/</span></span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L187">187</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC187">    <span class="pl-en">prefetch</span>(<span class="pl-smi">url</span><span class="pl-k">:</span> <span class="pl-smi">string</span>) {</div>
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
                        <a href="/facebook/react-native/commit/748a5078619340cf441594e66af727664823cc3d" class="message f6 text-gray-dark" data-pjax="true" title="Simplified Image.js

Summary:
Now that we no longer have a separate NetworkImageView implementation, we can remove that code path from Image.js

I&#39;ve also moved the prefetch method into RCTImageViewManager for consistency with the getImageSize method, which means we no longer need to export the RCTImageLoader module to js.

Reviewed By: javache

Differential Revision: D3398157

fbshipit-source-id: fbbcf90a61549831ad28bad0cb3b50c375aae32c">Simplified Image.js</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-07T12:29:13Z">Jun 7, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/592d5fb8f37fd9a250554cd1485bf477a262b19e/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L188">188</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC188">      <span class="pl-k">return</span> <span class="pl-smi">ImageViewManager</span>.<span class="pl-en">prefetchImage</span>(url);</div>
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
                <a href="/facebook/react-native/blame/4450d789e0760c294d885052c38ffa00e26a7554/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L189">189</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC189">    },</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="9">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/rigdern" aria-label="rigdern" class="tooltipped tooltipped-e">
                      <img alt="@rigdern" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/199935?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/fde7c354494c6f0749b7bb6c6b6585b03d34501f" class="message f6 text-gray-dark" data-pjax="true" title="Make resolveAssetSource public

Summary:
When building a native component which takes an image reference as a prop, `resolveAssetSource` needs to be called on the image reference. If this isn&#39;t done, the native component may receive the opaque type returned by `require` (e.g. `require(&#39;./foo.png&#39;)`) which is useless to the native component. `resolveAssetSource` is used by builtin components that take image references such as `Image`, `WebView` and `MapView`.

This change makes `resolveAssetSource` public so that third-party native components can correctly handle image references.

**Test plan (required)**

Verified that `Image.resolveAssetSource` works in a test app. Also, my team is using this change in our app.

Adam Comella
Microsoft Corp.
Closes https://github.com/facebook/react-native/pull/10904

Differential Revision: D4177803

Pulled By: ericvicenti

fbshipit-source-id: ffc511b9340325f7d1111002309cd8558ab8e6b0">Make resolveAssetSource public</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="9"><time-ago datetime="2016-11-15T05:01:02Z">Nov 15, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/7f6d4351883201199ce9af94de25e32a7f11820a/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L190">190</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC190">    <span class="pl-c"><span class="pl-c">/**</span></span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="2">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/hramos" aria-label="hramos" class="tooltipped tooltipped-e">
                      <img alt="@hramos" class="avatar blame-commit-avatar" height="20" src="https://avatars1.githubusercontent.com/u/165856?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/28d60b68ad7bc5b7ebda6b720981feacd3bde337" class="message f6 text-gray-dark" data-pjax="true" title="Trim docs that are already present in the open source docs site

Summary:
A lot of these docs are already present in https://github.com/facebook/react-native-website.
Closes https://github.com/facebook/react-native/pull/17776

Differential Revision: D6839783

Pulled By: hramos

fbshipit-source-id: 945fde22afb8f181d0463617d224d3f3429faa24">Trim docs that are already present in the open source docs site</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="2"><time-ago datetime="2018-01-30T00:10:49Z">Jan 30, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/31288161e188723456fdb336c494f3c8a3f5b0a8/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L191">191</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC191"><span class="pl-c">     * Resolves an asset reference into an object.</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L192">192</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC192"><span class="pl-c">     *</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L193">193</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC193"><span class="pl-c">     * See https://facebook.github.io/react-native/docs/image.html#resolveassetsource</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="9">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/rigdern" aria-label="rigdern" class="tooltipped tooltipped-e">
                      <img alt="@rigdern" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/199935?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/fde7c354494c6f0749b7bb6c6b6585b03d34501f" class="message f6 text-gray-dark" data-pjax="true" title="Make resolveAssetSource public

Summary:
When building a native component which takes an image reference as a prop, `resolveAssetSource` needs to be called on the image reference. If this isn&#39;t done, the native component may receive the opaque type returned by `require` (e.g. `require(&#39;./foo.png&#39;)`) which is useless to the native component. `resolveAssetSource` is used by builtin components that take image references such as `Image`, `WebView` and `MapView`.

This change makes `resolveAssetSource` public so that third-party native components can correctly handle image references.

**Test plan (required)**

Verified that `Image.resolveAssetSource` works in a test app. Also, my team is using this change in our app.

Adam Comella
Microsoft Corp.
Closes https://github.com/facebook/react-native/pull/10904

Differential Revision: D4177803

Pulled By: ericvicenti

fbshipit-source-id: ffc511b9340325f7d1111002309cd8558ab8e6b0">Make resolveAssetSource public</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="9"><time-ago datetime="2016-11-15T05:01:02Z">Nov 15, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/7f6d4351883201199ce9af94de25e32a7f11820a/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L194">194</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC194"><span class="pl-c">     <span class="pl-c">*/</span></span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L195">195</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC195">    resolveAssetSource<span class="pl-k">:</span> resolveAssetSource,</div>
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
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L196">196</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC196">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L197">197</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC197"></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L198">198</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC198">  mixins<span class="pl-k">:</span> [NativeMethodsMixin],</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L199">199</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC199"></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L200">200</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC200">  <span class="pl-c"><span class="pl-c">/**</span></span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L201">201</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC201"><span class="pl-c">   * `NativeMethodsMixin` will look for this when invoking `setNativeProps`. We</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L202">202</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC202"><span class="pl-c">   * make `this` look like an actual native component class.</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L203">203</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC203"><span class="pl-c">   <span class="pl-c">*/</span></span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L204">204</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC204">  viewConfig<span class="pl-k">:</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L205">205</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC205">    uiViewClassName<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>UIView<span class="pl-pds">&#39;</span></span>,</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="4">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/shergin" aria-label="shergin" class="tooltipped tooltipped-e">
                      <img alt="@shergin" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/22032?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/a5af841d259b6b29d95a9fb346a0ffce9c6efbfe" class="message f6 text-gray-dark" data-pjax="true" title="Prettier for View, Image and co.

Summary: Trivial beauty.

Reviewed By: sahrens

Differential Revision: D6715955

fbshipit-source-id: 3632750591f53d4673a2ce76309a0cc62946524d">Prettier for View, Image and co.</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="4"><time-ago datetime="2018-01-15T03:32:26Z">Jan 15, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/bf9cabb03c7245930c270a19816545eae1b9007d/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L206">206</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC206">    validAttributes<span class="pl-k">:</span> <span class="pl-smi">ReactNativeViewAttributes</span>.<span class="pl-smi">UIView</span>,</div>
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
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L207">207</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC207">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L208">208</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC208"></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L209">209</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC209">  <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="4">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/shergin" aria-label="shergin" class="tooltipped tooltipped-e">
                      <img alt="@shergin" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/22032?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/a5af841d259b6b29d95a9fb346a0ffce9c6efbfe" class="message f6 text-gray-dark" data-pjax="true" title="Prettier for View, Image and co.

Summary: Trivial beauty.

Reviewed By: sahrens

Differential Revision: D6715955

fbshipit-source-id: 3632750591f53d4673a2ce76309a0cc62946524d">Prettier for View, Image and co.</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="4"><time-ago datetime="2018-01-15T03:32:26Z">Jan 15, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/bf9cabb03c7245930c270a19816545eae1b9007d/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L210">210</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC210">    <span class="pl-k">const</span> <span class="pl-c1">source</span> <span class="pl-k">=</span> <span class="pl-en">resolveAssetSource</span>(<span class="pl-c1">this</span>.<span class="pl-smi">props</span>.<span class="pl-c1">source</span>) <span class="pl-k">||</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L211">211</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC211">      uri<span class="pl-k">:</span> <span class="pl-c1">undefined</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L212">212</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC212">      width<span class="pl-k">:</span> <span class="pl-c1">undefined</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L213">213</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC213">      height<span class="pl-k">:</span> <span class="pl-c1">undefined</span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L214">214</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC214">    };</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    
                      <img alt="" class="avatar blame-commit-avatar" data-canonical-src="https://2.gravatar.com/avatar/96080ec6d0f9db106cc5aa64a55ce425?d=https%3A%2F%2Fassets-cdn.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;r=g&amp;s=140" height="20" src="https://camo.githubusercontent.com/a466150d7c4f001b3c96ab7d01d03f135593c908/68747470733a2f2f322e67726176617461722e636f6d2f6176617461722f39363038306563366430663964623130366363356161363461353563653432353f643d68747470732533412532462532466173736574732d63646e2e6769746875622e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d6726733d313430" width="20" />
                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/2e7a536aba17c49974d98ce2aeea274047ab24c2" class="message f6 text-gray-dark" data-pjax="true" title="Unbreak Image.ios.js

Summary: Don&#39;t pass `null` as default empty uri. Use `undefined` instead.

Differential Revision: D3393211

fbshipit-source-id: ac7cd385aa7f2196bc0743b8679dd2c94be4108b">Unbreak Image.ios.js</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-06T20:20:09Z">Jun 6, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/8d038572f3c42033cfcc7a7901eea0ff75bbc32a/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L215">215</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC215"></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    
                      <img alt="" class="avatar blame-commit-avatar" data-canonical-src="https://0.gravatar.com/avatar/1dd06f1ccc71b3351bfc41da65bc63ff?d=https%3A%2F%2Fassets-cdn.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;r=g&amp;s=140" height="20" src="https://camo.githubusercontent.com/c32b0f41270deddbd1a4ae53ff3a91d3adcd4954/68747470733a2f2f302e67726176617461722e636f6d2f6176617461722f31646430366631636363373162333335316266633431646136356263363366663f643d68747470732533412532462532466173736574732d63646e2e6769746875622e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d6726733d313430" width="20" />
                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/fd48bc3cff29797f5f2f251ad00c1ba3caf5ea4d" class="message f6 text-gray-dark" data-pjax="true" title="Implement multi-source Images on iOS

Summary: Mirrors Android&#39;s support for multiple sources for Image, allowing us to fetch new images as the size of the view changes.

Reviewed By: mmmulani

Differential Revision: D3615134

fbshipit-source-id: 3d0bf2b75f63a4379e0e49f2dab9aea351b31d5f">Implement multi-source Images on iOS</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-07-28T20:58:50Z">Jul 28, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/7e2e0deeb05a1a290bf24322bb9aef0acb1481a3/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L216">216</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC216">    <span class="pl-k">let</span> sources;</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="7">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/shergin" aria-label="shergin" class="tooltipped tooltipped-e">
                      <img alt="@shergin" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/22032?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/a32e1cfffbe2ae15bde608bc467c7cb5a7325566" class="message f6 text-gray-dark" data-pjax="true" title="Revert D5189017: [RN] Native implementation of &lt;Image&gt; intrinsic content size on iOS

Differential Revision: D5189017

fbshipit-source-id: 35901e0b5c289cb7ae5b4fe8b13f3da3e43e819f">Revert D5189017: [RN] Native implementation of &lt;Image&gt; intrinsic cont…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="7"><time-ago datetime="2017-10-25T15:04:39Z">Oct 25, 2017</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/e118d7a656e8272351d5188508e027d6312e53cd/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L217">217</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC217">    <span class="pl-k">let</span> style;</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    
                      <img alt="" class="avatar blame-commit-avatar" data-canonical-src="https://0.gravatar.com/avatar/1dd06f1ccc71b3351bfc41da65bc63ff?d=https%3A%2F%2Fassets-cdn.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;r=g&amp;s=140" height="20" src="https://camo.githubusercontent.com/c32b0f41270deddbd1a4ae53ff3a91d3adcd4954/68747470733a2f2f302e67726176617461722e636f6d2f6176617461722f31646430366631636363373162333335316266633431646136356263363366663f643d68747470732533412532462532466173736574732d63646e2e6769746875622e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d6726733d313430" width="20" />
                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/fd48bc3cff29797f5f2f251ad00c1ba3caf5ea4d" class="message f6 text-gray-dark" data-pjax="true" title="Implement multi-source Images on iOS

Summary: Mirrors Android&#39;s support for multiple sources for Image, allowing us to fetch new images as the size of the view changes.

Reviewed By: mmmulani

Differential Revision: D3615134

fbshipit-source-id: 3d0bf2b75f63a4379e0e49f2dab9aea351b31d5f">Implement multi-source Images on iOS</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-07-28T20:58:50Z">Jul 28, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/7e2e0deeb05a1a290bf24322bb9aef0acb1481a3/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L218">218</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC218">    <span class="pl-k">if</span> (<span class="pl-c1">Array</span>.<span class="pl-en">isArray</span>(source)) {</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="7">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/shergin" aria-label="shergin" class="tooltipped tooltipped-e">
                      <img alt="@shergin" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/22032?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/a32e1cfffbe2ae15bde608bc467c7cb5a7325566" class="message f6 text-gray-dark" data-pjax="true" title="Revert D5189017: [RN] Native implementation of &lt;Image&gt; intrinsic content size on iOS

Differential Revision: D5189017

fbshipit-source-id: 35901e0b5c289cb7ae5b4fe8b13f3da3e43e819f">Revert D5189017: [RN] Native implementation of &lt;Image&gt; intrinsic cont…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="7"><time-ago datetime="2017-10-25T15:04:39Z">Oct 25, 2017</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/e118d7a656e8272351d5188508e027d6312e53cd/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L219">219</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC219">      style <span class="pl-k">=</span> <span class="pl-en">flattenStyle</span>([<span class="pl-smi">styles</span>.<span class="pl-smi">base</span>, <span class="pl-c1">this</span>.<span class="pl-smi">props</span>.<span class="pl-c1">style</span>]) <span class="pl-k">||</span> {};</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    
                      <img alt="" class="avatar blame-commit-avatar" data-canonical-src="https://0.gravatar.com/avatar/1dd06f1ccc71b3351bfc41da65bc63ff?d=https%3A%2F%2Fassets-cdn.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;r=g&amp;s=140" height="20" src="https://camo.githubusercontent.com/c32b0f41270deddbd1a4ae53ff3a91d3adcd4954/68747470733a2f2f302e67726176617461722e636f6d2f6176617461722f31646430366631636363373162333335316266633431646136356263363366663f643d68747470732533412532462532466173736574732d63646e2e6769746875622e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d6726733d313430" width="20" />
                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/fd48bc3cff29797f5f2f251ad00c1ba3caf5ea4d" class="message f6 text-gray-dark" data-pjax="true" title="Implement multi-source Images on iOS

Summary: Mirrors Android&#39;s support for multiple sources for Image, allowing us to fetch new images as the size of the view changes.

Reviewed By: mmmulani

Differential Revision: D3615134

fbshipit-source-id: 3d0bf2b75f63a4379e0e49f2dab9aea351b31d5f">Implement multi-source Images on iOS</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-07-28T20:58:50Z">Jul 28, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/7e2e0deeb05a1a290bf24322bb9aef0acb1481a3/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L220">220</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC220">      sources <span class="pl-k">=</span> source;</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L221">221</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC221">    } <span class="pl-k">else</span> {</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="7">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/shergin" aria-label="shergin" class="tooltipped tooltipped-e">
                      <img alt="@shergin" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/22032?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/a32e1cfffbe2ae15bde608bc467c7cb5a7325566" class="message f6 text-gray-dark" data-pjax="true" title="Revert D5189017: [RN] Native implementation of &lt;Image&gt; intrinsic content size on iOS

Differential Revision: D5189017

fbshipit-source-id: 35901e0b5c289cb7ae5b4fe8b13f3da3e43e819f">Revert D5189017: [RN] Native implementation of &lt;Image&gt; intrinsic cont…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="7"><time-ago datetime="2017-10-25T15:04:39Z">Oct 25, 2017</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/e118d7a656e8272351d5188508e027d6312e53cd/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L222">222</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC222">      <span class="pl-k">const</span> {<span class="pl-c1">width</span>, <span class="pl-c1">height</span>, <span class="pl-c1">uri</span>} <span class="pl-k">=</span> source;</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="4">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/shergin" aria-label="shergin" class="tooltipped tooltipped-e">
                      <img alt="@shergin" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/22032?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/a5af841d259b6b29d95a9fb346a0ffce9c6efbfe" class="message f6 text-gray-dark" data-pjax="true" title="Prettier for View, Image and co.

Summary: Trivial beauty.

Reviewed By: sahrens

Differential Revision: D6715955

fbshipit-source-id: 3632750591f53d4673a2ce76309a0cc62946524d">Prettier for View, Image and co.</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="4"><time-ago datetime="2018-01-15T03:32:26Z">Jan 15, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/bf9cabb03c7245930c270a19816545eae1b9007d/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L223">223</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC223">      style <span class="pl-k">=</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L224">224</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC224">        <span class="pl-en">flattenStyle</span>([{width, height}, <span class="pl-smi">styles</span>.<span class="pl-smi">base</span>, <span class="pl-c1">this</span>.<span class="pl-smi">props</span>.<span class="pl-c1">style</span>]) <span class="pl-k">||</span> {};</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    
                      <img alt="" class="avatar blame-commit-avatar" data-canonical-src="https://0.gravatar.com/avatar/1dd06f1ccc71b3351bfc41da65bc63ff?d=https%3A%2F%2Fassets-cdn.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;r=g&amp;s=140" height="20" src="https://camo.githubusercontent.com/c32b0f41270deddbd1a4ae53ff3a91d3adcd4954/68747470733a2f2f302e67726176617461722e636f6d2f6176617461722f31646430366631636363373162333335316266633431646136356263363366663f643d68747470732533412532462532466173736574732d63646e2e6769746875622e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d6726733d313430" width="20" />
                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/fd48bc3cff29797f5f2f251ad00c1ba3caf5ea4d" class="message f6 text-gray-dark" data-pjax="true" title="Implement multi-source Images on iOS

Summary: Mirrors Android&#39;s support for multiple sources for Image, allowing us to fetch new images as the size of the view changes.

Reviewed By: mmmulani

Differential Revision: D3615134

fbshipit-source-id: 3d0bf2b75f63a4379e0e49f2dab9aea351b31d5f">Implement multi-source Images on iOS</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-07-28T20:58:50Z">Jul 28, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/7e2e0deeb05a1a290bf24322bb9aef0acb1481a3/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L225">225</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC225">      sources <span class="pl-k">=</span> [source];</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L226">226</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC226"></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L227">227</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC227">      <span class="pl-k">if</span> (uri <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L228">228</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC228">        <span class="pl-en">console</span>.<span class="pl-c1">warn</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>source.uri should not be an empty string<span class="pl-pds">&#39;</span></span>);</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L229">229</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC229">      }</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/rigdern" aria-label="rigdern" class="tooltipped tooltipped-e">
                      <img alt="@rigdern" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/199935?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/ee8496f364070f1b3629b94b347a0e11b2895dec" class="message f6 text-gray-dark" data-pjax="true" title="iOS: Support HTTP headers for source prop on &lt;Image&gt; components

Summary:
Allows developers to specify headers to include in the HTTP request
when fetching a remote image. For example, one might leverage this
when fetching an image from an endpoint that requires authentication:

```
&lt;Image
  style={styles.logo}
  source={{
    uri: &#39;http://facebook.github.io/react/img/logo_og.png&#39;,
    headers: {
      Authorization: &#39;someAuthToken&#39;
    }
  }}
/&gt;
```

Note that the header values must be strings.

Works on iOS and Android.

**Test plan (required)**

- Ran a small example like the one above on iOS and Android and ensured the headers were sent to the server.
- Ran a small example to ensure that \&lt;Image\&gt; components without headers still work.
- Currently using this code in our app.

Adam Comella
Microsoft Corp.
Closes https://github.com/facebook/react-native/pull/7338

Reviewed By: javache

Differential Revision: D3371458

Pulled By: nicklockwood

fbshipit-source-id: cdb24fe2572c3ae3ba82c86ad383af6d85157e20">iOS: Support HTTP headers for source prop on &lt;Image&gt; components</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-01T17:32:20Z">Jun 1, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/cec913e7ce05d26181ab4d46e2e41d72acdfb87d/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L230">230</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC230">    }</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    
                      <img alt="" class="avatar blame-commit-avatar" data-canonical-src="https://2.gravatar.com/avatar/96080ec6d0f9db106cc5aa64a55ce425?d=https%3A%2F%2Fassets-cdn.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;r=g&amp;s=140" height="20" src="https://camo.githubusercontent.com/a466150d7c4f001b3c96ab7d01d03f135593c908/68747470733a2f2f322e67726176617461722e636f6d2f6176617461722f39363038306563366430663964623130366363356161363461353563653432353f643d68747470732533412532462532466173736574732d63646e2e6769746875622e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d6726733d313430" width="20" />
                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/2e7a536aba17c49974d98ce2aeea274047ab24c2" class="message f6 text-gray-dark" data-pjax="true" title="Unbreak Image.ios.js

Summary: Don&#39;t pass `null` as default empty uri. Use `undefined` instead.

Differential Revision: D3393211

fbshipit-source-id: ac7cd385aa7f2196bc0743b8679dd2c94be4108b">Unbreak Image.ios.js</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-06T20:20:09Z">Jun 6, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/8d038572f3c42033cfcc7a7901eea0ff75bbc32a/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L231">231</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC231"></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="4">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/shergin" aria-label="shergin" class="tooltipped tooltipped-e">
                      <img alt="@shergin" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/22032?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/a5af841d259b6b29d95a9fb346a0ffce9c6efbfe" class="message f6 text-gray-dark" data-pjax="true" title="Prettier for View, Image and co.

Summary: Trivial beauty.

Reviewed By: sahrens

Differential Revision: D6715955

fbshipit-source-id: 3632750591f53d4673a2ce76309a0cc62946524d">Prettier for View, Image and co.</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="4"><time-ago datetime="2018-01-15T03:32:26Z">Jan 15, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/bf9cabb03c7245930c270a19816545eae1b9007d/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L232">232</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC232">    <span class="pl-k">const</span> <span class="pl-c1">resizeMode</span> <span class="pl-k">=</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L233">233</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC233">      <span class="pl-c1">this</span>.<span class="pl-smi">props</span>.<span class="pl-smi">resizeMode</span> <span class="pl-k">||</span> (style <span class="pl-k">||</span> {}).<span class="pl-smi">resizeMode</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span>cover<span class="pl-pds">&#39;</span></span>; <span class="pl-c"><span class="pl-c">//</span> Workaround for flow bug t7737108</span></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    
                      <img alt="" class="avatar blame-commit-avatar" data-canonical-src="https://0.gravatar.com/avatar/1dd06f1ccc71b3351bfc41da65bc63ff?d=https%3A%2F%2Fassets-cdn.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;r=g&amp;s=140" height="20" src="https://camo.githubusercontent.com/c32b0f41270deddbd1a4ae53ff3a91d3adcd4954/68747470733a2f2f302e67726176617461722e636f6d2f6176617461722f31646430366631636363373162333335316266633431646136356263363366663f643d68747470732533412532462532466173736574732d63646e2e6769746875622e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d6726733d313430" width="20" />
                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/fd48bc3cff29797f5f2f251ad00c1ba3caf5ea4d" class="message f6 text-gray-dark" data-pjax="true" title="Implement multi-source Images on iOS

Summary: Mirrors Android&#39;s support for multiple sources for Image, allowing us to fetch new images as the size of the view changes.

Reviewed By: mmmulani

Differential Revision: D3615134

fbshipit-source-id: 3d0bf2b75f63a4379e0e49f2dab9aea351b31d5f">Implement multi-source Images on iOS</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-07-28T20:58:50Z">Jul 28, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/7e2e0deeb05a1a290bf24322bb9aef0acb1481a3/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L234">234</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC234">    <span class="pl-k">const</span> <span class="pl-c1">tintColor</span> <span class="pl-k">=</span> (style <span class="pl-k">||</span> {}).<span class="pl-smi">tintColor</span>; <span class="pl-c"><span class="pl-c">//</span> Workaround for flow bug t7737108</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L235">235</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC235"></div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/winkerVSbecks" aria-label="winkerVSbecks" class="tooltipped tooltipped-e">
                      <img alt="@winkerVSbecks" class="avatar blame-commit-avatar" height="20" src="https://avatars0.githubusercontent.com/u/42671?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/d6ded2f807561720e43662f5e020fc4901211cc1" class="message f6 text-gray-dark" data-pjax="true" title="Display a warning when using src property for an Image rather than source.

Summary:When using the `Image` component with a `src` property instead of `source` the component fails silently. vjeux suggested to add a warning (https://twitter.com/Vjeux/status/704509214937317378).

Tested with the UIExplorer example on iOS and Android simulators.
Closes https://github.com/facebook/react-native/pull/6221

Differential Revision: D3011659

Pulled By: mkonicek

fb-gh-sync-id: c9bae6c802c173ef85d9c4552747db994c58906e
shipit-source-id: c9bae6c802c173ef85d9c4552747db994c58906e">Display a warning when using src property for an Image rather than so…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-03-04T15:31:38Z">Mar 4, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/e64987d7807e5b0a54429bc969cc60d60e86fc32/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L236">236</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC236">    <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">props</span>.<span class="pl-smi">src</span>) {</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="4">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/shergin" aria-label="shergin" class="tooltipped tooltipped-e">
                      <img alt="@shergin" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/22032?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/a5af841d259b6b29d95a9fb346a0ffce9c6efbfe" class="message f6 text-gray-dark" data-pjax="true" title="Prettier for View, Image and co.

Summary: Trivial beauty.

Reviewed By: sahrens

Differential Revision: D6715955

fbshipit-source-id: 3632750591f53d4673a2ce76309a0cc62946524d">Prettier for View, Image and co.</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="4"><time-ago datetime="2018-01-15T03:32:26Z">Jan 15, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/bf9cabb03c7245930c270a19816545eae1b9007d/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L237">237</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC237">      <span class="pl-en">console</span>.<span class="pl-c1">warn</span>(</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L238">238</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC238">        <span class="pl-s"><span class="pl-pds">&#39;</span>The &lt;Image&gt; component requires a `source` property rather than `src`.<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L239">239</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC239">      );</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/winkerVSbecks" aria-label="winkerVSbecks" class="tooltipped tooltipped-e">
                      <img alt="@winkerVSbecks" class="avatar blame-commit-avatar" height="20" src="https://avatars0.githubusercontent.com/u/42671?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/d6ded2f807561720e43662f5e020fc4901211cc1" class="message f6 text-gray-dark" data-pjax="true" title="Display a warning when using src property for an Image rather than source.

Summary:When using the `Image` component with a `src` property instead of `source` the component fails silently. vjeux suggested to add a warning (https://twitter.com/Vjeux/status/704509214937317378).

Tested with the UIExplorer example on iOS and Android simulators.
Closes https://github.com/facebook/react-native/pull/6221

Differential Revision: D3011659

Pulled By: mkonicek

fb-gh-sync-id: c9bae6c802c173ef85d9c4552747db994c58906e
shipit-source-id: c9bae6c802c173ef85d9c4552747db994c58906e">Display a warning when using src property for an Image rather than so…</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-03-04T15:31:38Z">Mar 4, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/e64987d7807e5b0a54429bc969cc60d60e86fc32/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L240">240</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC240">    }</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L241">241</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC241"></div>
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
                <a href="/facebook/react-native/blame/29e76591110de914debec9b2458940baf79581e8/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L242">242</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC242">    <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">props</span>.<span class="pl-smi">children</span>) {</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="4">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    <a href="/shergin" aria-label="shergin" class="tooltipped tooltipped-e">
                      <img alt="@shergin" class="avatar blame-commit-avatar" height="20" src="https://avatars3.githubusercontent.com/u/22032?s=40&amp;v=4" width="20" />
</a>                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/a5af841d259b6b29d95a9fb346a0ffce9c6efbfe" class="message f6 text-gray-dark" data-pjax="true" title="Prettier for View, Image and co.

Summary: Trivial beauty.

Reviewed By: sahrens

Differential Revision: D6715955

fbshipit-source-id: 3632750591f53d4673a2ce76309a0cc62946524d">Prettier for View, Image and co.</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="4"><time-ago datetime="2018-01-15T03:32:26Z">Jan 15, 2018</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/bf9cabb03c7245930c270a19816545eae1b9007d/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L243">243</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC243">      <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L244">244</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC244">        <span class="pl-s"><span class="pl-pds">&#39;</span>The &lt;Image&gt; component cannot contain children. If you want to render content on top of the image, consider using the &lt;ImageBackground&gt; component or absolute positioning.<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L245">245</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC245">      );</div>
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
                <a href="/facebook/react-native/blame/29e76591110de914debec9b2458940baf79581e8/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L246">246</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC246">    }</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L247">247</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC247"></div>
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
                        <a href="/facebook/react-native/commit/2cbc9127560c5f0f89ae5aa6ff863b1818f1c7c3" class="message f6 text-gray-dark" data-pjax="true" title="Added support for width &amp; height for text images

Summary:
public

Previously, `&lt;Image&gt;` elements embedded inside `&lt;Text&gt;` ignored all style attributes and props apart from `source`. Now, the `width`, `height` and `resizeMode` styles are observed. I&#39;ve also added a transparent placeholder to be displayed while the image is loading, to prevent the layout from changing after the image has loaded.

Reviewed By: javache

Differential Revision: D2838659

fb-gh-sync-id: c27f9685b6976705ac2b24075922b2bf247e06ba">Added support for width &amp; height for text images</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-01-22T19:31:40Z">Jan 22, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/f20453baee8c1cbe07e8f864a7c13be57537e865/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L248">248</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC248">    <span class="pl-k">return</span> (</div>
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
                        <a href="/facebook/react-native/commit/748a5078619340cf441594e66af727664823cc3d" class="message f6 text-gray-dark" data-pjax="true" title="Simplified Image.js

Summary:
Now that we no longer have a separate NetworkImageView implementation, we can remove that code path from Image.js

I&#39;ve also moved the prefetch method into RCTImageViewManager for consistency with the getImageSize method, which means we no longer need to export the RCTImageLoader module to js.

Reviewed By: javache

Differential Revision: D3398157

fbshipit-source-id: fbbcf90a61549831ad28bad0cb3b50c375aae32c">Simplified Image.js</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-07T12:29:13Z">Jun 7, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/592d5fb8f37fd9a250554cd1485bf477a262b19e/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L249">249</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC249">      <span class="pl-k">&lt;</span>RCTImageView</div>
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
                        <a href="/facebook/react-native/commit/2cbc9127560c5f0f89ae5aa6ff863b1818f1c7c3" class="message f6 text-gray-dark" data-pjax="true" title="Added support for width &amp; height for text images

Summary:
public

Previously, `&lt;Image&gt;` elements embedded inside `&lt;Text&gt;` ignored all style attributes and props apart from `source`. Now, the `width`, `height` and `resizeMode` styles are observed. I&#39;ve also added a transparent placeholder to be displayed while the image is loading, to prevent the layout from changing after the image has loaded.

Reviewed By: javache

Differential Revision: D2838659

fb-gh-sync-id: c27f9685b6976705ac2b24075922b2bf247e06ba">Added support for width &amp; height for text images</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-01-22T19:31:40Z">Jan 22, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/f20453baee8c1cbe07e8f864a7c13be57537e865/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L250">250</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC250">        {<span class="pl-k">...</span><span class="pl-c1">this</span>.<span class="pl-smi">props</span>}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L251">251</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC251">        style<span class="pl-k">=</span>{style}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L252">252</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC252">        resizeMode<span class="pl-k">=</span>{resizeMode}</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L253">253</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC253">        tintColor<span class="pl-k">=</span>{tintColor}</div>
                </div>
            </div>
          </div>

          <div class="blame-hunk d-flex border-gray-light border-bottom">

            <div class="blame-commit flex-self-stretch mr-1" data-heat="10">
              <div class="blame-commit-info pl-1 pr-2">

                <div class="no-wrap d-flex flex-items-start">
                    
                      <img alt="" class="avatar blame-commit-avatar" data-canonical-src="https://0.gravatar.com/avatar/1dd06f1ccc71b3351bfc41da65bc63ff?d=https%3A%2F%2Fassets-cdn.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;r=g&amp;s=140" height="20" src="https://camo.githubusercontent.com/c32b0f41270deddbd1a4ae53ff3a91d3adcd4954/68747470733a2f2f302e67726176617461722e636f6d2f6176617461722f31646430366631636363373162333335316266633431646136356263363366663f643d68747470732533412532462532466173736574732d63646e2e6769746875622e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d6726733d313430" width="20" />
                  <div class="blame-commit-content d-flex no-wrap flex-items-center">
                    <div class="blame-commit-message overflow-hidden pt-1 f6">
                        <a href="/facebook/react-native/commit/fd48bc3cff29797f5f2f251ad00c1ba3caf5ea4d" class="message f6 text-gray-dark" data-pjax="true" title="Implement multi-source Images on iOS

Summary: Mirrors Android&#39;s support for multiple sources for Image, allowing us to fetch new images as the size of the view changes.

Reviewed By: mmmulani

Differential Revision: D3615134

fbshipit-source-id: 3d0bf2b75f63a4379e0e49f2dab9aea351b31d5f">Implement multi-source Images on iOS</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-07-28T20:58:50Z">Jul 28, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/7e2e0deeb05a1a290bf24322bb9aef0acb1481a3/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L254">254</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC254">        source<span class="pl-k">=</span>{sources}</div>
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
                        <a href="/facebook/react-native/commit/2cbc9127560c5f0f89ae5aa6ff863b1818f1c7c3" class="message f6 text-gray-dark" data-pjax="true" title="Added support for width &amp; height for text images

Summary:
public

Previously, `&lt;Image&gt;` elements embedded inside `&lt;Text&gt;` ignored all style attributes and props apart from `source`. Now, the `width`, `height` and `resizeMode` styles are observed. I&#39;ve also added a transparent placeholder to be displayed while the image is loading, to prevent the layout from changing after the image has loaded.

Reviewed By: javache

Differential Revision: D2838659

fb-gh-sync-id: c27f9685b6976705ac2b24075922b2bf247e06ba">Added support for width &amp; height for text images</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-01-22T19:31:40Z">Jan 22, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/f20453baee8c1cbe07e8f864a7c13be57537e865/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L255">255</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC255">      <span class="pl-k">/</span><span class="pl-k">&gt;</span></div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L256">256</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC256">    );</div>
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
                <a href="/facebook/react-native/blame/24b942faeb67ede5b042660f75720d5e6c6bd429/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L257">257</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC257">  },</div>
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
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L258">258</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC258">});</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L259">259</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC259"></div>
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
                        <a href="/facebook/react-native/commit/748a5078619340cf441594e66af727664823cc3d" class="message f6 text-gray-dark" data-pjax="true" title="Simplified Image.js

Summary:
Now that we no longer have a separate NetworkImageView implementation, we can remove that code path from Image.js

I&#39;ve also moved the prefetch method into RCTImageViewManager for consistency with the getImageSize method, which means we no longer need to export the RCTImageLoader module to js.

Reviewed By: javache

Differential Revision: D3398157

fbshipit-source-id: fbbcf90a61549831ad28bad0cb3b50c375aae32c">Simplified Image.js</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-07T12:29:13Z">Jun 7, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/592d5fb8f37fd9a250554cd1485bf477a262b19e/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L260">260</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC260"><span class="pl-k">const</span> <span class="pl-c1">styles</span> <span class="pl-k">=</span> <span class="pl-c1">StyleSheet</span>.<span class="pl-en">create</span>({</div>
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
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L261">261</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC261">  base<span class="pl-k">:</span> {</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L262">262</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC262">    overflow<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>hidden<span class="pl-pds">&#39;</span></span>,</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L263">263</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC263">  },</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L264">264</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC264">});</div>
                </div>
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L265">265</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC265"></div>
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
                        <a href="/facebook/react-native/commit/748a5078619340cf441594e66af727664823cc3d" class="message f6 text-gray-dark" data-pjax="true" title="Simplified Image.js

Summary:
Now that we no longer have a separate NetworkImageView implementation, we can remove that code path from Image.js

I&#39;ve also moved the prefetch method into RCTImageViewManager for consistency with the getImageSize method, which means we no longer need to export the RCTImageLoader module to js.

Reviewed By: javache

Differential Revision: D3398157

fbshipit-source-id: fbbcf90a61549831ad28bad0cb3b50c375aae32c">Simplified Image.js</a>
                    </div>
                  </div>
                  <div class="blame-commit-date ml-3" data-heat="10"><time-ago datetime="2016-06-07T12:29:13Z">Jun 7, 2016</time-ago></div>
                </div>
              </div>
            </div>

            <div class="blob-reblame pl-1 pr-1">
                <a href="/facebook/react-native/blame/592d5fb8f37fd9a250554cd1485bf477a262b19e/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L266">266</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC266"><span class="pl-k">const</span> <span class="pl-c1">RCTImageView</span> <span class="pl-k">=</span> <span class="pl-en">requireNativeComponent</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>RCTImageView<span class="pl-pds">&#39;</span></span>, Image);</div>
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
                <a href="/facebook/react-native/blame/24b942faeb67ede5b042660f75720d5e6c6bd429/Libraries/Image/Image.ios.js"
                  aria-label="View blame prior to this change" class="reblame-link link-hover-blue no-underline tooltipped tooltipped-e d-inline-block pr-1">
                  <svg aria-hidden="true" class="octicon octicon-versions" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/></svg>
                </a>
            </div>

            <div class="width-full">
                <div class="d-flex flex-justify-start flex-items-start">
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L267">267</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC267"></div>
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
                  <div class="blob-num blame-blob-num bg-gray-light js-line-number" id="L268">268</div>
                  <div class="blob-code blob-code-inner js-file-line" id="LC268"><span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> Image;</div>
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
      <li class="mr-3">&copy; 2018 <span title="0.21609s from unicorn-3305610588-pgxt6">GitHub</span>, Inc.</li>
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

