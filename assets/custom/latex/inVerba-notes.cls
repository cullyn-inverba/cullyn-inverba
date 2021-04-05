% ███╗   ██╗ ██████╗ ████████╗███████╗███████╗
% ████╗  ██║██╔═══██╗╚══██╔══╝██╔════╝██╔════╝
% ██╔██╗ ██║██║   ██║   ██║   █████╗  ███████╗
% ██║╚██╗██║██║   ██║   ██║   ██╔══╝  ╚════██║
% ██║ ╚████║╚██████╔╝   ██║   ███████╗███████║
% ╚═╝  ╚═══╝ ╚═════╝    ╚═╝   ╚══════╝╚══════╝
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
        \titlespacing*{\subsection}{0 em}
        {1ex plus 7ex minus 1ex}
        {1ex plus 0ex minus 0ex}
    % \titleformat{\subsubsection}{\bfseries\color{ssec}}{}{0pt}{}
    %     \titlespacing*{\subsubsection}{0 em}
    %     {1ex plus 5ex minus 1ex}
    %     {1ex plus 0ex minus 0ex}

% ╔═╗┌─┐┌┐┌┌┬┐┌─┐┌┐┌┌┬┐┌─┐
% ║  │ ││││ │ ├┤ │││ │ └─┐
% ╚═╝└─┘┘└┘ ┴ └─┘┘└┘ ┴ └─┘
\RequirePackage{titletoc}
    \renewcommand{\contentsname}{\color{title-color}\theTitle}
    \setcounter{tocdepth}{2}
    \titlecontents{chapter}[0 em]
        {\large\bfseries\color{title-color}}{}{}
        {\hfill}
    \titlecontents{section}[0.809 em]
        {\bfseries}{}{}
        {\hfill\thecontentspage}
    \titlecontents{subsection}[1.618 em]
        {\color{minor}}{}{}
        {\titlerule*[0.42 em]{.}\thecontentspage}
    % \titlecontents{subsubsection}[2.427  em]
    %     {\color{minimal}}{}{}
    %     {\titlerule*[0.42 em]{.}\thecontentspage}
    
%  ╦  ┬┌─┐┌┬┐┌─┐
%  ║  │└─┐ │ └─┐
%  ╩═╝┴└─┘ ┴ └─┘
\RequirePackage{enumitem}
    \setlist[itemize]{itemsep=-0.3ex,topsep=-0.3ex,partopsep=-0.3ex}
    \setlist[itemize,1]{
        label=\small\(\color{minor}\bullet\), 
        leftmargin=\dimexpr1em
    }
    \setlist[itemize,2]{
        label=\small\(\circ\),
        leftmargin=\dimexpr1em
    }
    \setlist[itemize,3]{
        label=\small\color{minor}\textbullet,
        leftmargin=\dimexpr1em
    }
    \setlist[itemize,4]{leftmargin=\dimexpr1em}

% ╔═╗┌─┐┌┐┌┌┬┐┌─┐
% ╠╣ │ ││││ │ └─┐
% ╚  └─┘┘└┘ ┴ └─┘
\RequirePackage[T1]{fontenc}
\RequirePackage{cmbright}
    \SetSymbolFont{largesymbols}{normal}{OMX}{iwona}{m}{n}
    \SetSymbolFont{largesymbols}{bold}{OMX}{iwona}{b}{n}
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

% ╦ ╦┌┬┐┬┬  ┬┌┬┐┬ ┬
% ║ ║ │ ││  │ │ └┬┘
% ╚═╝ ┴ ┴┴─┘┴ ┴  ┴ 
\RequirePackage[hidelinks]{hyperref}
    \hypersetup{
        colorlinks=false,
        linktoc=all,    
        linkcolor=link,
        filecolor=link,      
        urlcolor=link, 
    }

\RequirePackage{graphicx, booktabs, multirow, multicol, makecell, xcolor, pagecolor, changepage, apacite}
\RequirePackage[justification=centering]{caption}
    \captionsetup[table]{
        skip=3pt,
        labelformat=empty,
    }

\RequirePackage{siunitx}
    \sisetup{
        inter-unit-product = \ensuremath{{\cdot}},
}


% ╔═╗┌─┐┌┬┐┌┬┐┌─┐┌┐┌┌┬┐┌─┐
% ║  │ │││││││├─┤│││ ││└─┐
% ╚═╝└─┘┴ ┴┴ ┴┴ ┴┘└┘─┴┘└─┘
\renewcommand{\emph}[1]{{\color{emph}#1}} 
\newcommand{\amp}[1]{{\color{amp}#1}}
\newcommand{\stress}[1]{{\color{stress}#1}}
\newcommand{\basec}[1]{{\color{text}#1}}
\newcommand{\minor}[1]{{\color{minor}#1}}
\newcommand{\minimal}[1]{{\color{minimal}#1}}

\newcommand{\textbfl}[1]{\textbf{#1}\label{#1}}
\newcommand{\textbfe}[1]{\textbf{#1}\label{eq:#1}}

\newcommand{\ddd}[1]{{\color{jarg}\textbfl{#1}}}

\newcommand{\link}[2]{\href{#1}{\color{link}{\underline{{#2}}}}}

\newcommand{\ulink}[1]{{\color{ilink}{#1}\small\(\,^\uparrow\)}}
\newcommand{\dlink}[1]{{\color{ilink}{#1}\small\(\,^\downarrow\)}}

\newcommand{\mc}[1]{\makecell[c]{#1}}
\newcommand{\mr}[1]{\makecell[r]{#1}}

\newcommand{\Arrow}{\raisebox{-.5\height}{\scalebox{2}{$~\rightarrow~$}}}
\newcommand{\Image}[2]{\raisebox{-.5\height}{\includegraphics[width=#1]{#2}}}

%  ██████╗ ██████╗ ██╗      ██████╗ ██████╗ ███████╗
% ██╔════╝██╔═══██╗██║     ██╔═══██╗██╔══██╗██╔════╝
% ██║     ██║   ██║██║     ██║   ██║██████╔╝███████╗
% ██║     ██║   ██║██║     ██║   ██║██╔══██╗╚════██║
% ╚██████╗╚██████╔╝███████╗╚██████╔╝██║  ██║███████║
%  ╚═════╝ ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝
% ╔╗ ┌─┐┌─┐┌─┐
% ╠╩╗├─┤└─┐├┤ 
% ╚═╝┴ ┴└─┘└─┘
% Background: #1f1f1f #141414 
\definecolor{back}{HTML}{1f1f1f} 
\pagecolor{back} 
\definecolor{dark}{HTML}{141414}

% Text: #e0e0e0 #949494 #6b6b6b 
\definecolor{text}{HTML}{e0e0e0}  
\color{text} 
\definecolor{minor}{HTML}{949494} 
\definecolor{minimal}{HTML}{6b6b6b} 
\definecolor{title-color}{HTML}{78b07a}

% Emphasis: #f5b17a #ff9e4f
\definecolor{emph}{HTML}{f5b17a} 
\definecolor{stress}{HTML}{ff9e4f} 
\definecolor{amp}{HTML}{f5769c}

% Titles: #4ca9f5 #7abef5 #b0d0eb #cedeeb
\definecolor{chap}{HTML}{4ca9f5} 
    \newcommand{\chap}[1]{{\color{chap}{#1}}}
\definecolor{sec}{HTML}{7abef5} 
    \newcommand{\tsec}[1]{{\color{sec}{#1}}}
\definecolor{ssec}{HTML}{b0d0eb} 
    \newcommand{\ssec}[1]{{\color{ssec}{#1}}}
\definecolor{jarg}{HTML}{cedeeb} 
    \newcommand{\jjj}[1]{{\color{jarg}{\textbf{#1}}}}
    

% Links: #99e09b #78b07a
\definecolor{link}{HTML}{99e09b}
\definecolor{ilink}{HTML}{78b07a}
    \newcommand{\igg}[1]{{\color{ilink}{#1}}}
    

% ╔╦╗┬┌─┐┬ ┬┌─┐┌┬┐┌─┐┌┬┐┬ ┬
%  ║║││  ├─┤│ │ │ │ ││││└┬┘
% ═╩╝┴└─┘┴ ┴└─┘ ┴ └─┘┴ ┴ ┴ 
% Charge: #f5736c → #5f89f5
\definecolor{rrr}{HTML}{f5736c}
    \newcommand{\rrr}[1]{{\color{rrr}{#1}}}
\definecolor{bbb}{HTML}{5f89f5}
    \newcommand{\bbb}[1]{{\color{bbb}{#1}}}

% Boolean: #57d9c3 → #eb4972
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
%           amp #f5769c
%                          ____________              
%                         /\  ________ \         
%    xxx #c28bf0         /  \ \______/\ \        #f5b17a  emph
%                       / /\ \ \  / /\ \ \         #ff9e4f stress
%                      / / /\ \ \/ / /\ \ \
%                     / / /__\_\/ / /__\_\ \
%                    / /_/_______/ /________\
%   bbb  #5f89f5     \ \ \______ \ \______  /
%                     \ \ \  / /\ \ \  / / /
%                      \ \ \/ / /\ \ \/ / /      #f0dd86 yyy
%                       \ \/ / /__\_\/ / /      
%       chap #4ca9f5     \  / /______\/ /
%      sec #7abef5        \/___________/
%    ssec #b0d0eb        
%  jarg #cedeeb                              #99e09b link
%                         #57d9c3 ttt          #78b07a ilink
%                                             
%  #ebebeb                       
%    /\ 
%   /  \ #e0e0e0 foreground 
%  / /\ \ 
%  \ \/ / 
%   \ \/ #b0b0b0 
%   /\ \ 
%   \ \/ #949494 minor
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

% ╔═╗┌─┐┌┬┐┬┌─┐┌┐┌┌─┐
% ║ ║├─┘ │ ││ ││││└─┐
% ╚═╝┴   ┴ ┴└─┘┘└┘└─┘
\DeclareOption{plain}{
    \pagecolor{white}
    \color{black}

    \titleformat{\chapter}{\LARGE\bfseries}{}{0pt}{\centering}
    \titleformat{\section}{\Large\bfseries}{}{0pt}{}
    \titleformat{\subsection}{\large\bfseries}{}{0pt}{}
    \titleformat{\subsubsection}{\large\bfseries}{}{0pt}{}

        % Charge: #d64242 → #225ed6
    \definecolor{rrr}{HTML}{d64242}
    \definecolor{bbb}{HTML}{225ed6}
    \definecolor{text}{HTML}{000000}  

    \hypersetup{colorlinks,linkcolor={bbb},citecolor={bbb},urlcolor={bbb}} 
}

\DeclareOption{basic}{
    \pagestyle{fancy}
    \lhead{\userName}
    \chead{\textsc{\theTitle}}
    \rhead{\today}    
    \lfoot{\class}
    \cfoot{\textsc{\institution}}
    \rfoot{\thepage}

    \setenumerate{align=left, leftmargin=0pt, labelindent=\parindent, listparindent=\parindent, labelwidth=0pt, itemindent=!}

    \setlist[itemize,1]{
        label=\circ, 
        leftmargin=\dimexpr26pt -1 em
    }
    \setlist[itemize,2]{
        label=\textbullet,
        leftmargin=\dimexpr26pt -1 em
    }
    \setlist[itemize,3]{
        label=\small\color{minor}\textbullet,
        leftmargin=\dimexpr26pt -1 em
    }
}

\DeclareOption{quiz}{
    \setlist[itemize,1]{
        label=\circ, 
        leftmargin=\dimexpr26pt -1 em
    }
    \setlist[itemize,2]{
        label=\textbullet,
        leftmargin=\dimexpr26pt -1 em
    }
    \setlist[itemize,3]{
        label=\small\color{minor}\textbullet,
        leftmargin=\dimexpr26pt -1 em
    }
    \color{minimal}
    \lhead{}
}

\ProcessOptions\relax