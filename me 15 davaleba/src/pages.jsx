import {  NavLink, Outlet } from "react-router-dom";
import { useState } from 'react'
import { createSearchParams, useNavigate } from "react-router-dom";


export const RootLayout = () => {

    const links = ['Css','Django','Git','GitHub','Html','Python']
    const random = Math.floor(Math.random() * links.length);
    const [text,settext] = useState('')

    const navigate = useNavigate();

    const button = () => {
    navigate({
        pathname: text,
        search: createSearchParams({
        }).toString()
    });
        settext('')
    }

    return (
      <div>
        <header>
          <nav>
            <div className="main">
                <div className="border1">
                    <h1>wiki</h1>
                    <input 
                    type="text" 
                    value={text}
                    onChange={(event) => settext(event.target.value)}
                    />
                    <button onClick={button}>enter</button>
                    <br />
                    <NavLink to='/'>home</NavLink>
                    <br />
                    <NavLink to={links[random]}>random entry</NavLink>
                </div>
                <main>
                    <Outlet />
                </main>
            </div>
          </nav>
        </header>
        
      </div>
    );
  };


  export const Home = () => {
    return (<div className="border2">
    <h1>available entries</h1>
    <NavLink to='css'> Css</NavLink>
    <br />
    <NavLink to='django'>Django</NavLink>
    <br />
    <NavLink to='git'>Git</NavLink>
    <br />
    <NavLink to='gitHub'>Git Hub</NavLink>
    <br />
    <NavLink to='html'>Html</NavLink>
    <br />
    <NavLink to='python'>Python</NavLink>
    </div>)
  };

  export const Css = () => {
    return (<>
    <h1 className="wiki">Css</h1>
    <div className="wiki">CSS is designed to enable the separation of content and presentation, 
      including layout, colors, and fonts.[3] This separation can improve content accessibility;
      [further explanation needed] provide more flexibility and control in the specification of 
      presentation characteristics; enable multiple web pages to share formatting by specifying 
      the relevant CSS in a separate .css file, which reduces complexity and repetition in the 
      structural content; and enable the .css file to be cached to improve the page load speed 
      between the pages that share the file and its formatting.</div></>)
  };

  export const Django = () => {
    return (<>
    <h1 className="wiki">Django</h1>
    <div className="wiki">Django's primary goal is to ease the creation of complex, database-driven websites. The framework emphasizes reusability and "pluggability" of components, less code, low coupling, rapid development, and the principle of don't repeat yourself.[9] Python is used throughout, even for settings, files, and data models. Django also provides an optional administrative create, read, update and delete interface that is generated dynamically through introspection and configured via admin models.

    Some well-known sites that use Django include Instagram,[10] Mozilla,[11] Disqus,[12] Bitbucket,[13] Nextdoor[14] and Clubhouse.[15]</div></>)
  };

  export const Git = () => {
    return (<>
    <h1 className="wiki">Git</h1>
    <div className="wiki">git was originally authored by Linus Torvalds in 2005 for development of the Linux kernel, with other kernel developers contributing to its initial development.[13] Since 2005, Junio Hamano has been the core maintainer. As with most other distributed version control systems, and unlike most client–server systems, every Git directory on every computer is a full-fledged repository with complete history and full version-tracking abilities, independent of network access or a central server.[14] Git is free and open-source software shared under the GPL-2.0-only license.

      Since its creation, Git has become the most popular distributed version control system, with nearly 95% of developers reporting it as their primary version control system as of 2022.[15] There are many popular offerings of Git repository services, including GitHub, SourceForge, Bitbucket and GitLab.[16][17][18][19][20]</div></>)
  };

  export const GitHub = () => {
    return (<>
    <h1 className="wiki">GitHub</h1>
     <div className="wiki">GitHub, Inc. (/ˈɡɪthʌb/[a]) is a developer platform that allows developers to create, store, manage and share their code. It uses Git software, providing the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project.[7] Headquartered in California, it has been a subsidiary of Microsoft since 2018.[8]

    It is commonly used to host open source software development projects.[9] As of January 2023, GitHub reported having over 100 million developers[10] and more than 372 million repositories,[11] including at least 28 million public repositories.[12] It is the world's largest source code host as of June 2023.</div></>)
  };

  export const Html = () => {
    return (<>
    <h1 className="wiki">HTML</h1>
    <div className="wiki">HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.

    Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for its appearance.</div></>)
  };

  export const Python = () => {
    return (<>
    <h1 className="wiki">Python</h1>
    <div className="wiki">Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.[31]

    Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library.[32][33]
    
    Guido van Rossum began working on Python in the late 1980s as a successor to the ABC programming language and first released it in 1991 as Python 0.9.0.[34] Python 2.0 was released in 2000. Python 3.0, released in 2008, was a major revision not completely backward-compatible with earlier versions. Python 2.7.18, released in 2020, was the last release of Python 2.[35]
    
    Python consistently ranks as one of the most popular programming languages, and has gained widespread use in the machine learning community.[36][37][38][39]</div></>)
  };

  export const NotFound = () => {
    return (
      <div>
        <h1 className="wiki">Page not found </h1>
      </div>
    );
  };

