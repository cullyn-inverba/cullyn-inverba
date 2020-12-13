% ███╗   ██╗ ██████╗ ████████╗███████╗███████╗
% ████╗  ██║██╔═══██╗╚══██╔══╝██╔════╝██╔════╝
% ██╔██╗ ██║██║   ██║   ██║   █████╗  ███████╗
% ██║╚██╗██║██║   ██║   ██║   ██╔══╝  ╚════██║
% ██║ ╚████║╚██████╔╝   ██║   ███████╗███████║
% ╚═╝  ╚═══╝ ╚═════╝    ╚═╝   ╚══════╝╚══════╝
%   
%  .--.      .-'.      .--.      .--.      .--.      .--.      .`-.
% |:::.\::::::::.\::::::::.\::::::::.\::::::::.\::::::::.\::::::::.\
% |::::.\::: https://github.com/cullyn-inverba/Notes ::::.\::::::::.\
% |:::::.\::::::::.\::::::::.\::::::::.\::::::::.\::::::::.\::::::::.\
%         `--'      `.-'      `--'      `--'      `--'      `-.'      `

\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{inVerba-notes}[2020/12/09 Multipurpose hierarchical structured notes]
\LoadClass[12pt,a4paper]{report}

% ╔═╗┌─┐┌─┐┌─┐
% ╠═╝├─┤│ ┬├┤ 
% ╩  ┴ ┴└─┘└─┘

\RequirePackage[hmargin=2.4cm, vmargin=2cm, headsep=1.3em]{geometry} 
    \raggedright 
    \setlength\headheight{16pt}
    \setlength{\parskip}{1ex plus 2ex minus 0ex}
    \renewcommand{\baselinestretch}{1.2} 
\RequirePackage[parfill]{parskip}

% ╔═╗┌─┐┌─┐┌┬┐┬┌─┐┌┐┌┌─┐
% ╚═╗├┤ │   │ ││ ││││└─┐
% ╚═╝└─┘└─┘ ┴ ┴└─┘┘└┘└─┘

\RequirePackage{titlesec}
    \titleformat{\chapter}{\LARGE\bfseries\color{chap}}{}{0pt}{\centering}
        \titlespacing*{\chapter}{0pt}{-64pt}{4pt} 
    \titleformat{\section}{\Large\bfseries\color{sec}}{}{0pt}{}
        \titlespacing*{\section}{0 em}
        {1ex plus 7ex minus 1ex}
        {1ex plus .0ex minus .0ex}
    \titleformat{\subsection}{\large\bfseries\color{ssec}}{}{0pt}{}
        \titlespacing*{\subsection}{-1em}
        {1ex plus 7ex minus 1ex}
        {1ex plus 0ex minus 0ex}

% ╔═╗┌─┐┌┐┌┌┬┐┌─┐┌┐┌┌┬┐┌─┐
% ║  │ ││││ │ ├┤ │││ │ └─┐
% ╚═╝└─┘┘└┘ ┴ └─┘┘└┘ ┴ └─┘

\RequirePackage{titletoc}
    \renewcommand{\contentsname}{\color{title-color}\theTitle}
    \titlecontents{chapter}[0 em]
        {\large\bfseries}{}{}
        {\hfill \thecontentspage}
    \titlecontents{section}[1.618 em]
        {\color{minor}\bfseries}{}{}
        {\normalfont\hfill \thecontentspage}
    \titlecontents{subsection}[3.236 em]
        {\color{minimal}}{}{}
        {\titlerule*[0.42 em]{.}\thecontentspage}
    
%  ╦  ┬┌─┐┌┬┐┌─┐
%  ║  │└─┐ │ └─┐
%  ╩═╝┴└─┘ ┴ └─┘

\RequirePackage{enumitem}
    \setlist[itemize,1]{
        label=\small\(\triangleright\), 
        leftmargin=\dimexpr26pt -1 em
    }
    \setlist[itemize,2]{
        label=\small\(\circ\),
        leftmargin=\dimexpr26pt -1 em
    }
    \setlist[itemize,3]{
        label=\small\color{minor}\textbullet,
        leftmargin=\dimexpr26pt -1 em
    }
    \setlist[itemize,4]{leftmargin=\dimexpr26pt -1 em}

% ╔═╗┌─┐┌┐┌┌┬┐┌─┐
% ╠╣ │ ││││ │ └─┐
% ╚  └─┘┘└┘ ┴ └─┘

\RequirePackage[T1]{fontenc}
\RequirePackage{cmbright}
    \SetSymbolFont{largesymbols}{normal}{OMX}{iwona}{m}{n}
\RequirePackage[sfdefault, light]{roboto}

% ╦ ╦┌─┐┌─┐┌┬┐┌─┐┬─┐   ┬   ╔═╗┌─┐┌─┐┌┬┐┌─┐┬─┐
% ╠═╣├┤ ├─┤ ││├┤ ├┬┘  ┌┼─  ╠╣ │ ││ │ │ ├┤ ├┬┘
% ╩ ╩└─┘┴ ┴─┴┘└─┘┴└─  └┘   ╚  └─┘└─┘ ┴ └─┘┴└─

\RequirePackage{fancyhdr}
    \pagestyle{fancy}
    \fancyhead{}
        \renewcommand{\chaptermark}[1]{\markboth{#1}{}}
        \renewcommand{\sectionmark}[1]{\markright{#1}{}}
    \fancyhead[L]{\hyperlink{ToC}{\nouppercase\leftmark}}
    \fancyhead[R]{\hyperlink{ToC}{\nouppercase\rightmark}}
        
    \cfoot{\hyperlink{ToC}{\thepage}}

% ╔╦╗┌─┐┌┬┐┬ ┬
% ║║║├─┤ │ ├─┤
% ╩ ╩┴ ┴ ┴ ┴ ┴

\RequirePackage{amsmath, mathtools, amssymb, MnSymbol}
    \numberwithin{equation}{section}

% ╔═╗┬ ┬┌─┐┌┬┐┬┌─┐┌┬┐┬─┐┬ ┬
% ║  ├─┤├┤ ││││└─┐ │ ├┬┘└┬┘
% ╚═╝┴ ┴└─┘┴ ┴┴└─┘ ┴ ┴└─ ┴

\RequirePackage{chemmacros, chemfig, chemformula, chemgreek, ghsystem}
    \setchemfig{atom sep=2.5em, cram width=1ex}
    \chemsetup{modules = all}

% ╦ ╦┌┬┐┬┬  ┬┌┬┐┬ ┬
% ║ ║ │ ││  │ │ └┬┘
% ╚═╝ ┴ ┴┴─┘┴ ┴  ┴ 

\RequirePackage{graphicx, booktabs, multirow, multicol, makecell, xcolor, pagecolor, changepage}
\RequirePackage[justification=centering]{caption}
    \captionsetup[table]{
        skip=3pt,
        labelformat=empty,
    }

\RequirePackage{siunitx}
    \sisetup{
        inter-unit-product = \ensuremath{{\cdot}},
        tight-spacing = true,
        per-mode = symbol
}

\RequirePackage[hidelinks]{hyperref}
    \hypersetup{
        colorlinks=false,
        linktoc=all,    
        linkcolor=link,
        filecolor=link,      
        urlcolor=link, 
    }

% ╔═╗┌─┐┌┬┐┌┬┐┌─┐┌┐┌┌┬┐┌─┐
% ║  │ │││││││├─┤│││ ││└─┐
% ╚═╝└─┘┴ ┴┴ ┴┴ ┴┘└┘─┴┘└─┘

\newcommand{\textbfl}[2]{\textbf{#1}\label{#1}}


%  ██████╗ ██████╗ ██╗      ██████╗ ██████╗ ███████╗
% ██╔════╝██╔═══██╗██║     ██╔═══██╗██╔══██╗██╔════╝
% ██║     ██║   ██║██║     ██║   ██║██████╔╝███████╗
% ██║     ██║   ██║██║     ██║   ██║██╔══██╗╚════██║
% ╚██████╗╚██████╔╝███████╗╚██████╔╝██║  ██║███████║
%  ╚═════╝ ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝

% ╔╗ ┌─┐┌─┐┌─┐
% ╠╩╗├─┤└─┐├┤ 
% ╚═╝┴ ┴└─┘└─┘

% Background: #1f1f1f
\definecolor{back}{HTML}{1f1f1f} 
\pagecolor{back} 

% Text: #e0e0e0 #b0b0b0 #6b6b6b 
\definecolor{text}{HTML}{e0e0e0}  
\color{text} 
\definecolor{minor}{HTML}{b0b0b0} 
\definecolor{minimal}{HTML}{6b6b6b} 

% Emphasis: #f5b17a #ff9e4f
\definecolor{emph}{HTML}{f5b17a} 
    \renewcommand{\emph}[1]{{\color{emph}#1}} 
\definecolor{stress}{HTML}{ff9e4f} 
    \newcommand{\stress}[1]{{\color{stress}#1}}

% Titles: #4ca9f5 #7abef5 #b0d0eb #cedeeb
\definecolor{chap}{HTML}{4ca9f5} 
\definecolor{sec}{HTML}{7abef5} 
\definecolor{ssec}{HTML}{b0d0eb} 
\definecolor{jarg}{HTML}{cedeeb} 
    \newcommand{\jargon}[1]{{\color{jarg}\bfseries{#1}}}

% Links: #99e09b #78b07a #496b4a 
\definecolor{link}{HTML}{99e09b} 
    \newcommand{\link}[2]{\href{#1}{\color{link}{\underline{{#2}}}}}
\definecolor{title-color}{HTML}{78b07a}
\definecolor{ulink}{HTML}{78b07a} 
    \newcommand{\ulink}[1]{{\color{ulink}{#1}\small\(\,^\rcurvearrowne\)}}
\definecolor{dlink}{HTML}{496b4a} 
    \newcommand{\dlink}[1]{{\color{dlink}{#1}\small\(\,^\lcurvearrowse\)}}

% ╔╦╗┬┌─┐┬ ┬┌─┐┌┬┐┌─┐┌┬┐┬ ┬
%  ║║││  ├─┤│ │ │ │ ││││└┬┘
% ═╩╝┴└─┘┴ ┴└─┘ ┴ └─┘┴ ┴ ┴ 

% Charge: #f5736c-> #5f89f5
\definecolor{rrr}{HTML}{f5736c}
    \newcommand{\rrr}[1]{{\color{rrr}{#1}}}
\definecolor{bbb}{HTML}{5f89f5}
    \newcommand{\bbb}[1]{{\color{bbb}{#1}}}

% Boolean: #57d9c3 -> #eb4972
\definecolor{ttt}{HTML}{57d9c3}
    \newcommand{\ttt}[1]{{\color{ttt}{#1}}}
\definecolor{fff}{HTML}{eb4972}
    \newcommand{\fff}[1]{{\color{fff}{#1}}}

% Relative: #c28bf0 → #f0dd86
\definecolor{xxx}{HTML}{c28bf0}  
    \newcommand{\xxx}[1]{{\color{xxx}{#1}}}
\definecolor{yyy}{HTML}{f0dd86}  
    \newcommand{\yyy}[1]{{\color{yyy}{#1}}}

%                  ╦═╗┌─┐┌─┐┌─┐┬─┐┌─┐┌┐┌┌─┐┌─┐
%                  ╠╦╝├┤ ├┤ ├┤ ├┬┘├┤ ││││  ├┤ 
%                  ╩╚═└─┘└  └─┘┴└─└─┘┘└┘└─┘└─┘

%                 fff #eb4972       #f5736c rrr
%         
%                          ____________              
%                         /\  ________ \         
%    xxx #c28bf0         /  \ \______/\ \        #f5b17a  emph
%                       / /\ \ \  / /\ \ \         #ff9e4f stress
%                      / / /\ \ \/ / /\ \ \
%                     / / /__\_\/ / /__\_\ \
%                    / /_/_______/ /________\
%   rrr  #5f89f5     \ \ \______ \ \______  /
%                     \ \ \  / /\ \ \  / / /
%                      \ \ \/ / /\ \ \/ / /      #f0dd86 yyy
%                       \ \/ / /__\_\/ / /      
%       chap #4ca9f5     \  / /______\/ /
%      sec #7abef5        \/___________/
%    ssec #b0d0eb        
%  jarg #cedeeb                              #99e09b link
%                         #57d9c3 ttt          #78b07a ulink
%                                                #496b4a dlink
%  #ebebeb                       
%    /\ 
%   /  \ #e0e0e0 foreground 
%  / /\ \ 
%  \ \/ / 
%   \ \/ #b0b0b0 minor
%   /\ \ 
%   \ \/ #949494
%   /\ \ 
%   \ \/ #808080
%   /\ \ 
%  / /\ \ #6b6b6b minimal
%  \ \ \/ 
%  /\ \ \
%  \ \/ / #4f4f4f
%   \ \/
%   /\ \ #404040
%   \ \/
%   /\ \ #2f2f2f
%   \ \/
%   /\ \ #262626
%  / /\ \
%  \ \/ / 
%   \  / #1f1f1f background
%    \/                      
%  #141414 
%                            
%                            
%                            
%                            
%                            
%                            
%                            
%                            
%                            