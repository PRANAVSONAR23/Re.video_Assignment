import { waitFor, createRef, all, Reference, chain } from '@revideo/core';
import {
  Img, 
  makeScene2D,
  Rive,
  Txt,
  Layout,
  LezerHighlighter, Code, word, lines, Rect,
  View2D
} from '@revideo/2d';
import {parser} from '@lezer/javascript';
import {tags} from '@lezer/highlight';
import {HighlightStyle} from '@codemirror/language';

const MyStyle = HighlightStyle.define([
    {
      tag: tags.comment,
      color: '#8E908C',
    },
    {
      tag: [tags.variableName, tags.self, tags.propertyName, tags.attributeName, tags.regexp],
      color: '#0f0e0e',
    },
    {
      tag: [tags.number, tags.bool, tags.null],
      color: '#F5871F',
    },
    {
      tag: [tags.className, tags.typeName, tags.definition(tags.typeName)],
      color: '#C99E00',
    },
    {
      tag: [tags.string, tags.special(tags.brace)],
      color: '#718C00',
    },
    {
      tag: tags.operator,
      color: '#3E999F',
    },
    {
      tag: [tags.definition(tags.propertyName), tags.function(tags.variableName)],
      color: '#4271AE',
    },
    {
      tag: tags.keyword,
      color: '#8959A8',
    },
    {
      tag: tags.derefOperator,
      color: '#4D4D4C',
    },
    {
      tag: tags.bracket,
      color: "blue"
    },
    {
      tag: tags.separator,
      color: "red"
    },
    {
      tag: tags.punctuation,
      color: "red"
    },
    {
      tag: tags.typeOperator,
      color: "red"
    }
  ]);

Code.defaultHighlighter = new LezerHighlighter(
  parser.configure({
    dialect: 'jsx ts',
  }),
  MyStyle
);
  

export default makeScene2D(function* (view) {

  const textRef = createRef<Txt>();

  view.add(
    <Txt fontFamily={"Lexend"} fontSize={100} fontWeight={600} ref={textRef}/>
  );

  yield* all(textRef().text("Pranav Sonar_DataSpeaks_Assignment", 1.25))
  yield* all(
      textRef().scale(0.75, 0.75),
      
  )


  yield* all(
    
    textRef().opacity(0, 1)
  );

 

//////------//////


   
    view.add(
      <Txt fontFamily={"Lexend"} fontSize={100} fontWeight={600} ref={textRef}/>
    );
  
    yield* all(textRef().text("Featured Work", 1))
    yield* all(
        textRef().scale(0.75, 0.75),
        textRef().position.y(-400, 0.75)
    )
    yield* waitFor(0.25);

    const codeRef= createRef<Code>();
    const videoBoxRef = createRef<Layout>();
    view.add(<Layout opacity={0} position={[550, 100]} size={[600, 500]} ref={videoBoxRef} />);
    view.add(
      <Code
      ref={codeRef}
      textAlign={"left"}
      fontSize={35}
      fontWeight={800}
      fontStyle={""}
      x={-400}
      y={100}
      opacity={0}
      fontFamily={'JetBrains Mono, monospace'}
      code={
  `               Customer Relationship Management (CRM) System


      Technology used =MongoDB,Express,React,NodeJS

       •Enhanced customer data management
        system with functionalities for adding, 
        editing, deleting, and importing
        data; implemented secure user authentication, 
        reducing data entry errors by 40% 
        and increasing security
        compliance by 25%.

       •Enhancing my skills in backend development,
        API creation, and advanced JavaScript concepts.
  `
  }/>);

  videoBoxRef().add(
    <Img 
      src={"/crm.png"} 
      size={[videoBoxRef().width(), videoBoxRef().height()]} 
    />
  );

  yield* all(
    codeRef().opacity(1, 0.5),
    videoBoxRef().opacity(1, 0.5)
  );

  yield* waitFor(3);
  
  yield* all(
    codeRef().opacity(0, 0.5),
    videoBoxRef().opacity(0, 0.5)
  );

  

  //////------------------------////


  yield* waitFor(0.25);

  
  view.add(<Layout opacity={0} position={[550, 100]} size={[600, 600]} ref={videoBoxRef} />);
  view.add(
    <Code
    ref={codeRef}
    textAlign={"left"}
    fontSize={35}
    fontWeight={800}
    x={-400}
    y={100}
    opacity={0}
    fontFamily={'JetBrains Mono, monospace'}
    code={
`                      WEB_RTC  Real-Time Communication Platform

      Technology used =React,Javascript,Agora.io

      •With React’s component-based architecture, 
       we can easily build
       a flexible and responsive user 
       interface that adapts to various 
       screen sizes and devices. By 
       utilizing Agora.io’s SDK, we 
       can implement features such as
       real-time video/audio streaming 
       within our React application.

      •Our WebRTC React project leverages
       the power of Agora.io’s real-time 
       communication platform to enable
       seamless video/audio communication
       within web applications
  `
}/>);

videoBoxRef().add(
  <Img 
    src={"/webrtc.jpeg"} 
    size={[videoBoxRef().width(), videoBoxRef().height()]} 
  />
);

yield* all(
  codeRef().opacity(1, 0.75),
  videoBoxRef().opacity(1, 0.75)
);

yield* waitFor(3);

yield* all(
  codeRef().opacity(0, 0.5),
  videoBoxRef().opacity(0, 0.5)
);

///////----------------//////////////////


yield* waitFor(0.5);


view.add(<Layout opacity={0} position={[550, 100]} size={[600, 600]} ref={videoBoxRef} />);
view.add(
  <Code
  ref={codeRef}
  textAlign={"left"}
  fontSize={35}
  fontWeight={800}
  x={-400}
  y={100}
  opacity={0}
  fontFamily={'JetBrains Mono, monospace'}
  code={

`                                 
                                  • Admin Dashboard


Technology used= Next.js, Javascript ,Css
                 Next.js Server Actions, Mongodb 

 •Developed an admin dashboard using Nextjs for
  efficient management and analysis of product 
  data, user information, and tasks

 •Features are •Analytics       •User Management 
               •Task Management •Notifications

 •Implemented secure and efficient CRUD 
  operations using Nextjs server actions

 •Integrated MongoDB for data storage and retrieval.

 •Developed real-time notification functionality.
 
`
}/>);

videoBoxRef().add(
<Img 
  src={"/dashboard.jpeg"} 
  size={[videoBoxRef().width(), videoBoxRef().height()]} 
/>
);

yield* all(
codeRef().opacity(1, 0.75),
videoBoxRef().opacity(1, 0.75)
);

yield* waitFor(3);

yield* all(
codeRef().opacity(0, 0.5),
videoBoxRef().opacity(0, 0.5)
);
  
yield* waitFor(0.5);
yield* all(
    
  textRef().opacity(0, 1)
);

yield* logoAnimation(view);
 
});



function* logoAnimation(view: View2D){
  const block1 = createRef<Rect>()
  const block2 = createRef<Rect>()
  const block3 = createRef<Rect>()
  const blocks = createRef<Layout>();
  const logoText = createRef<Txt>();
  view.add(
    <>
    <Layout ref={blocks} x={-600}>
      <Rect fill={"#151515"} height={20} y={-80} x={-620} width={80} radius={9.3} ref={block1} />
      <Rect fill={"#151515"} height={20} width={80} x={-540} radius={9.3} ref={block2} />
      <Rect fill={"#151515"} height={20} width={80} x={-460} y={80} radius={9.3} ref={block3} />
      <Txt ref={logoText} fontFamily={"Lexend"} x={53+757.5} y={20} fontSize={100} letterSpacing={-2} fontWeight={200} text={""}/>
    </Layout>
    </>
  );
  
  yield* all(
    block1().position.x(-80, 0.5),
    chain(waitFor(0.1), block2().position.x(0, 0.4)),
    chain(waitFor(0.2), block3().position.x(80, 0.3)),
  )

  yield* logoText().text("Thanks for Watching ", 3);

  yield* waitFor(1);
}