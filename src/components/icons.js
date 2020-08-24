import React, {memo} from 'react'

const Search = memo(
    function Search({width, height, className}){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 24 24"><g transform="translate(5 5)" fill="none" stroke="#bfc5d2" strokeMiterlimit="10" strokeWidth="1.5" data-name="Icon Search" opacity=".4"><circle cx="6" cy="6" r="6"/><path data-name="Line 9" d="M10.5 10.5l3.187 3.187" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
        )
    }
)

const Notification = memo(
    function Notification({width, height, className}){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 24.236 27"><path d="M8.422 25.868a3.766 3.766 0 01-1.039-1.957H.7a.7.7 0 01-.684-.535.672.672 0 01.4-.759c2.637-1.152 2.737-6.1 2.739-6.22V13.08a7.721 7.721 0 014.877-7.105 3.088 3.088 0 016.172 0 7.721 7.721 0 014.882 7.106V16.4c0 .125.1 5.069 2.738 6.221a.67.67 0 01.4.759.7.7 0 01-.684.535h-6.688a3.794 3.794 0 01-6.431 1.957z"/></svg>
        )
    }
)

const Messages = memo(
    function Messages({width, height, className}){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 31.259 23.667"><g data-name="Element/Icon/Mail"><g data-name="Grupo 3"><path data-name="Mail" d="M26.236 23.667H5.024a2.367 2.367 0 01-2.357-2.372V4.703a2.366 2.366 0 012.357-2.37h21.212a2.366 2.366 0 012.357 2.37v16.592a2.367 2.367 0 01-2.357 2.372zM4.642 5.176v16.526h21.975V5.176l-10.983 9.126zm1.725-.856l9.32 7.45 9.2-7.45z"/></g></g></svg>
        )
    }
)

const Menu = memo(
    function Menu({width, height, className}){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 20 14"><path data-name="Caminho 196" d="M19 6H1a1 1 0 000 2h18a1 1 0 000-2z"/><path data-name="Caminho 197" d="M1 2h18a.945.945 0 001-1 .945.945 0 00-1-1H1a.945.945 0 00-1 1 .945.945 0 001 1z"/><path data-name="Caminho 198" d="M19 12H1a1 1 0 000 2h18a1 1 0 000-2z"/></svg>
        )
    }
)


const Home = memo(
    function Home({width, height, className}){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 20 22.025"><path d="M19.6 7.225l-9-7a.91.91 0 00-1.2 0l-9 7a.909.909 0 00-.4.8v11a2.946 2.946 0 003 3h14a2.946 2.946 0 003-3v-11a.909.909 0 00-.4-.8zm-7.6 12.8H8v-8h4zm6-1a.945.945 0 01-1 1h-3v-9a.945.945 0 00-1-1H7a.945.945 0 00-1 1v9H3a.945.945 0 01-1-1v-10.5l8-6.2 8 6.2z" opacity=".6"/></svg>
        )
    }
)

const Financeiro = memo(
    function Financeiro({width, height, className}){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 14 18"><g opacity=".86"><path data-name="Caminho 38" d="M13 6a.945.945 0 00-1 1v10a1 1 0 002 0V7a.945.945 0 00-1-1z"/><path data-name="Caminho 39" d="M7 0a.945.945 0 00-1 1v16a1 1 0 002 0V1a.945.945 0 00-1-1z"/><path data-name="Caminho 40" d="M1 10a.945.945 0 00-1 1v6a.945.945 0 001 1 .945.945 0 001-1v-6a.945.945 0 00-1-1z"/></g></svg>        
        )
    }
)

const Vendas = memo(
    function Vendas({width, height, className}){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 20 22"><g opacity=".6"><path data-name="Caminho 281" d="M19.9 4.6a.1.1 0 00-.1-.1.1.1 0 00-.1-.1l-3-4A.67.67 0 0016 0H4a.909.909 0 00-.8.4l-3 4a.1.1 0 01-.1.1.1.1 0 01-.1.1V19a2.946 2.946 0 003 3h14a2.946 2.946 0 003-3V5a.756.756 0 00-.1-.4zM4.5 2h11L17 4H3zM17 20H3a.945.945 0 01-1-1V6h16v13a.945.945 0 01-1 1z"/><path data-name="Caminho 282" d="M14 8a.945.945 0 00-1 1 3 3 0 01-6 0 .945.945 0 00-1-1 .945.945 0 00-1 1 5 5 0 0010 0 .945.945 0 00-1-1z"/></g></svg>        
        )
    }
)

const Estoque = memo(
    function Estoque({width, height, className}){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 24 24"><g data-name="Grupo 1" opacity=".6"><path data-name="Combined Shape" d="M20.9 21.7h-6.8a.8.8 0 01-.8-.8v-6.8a.8.8 0 01.8-.8h6.8a.8.8 0 01.8.8v6.8a.8.8 0 01-.8.8zm-6.15-6.95v5.5h5.5v-5.5zM9.9 21.7H3.1a.8.8 0 01-.8-.8v-6.8a.8.8 0 01.8-.8h6.8a.8.8 0 01.8.8v6.8a.8.8 0 01-.8.8zm-6.15-6.95v5.5h5.5v-5.5zM20.9 10.7h-6.8a.8.8 0 01-.8-.8V3.1a.8.8 0 01.8-.8h6.8a.8.8 0 01.8.8v6.8a.8.8 0 01-.8.8zm-6.15-6.95v5.5h5.5v-5.5zM9.9 10.7H3.1a.8.8 0 01-.8-.8V3.1a.8.8 0 01.8-.8h6.8a.8.8 0 01.8.8v6.8a.8.8 0 01-.8.8zM3.75 3.75v5.5h5.5v-5.5z"/></g></svg>        
        )
    }
)

const Cadastros = memo(
    function Cadastros({width, height, className}){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 23.905 20"><g opacity=".6"><path data-name="Caminho 367" d="M13 12H5a4.951 4.951 0 00-5 5v2a.945.945 0 001 1 .945.945 0 001-1v-2a2.946 2.946 0 013-3h8a2.946 2.946 0 013 3v2a1 1 0 002 0v-2a4.951 4.951 0 00-5-5z"/><path data-name="Caminho 368" d="M9 10a4.951 4.951 0 005-5 4.951 4.951 0 00-5-5 4.951 4.951 0 00-5 5 4.951 4.951 0 005 5zm0-8a2.946 2.946 0 013 3 2.946 2.946 0 01-3 3 2.946 2.946 0 01-3-3 2.946 2.946 0 013-3z"/><path data-name="Caminho 369" d="M20.2 12.2a.982.982 0 10-.5 1.9 2.915 2.915 0 012.2 2.9v2a1 1 0 002 0v-2a4.644 4.644 0 00-3.7-4.8z"/><path data-name="Caminho 370" d="M16.2.2a.919.919 0 00-1.2.7 1.028 1.028 0 00.7 1.2 3.044 3.044 0 010 5.9.949.949 0 00-.7 1.2.974.974 0 001 .8h.2a4.883 4.883 0 003.6-3.6A4.993 4.993 0 0016.2.2z"/></g></svg>        
        )
    }
)

const Contas = memo(
    function Contas({width, height, className}){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 24 24"><g data-name="Grupo 2" opacity=".6"><path data-name="Combined Shape" d="M21.414 22h-3.906a.65.65 0 01-.586-.7V11.068a.65.65 0 01.586-.7h3.906a.65.65 0 01.586.7V21.3a.65.65 0 01-.586.7zm-3.32-3.721V20.6h2.734v-2.324zm0-6.51v5.115h2.734v-5.118zM13.953 22h-3.906a.65.65 0 01-.586-.7V2.7a.65.65 0 01.586-.7h3.906a.65.65 0 01.586.7v18.6a.65.65 0 01-.586.7zm-3.32-8.371V20.6h2.734v-6.975zm0-10.23v8.831h2.733V3.4zM6.492 22H2.586A.65.65 0 012 21.3V11.068a.65.65 0 01.586-.7h3.906a.65.65 0 01.586.7V21.3a.65.65 0 01-.586.7zm-3.32-3.721V20.6h2.734v-2.324zm0-6.51v5.115h2.734v-5.118z"/></g></svg>        
        )
    }
)

const Add = memo(
    function Add({width, height, className}){
        return(
            // <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 469.333 469.333"><path d="M250.668 469.332h-32c-20.59 0-37.336-16.746-37.336-37.332V288h-144C16.746 288 0 271.254 0 250.668v-32c0-20.59 16.746-37.336 37.332-37.336h144v-144C181.332 16.746 198.078 0 218.668 0h32C271.254 0 288 16.746 288 37.332v144h144c20.586 0 37.332 16.746 37.332 37.336v32C469.332 271.254 452.586 288 432 288H288v144c0 20.586-16.746 37.332-37.332 37.332zm-213.336-256A5.337 5.337 0 0032 218.668v32A5.336 5.336 0 0037.332 256h160c8.832 0 16 7.168 16 16v160a5.335 5.335 0 005.336 5.332h32A5.334 5.334 0 00256 432V272c0-8.832 7.168-16 16-16h160a5.334 5.334 0 005.332-5.332v-32a5.335 5.335 0 00-5.332-5.336H272c-8.832 0-16-7.168-16-16v-160A5.336 5.336 0 00250.668 32h-32a5.337 5.337 0 00-5.336 5.332v160c0 8.832-7.168 16-16 16zm0 0"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 511.998 511.998"><path d="M472.747 192H320.853V41.813c0-22.186-17.067-40.96-39.253-40.96h-49.494c-22.187 0-40.96 18.773-40.96 40.96V192H40.96C18.774 192 0 209.066 0 231.254v49.493C0 302.933 18.773 320 40.96 320h150.187v151.893c0 22.186 18.774 39.253 40.96 39.253H281.6c22.186 0 39.253-17.067 39.253-39.253V320h151.893c22.186 0 39.253-17.067 39.253-39.253v-49.493C512 209.066 494.933 192 472.747 192zm0 95.573h-168.96c-10.24 0-17.067 6.827-17.067 17.067V473.6c0 3.413-3.413 5.12-5.12 5.12h-49.494c-3.413 0-6.827-3.413-6.827-5.12V304.64c0-10.24-6.827-17.067-17.067-17.067H40.96c-3.413 0-6.827-3.413-6.827-5.12V232.96c0-3.413 3.413-5.12 6.827-5.12h167.253c10.24 0 17.067-6.827 17.067-17.067V41.813c0-3.413 3.413-6.827 6.827-6.827H281.6c3.413 0 5.12 3.413 5.12 6.827v167.253c0 10.24 6.827 17.067 17.067 17.067h168.96c3.413 0 5.12 3.413 5.12 5.12l.002 51.2c-.002 3.414-3.416 5.12-5.122 5.12z"/></svg>
        )
    }
)

const Remove = memo(
    function Remove({width, height, className}){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="-47 0 512 512"><path d="m416.875 114.441406-11.304688-33.886718c-4.304687-12.90625-16.339843-21.578126-29.941406-21.578126h-95.011718v-30.933593c0-15.460938-12.570313-28.042969-28.027344-28.042969h-87.007813c-15.453125 0-28.027343 12.582031-28.027343 28.042969v30.933593h-95.007813c-13.605469 0-25.640625 8.671876-29.945313 21.578126l-11.304687 33.886718c-2.574219 7.714844-1.2695312 16.257813 3.484375 22.855469 4.753906 6.597656 12.445312 10.539063 20.578125 10.539063h11.816406l26.007813 321.605468c1.933594 23.863282 22.183594 42.558594 46.109375 42.558594h204.863281c23.921875 0 44.175781-18.695312 46.105469-42.5625l26.007812-321.601562h6.542969c8.132812 0 15.824219-3.941407 20.578125-10.535157 4.753906-6.597656 6.058594-15.144531 3.484375-22.859375zm-249.320312-84.441406h83.0625v28.976562h-83.0625zm162.804687 437.019531c-.679687 8.402344-7.796875 14.980469-16.203125 14.980469h-204.863281c-8.40625 0-15.523438-6.578125-16.203125-14.980469l-25.816406-319.183593h288.898437zm-298.566406-349.183593 9.269531-27.789063c.210938-.640625.808594-1.070313 1.484375-1.070313h333.082031c.675782 0 1.269532.429688 1.484375 1.070313l9.269531 27.789063zm0 0"/><path d="m282.515625 465.957031c.265625.015625.527344.019531.792969.019531 7.925781 0 14.550781-6.210937 14.964844-14.21875l14.085937-270.398437c.429687-8.273437-5.929687-15.332031-14.199219-15.761719-8.292968-.441406-15.328125 5.925782-15.761718 14.199219l-14.082032 270.398437c-.429687 8.273438 5.925782 15.332032 14.199219 15.761719zm0 0"/><path d="m120.566406 451.792969c.4375 7.996093 7.054688 14.183593 14.964844 14.183593.273438 0 .554688-.007812.832031-.023437 8.269531-.449219 14.609375-7.519531 14.160157-15.792969l-14.753907-270.398437c-.449219-8.273438-7.519531-14.613281-15.792969-14.160157-8.269531.449219-14.609374 7.519532-14.160156 15.792969zm0 0"/><path d="m209.253906 465.976562c8.285156 0 15-6.714843 15-15v-270.398437c0-8.285156-6.714844-15-15-15s-15 6.714844-15 15v270.398437c0 8.285157 6.714844 15 15 15zm0 0"/></svg>
        )
    }
)

const Plus = memo(
    function Plus({width, height, className}){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 492 492"><path d="M465.064 207.566h.028-180.656V27.25c0-14.84-12.016-27.248-26.856-27.248h-23.116c-14.836 0-26.904 12.408-26.904 27.248v180.316H26.908c-14.832 0-26.908 12-26.908 26.844v23.248c0 14.832 12.072 26.78 26.908 26.78h180.656v180.968c0 14.832 12.064 26.592 26.904 26.592h23.116c14.84 0 26.856-11.764 26.856-26.592V284.438h180.624c14.84 0 26.936-11.952 26.936-26.78V234.41c0-14.844-12.096-26.844-26.936-26.844z"/></svg>
        )
    }
)

const Minus = memo(
    function Minus({width, height, className}){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 -192 469.33333 469"><path d="m437.332031.167969h-405.332031c-17.664062 0-32 14.335937-32 32v21.332031c0 17.664062 14.335938 32 32 32h405.332031c17.664063 0 32-14.335938 32-32v-21.332031c0-17.664063-14.335937-32-32-32zm0 0"/></svg>
        )
    }
)

const Prev = memo(
    function Prev({width, height, className}){
        return ( 
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 492 492"><path d="M198.608 246.104L382.664 62.04c5.068-5.056 7.856-11.816 7.856-19.024 0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12C361.476 2.792 354.712 0 347.504 0s-13.964 2.792-19.028 7.864L109.328 227.008c-5.084 5.08-7.868 11.868-7.848 19.084-.02 7.248 2.76 14.028 7.848 19.112l218.944 218.932c5.064 5.072 11.82 7.864 19.032 7.864 7.208 0 13.964-2.792 19.032-7.864l16.124-16.12c10.492-10.492 10.492-27.572 0-38.06L198.608 246.104z"/></svg>
        )
    }
)


const Next = memo(
    function Next({width, height, className}){
        return ( 
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 492.004 492.004"><path d="M382.678 226.804L163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z"/></svg>
        )
    }
)

const Calendar = memo(
    function Calendar({width, height, className}){
        return ( 
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 64 64"><path d="M57 8h-5V6a4 4 0 00-8 0v2h-8V6a4 4 0 00-8 0v2h-8V6a4 4 0 00-8 0v2H7a5 5 0 00-5 5v40a5 5 0 005 5h28a1 1 0 000-2H7a3.009 3.009 0 01-3-3V22h56v17a1 1 0 002 0V13a5 5 0 00-5-5zM46 6a2 2 0 014 0v6a2 2 0 01-4 0zM30 6a2 2 0 014 0v6a2 2 0 01-4 0zM14 6a2 2 0 014 0v6a2 2 0 01-4 0zm46 14H4v-7a3.009 3.009 0 013-3h5v2a4 4 0 008 0v-2h8v2a4 4 0 008 0v-2h8v2a4 4 0 008 0v-2h5a3.009 3.009 0 013 3z"/><path d="M30 29a2 2 0 00-2-2h-4a2 2 0 00-2 2v3a2 2 0 002 2h4a2 2 0 002-2zm-6 3v-3h4v3zM18 29a2 2 0 00-2-2h-4a2 2 0 00-2 2v3a2 2 0 002 2h4a2 2 0 002-2zm-6 3v-3h4v3zM52 34a2 2 0 002-2v-3a2 2 0 00-2-2h-4a2 2 0 00-2 2v3a2 2 0 002 2zm-4-5h4v3h-4zM30 38a2 2 0 00-2-2h-4a2 2 0 00-2 2v3a2 2 0 002 2h4a2 2 0 002-2zm-6 3v-3h4v3zM18 38a2 2 0 00-2-2h-4a2 2 0 00-2 2v3a2 2 0 002 2h4a2 2 0 002-2zm-6 3v-3h4v3zM28 45h-4a2 2 0 00-2 2v3a2 2 0 002 2h4a2 2 0 002-2v-3a2 2 0 00-2-2zm-4 5v-3h4v3zM36 34h4a2 2 0 002-2v-3a2 2 0 00-2-2h-4a2 2 0 00-2 2v3a2 2 0 002 2zm0-5h4v3h-4zM34 41a2 2 0 002 2 1 1 0 000-2v-3h4a1 1 0 000-2h-4a2 2 0 00-2 2zM16 45h-4a2 2 0 00-2 2v3a2 2 0 002 2h4a2 2 0 002-2v-3a2 2 0 00-2-2zm-4 5v-3h4v3z"/><path d="M49 36a13 13 0 1013 13 13.015 13.015 0 00-13-13zm0 24a11 11 0 1111-11 11.013 11.013 0 01-11 11z"/><path d="M54.778 44.808L47 52.586l-3.535-3.536a1 1 0 00-1.414 1.414l4.242 4.243a1 1 0 001.414 0l8.485-8.485a1 1 0 00-1.414-1.414z"/></svg>
        )
    }
)

const ArrowDown = memo(
    function ArrowDown({width, height, className}){
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 491.996 491.996"><path d="M484.132 124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86-7.208 0-13.964 2.792-19.036 7.86l-183.84 183.848L62.056 108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968 2.788-19.036 7.856l-16.12 16.128c-10.496 10.488-10.496 27.572 0 38.06l219.136 219.924c5.064 5.064 11.812 8.632 19.084 8.632h.084c7.212 0 13.96-3.572 19.024-8.632l218.932-219.328c5.072-5.064 7.856-12.016 7.864-19.224 0-7.212-2.792-14.068-7.864-19.128z"/></svg>
        )
    }
)

const RadiusMenu = memo(
    function RadiusMenu({width, height, className}){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 512 512"><circle cx="256" cy="256" r="64"/><circle cx="256" cy="448" r="64"/><circle cx="256" cy="64" r="64"/></svg>
        )
    }
)

const Close = memo(
    function Close({width, height, className}){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 492 492"><path d="M300.188 246L484.14 62.04c5.06-5.064 7.852-11.82 7.86-19.024 0-7.208-2.792-13.972-7.86-19.028L468.02 7.872C462.952 2.796 456.196.016 448.984.016c-7.2 0-13.956 2.78-19.024 7.856L246.008 191.82 62.048 7.872C56.988 2.796 50.228.016 43.02.016c-7.2 0-13.96 2.78-19.02 7.856L7.872 23.988c-10.496 10.496-10.496 27.568 0 38.052L191.828 246 7.872 429.952C2.808 435.024.02 441.78.02 448.984c0 7.204 2.788 13.96 7.852 19.028l16.124 16.116c5.06 5.072 11.824 7.856 19.02 7.856 7.208 0 13.968-2.784 19.028-7.856l183.96-183.952 183.952 183.952c5.068 5.072 11.824 7.856 19.024 7.856h.008c7.204 0 13.96-2.784 19.028-7.856l16.12-16.116c5.06-5.064 7.852-11.824 7.852-19.028 0-7.204-2.792-13.96-7.852-19.028L300.188 246z"/></svg>
        )
    }
)

const Exit = memo(
    function Exit({width, height, className}){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 512 512"><path d="M255.15 468.625H63.787c-11.737 0-21.262-9.526-21.262-21.262V64.638c0-11.737 9.526-21.262 21.262-21.262H255.15c11.758 0 21.262-9.504 21.262-21.262S266.908.85 255.15.85H63.787C28.619.85 0 29.47 0 64.638v382.724c0 35.168 28.619 63.787 63.787 63.787H255.15c11.758 0 21.262-9.504 21.262-21.262 0-11.758-9.504-21.262-21.262-21.262z"/><path d="M505.664 240.861L376.388 113.286c-8.335-8.25-21.815-8.143-30.065.213s-8.165 21.815.213 30.065l92.385 91.173H191.362c-11.758 0-21.262 9.504-21.262 21.262 0 11.758 9.504 21.263 21.262 21.263h247.559l-92.385 91.173c-8.377 8.25-8.441 21.709-.213 30.065a21.255 21.255 0 0015.139 6.336c5.401 0 10.801-2.041 14.926-6.124l129.276-127.575A21.303 21.303 0 00512 255.998c0-5.696-2.275-11.118-6.336-15.137z"/></svg>
        )
    }
)

const Edit = memo(
    function Edit({width, height, className}){
        return(
            <svg viewBox="-15 -15 484.00019 484" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg"><path d="m401.648438 18.234375c-24.394532-24.351563-63.898438-24.351563-88.292969 0l-22.101563 22.222656-235.269531 235.144531-.5.503907c-.121094.121093-.121094.25-.25.25-.25.375-.625.746093-.871094 1.121093 0 .125-.128906.125-.128906.25-.25.375-.371094.625-.625 1-.121094.125-.121094.246094-.246094.375-.125.375-.25.625-.378906 1 0 .121094-.121094.121094-.121094.25l-52.199219 156.96875c-1.53125 4.46875-.367187 9.417969 2.996094 12.734376 2.363282 2.332031 5.550782 3.636718 8.867188 3.625 1.355468-.023438 2.699218-.234376 3.996094-.625l156.847656-52.324219c.121094 0 .121094 0 .25-.121094.394531-.117187.773437-.285156 1.121094-.503906.097656-.011719.183593-.054688.253906-.121094.371094-.25.871094-.503906 1.246094-.753906.371093-.246094.75-.621094 1.125-.871094.125-.128906.246093-.128906.246093-.25.128907-.125.378907-.246094.503907-.5l257.371093-257.371094c24.351563-24.394531 24.351563-63.898437 0-88.289062zm-232.273438 353.148437-86.914062-86.910156 217.535156-217.535156 86.914062 86.910156zm-99.15625-63.808593 75.929688 75.925781-114.015626 37.960938zm347.664062-184.820313-13.238281 13.363282-86.917969-86.917969 13.367188-13.359375c14.621094-14.609375 38.320312-14.609375 52.945312 0l33.964844 33.964844c14.511719 14.6875 14.457032 38.332031-.121094 52.949218zm0 0"/></svg>
        )
    }
)

const Active = memo(
    function Active({width, height, className}){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999" width={width} height={height} className={className}><path d="M508.745 246.041c-4.574-6.257-113.557-153.206-252.748-153.206S7.818 239.784 3.249 246.035a16.896 16.896 0 000 19.923c4.569 6.257 113.557 153.206 252.748 153.206s248.174-146.95 252.748-153.201a16.875 16.875 0 000-19.922zM255.997 385.406c-102.529 0-191.33-97.533-217.617-129.418 26.253-31.913 114.868-129.395 217.617-129.395 102.524 0 191.319 97.516 217.617 129.418-26.253 31.912-114.868 129.395-217.617 129.395z"/><path d="M255.997 154.725c-55.842 0-101.275 45.433-101.275 101.275s45.433 101.275 101.275 101.275S357.272 311.842 357.272 256s-45.433-101.275-101.275-101.275zm0 168.791c-37.23 0-67.516-30.287-67.516-67.516s30.287-67.516 67.516-67.516 67.516 30.287 67.516 67.516-30.286 67.516-67.516 67.516z"/></svg>
        )
    }
)

export{
    Search,
    Notification,
    Messages,
    Menu,
    Home,
    Financeiro,
    Vendas,
    Estoque,
    Cadastros,
    Contas,
    Add,
    Remove,
    Plus,
    Minus,
    Prev,
    Next,
    Calendar,
    ArrowDown,
    RadiusMenu,
    Close,
    Exit,
    Edit,
    Active
}