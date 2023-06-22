export default {
    title: 'TypeScript with Vue.js 3',
    
    chapters: [
        {
            title: 'Chapter 1',
            slug: 'l-chapter-1',
            
            number: 1,
            lessons: [
                {
                    title: 'Introduction to TypeScript with Vue.js 3',
                    slug: 'l-introduction-to-typescript-with-yvue-js-3',
                    number: 1,
                    downloadurl:"https://vueschool.io/lessons/introduction-to-typescript-with-vue-js-3",
                    videoId: 684236333,
                    text: `In this lesson, we take a look at some of the benefits of using TypeScript with Vue.js including:
                    
                    Improved error detection in your IDE and at build time
                    Safer and less stressful refactoring
                    More focused and accurate IDE autocompletion
                
                    We also answer the question: “Are there any cases when you wouldn’t want to use TypeScript?”.`
                },
                {
                    title: 'Course PreRequisites and Dependencies',
                    slug: 'l-course-prerequisites-and-dependencies',
                    number: 2,
                    downloadurl:"https://vueschool.io/lessons/typescript-and-vue-js-3-course-prerequisites-and-dependencies",
                    videoId: 684236333,
                    text: `In order to follow along with the course, there are several things you must know and some software that should be installed. In this lesson, we’ll cover what’s needed.

                    Prerequisite Courses
                    
                        Vue.js 3 Fundamentals with the Composition API
                        TypeScript Fundamentals
                        Vue.js 3 Components Fundamentals
                        Vue.js 3 Single File Components
                    
                    Required Software
                    
                        Node.js
                        npm
                        npx
                        Vue Devtools
                        An IDE of your Choice (Visual Studio Code is recommended by the official Vue Docs)`
                },
                {
                    title: 'Bootstrap a Vue.js and TypeScript Project',
                    slug: 'l-bootstrap-a-vue-js-and-typescript-project',
                    number: 2,
                    downloadurl:"https://vueschool.io/lessons/bootstrap-a-vue-js-and-typescript-project",
                    videoId: 684236333,
                    text: `In this lesson, we learn how to start a TypeScript + Vue project via the command line with a tool called create-vue. We also download the boilerplate code to get the project setup with some predefined components, styles, etc to help us focus on learning TypeScript with Vue.

                    Boilerplate Install Command
                    
                    npx degit vueschool/ts-vue-boilerplate
                    
                    Links
                    
                        Vue Docs: Create Vue Tool
                        Boilerplate Code`
                },
                {
                    title: 'Setup VS Code for TypeScript and Vue',
                    slug: 'l-setup-vs-code-for-typescript-and-vue',
                    number: 2,
                    downloadurl:"https://vueschool.io/lessons/setup-vs-code-for-typescript-and-vue",
                    videoId: 684236333,
                    text: `In this lesson, we learn how to setup VS Code with the Volar extension. Volar provides support for working with TypeScript in single file components, as well as other Vue features.

                    We also learn how to setup Volar’s take over mode to get imports of .vue files in .ts files working without running 2 TypeScript language services in VS Code.
                    
                    Links
                    
                        Webstorm
                        Webstorm + Vue
                        Volar Extension for VS Code
                        TypeScript Vue Extension for VS Code (use Take Over mode instead)
                        Vue Docs: Takeover Mode`
                },
            ]
        },
        {
            title: 'Chapter 2',
            slug: 'l-chapter-2',
            
            number: 1,
            lessons: [
                {
                    title: 'TypeScript in Vue Components',
                    slug: 'l-typescript-in-vue-components',
                    number: 1,
                    downloadurl:"https://vueschool.io/lessons/typescript-in-vue-components",
                    videoId: 684236333,
                    text: `In this lesson, we learn how to direct Vue Single File Components to work with typescript.

                    Links
                    
                        Vue Docs: TypeScript Usage in Single File Components`
                },
                {
                    title: 'Typing Reactive Data',
                    slug: 'l-typing-reactive-data',
                    number: 2,
                    downloadurl:"https://vueschool.io/lessons/typing-reactive-data",
                    videoId: 684236333,
                    text: `In this lesson, you learn how to type reactive data created with Vue’s reactive utility function. Strategies include relying on inferred types, using type assertion to provide more info inline, and lastly being explicit by creating a reusable interface.

                    Links
                    
                        Vue Docs: Typing Reactive`
                },
                {
                    title: 'Typing Refs',
                    slug: 'l-typing-refs',
                    number: 2,
                    downloadurl:"https://vueschool.io/lessons/typing-refs",
                    videoId: 684236333,
                    text: `In this lesson, we learn how to type reactive refs in Vue.js. Typing reactive refs can often be done explicitly without any loss of type safety or clarity. Other times it’s important to explicitly type reactive refs to be more specific.

                    Links
                    
                        Vue Docs: Typing Ref()`
                },
                {
                    title: 'Typing Computed Props',
                    slug: 'l-typing-computed-props',
                    number: 2,
                    downloadurl:"https://vueschool.io/lessons/typing-computed-props",
                    videoId: 684236333,
                    text: `In this lesson, we learn how computed props are implicitly typed based on their return values. We also examine a quick use case for explicitly typing computed props. Finally, we get the character count feature of our Vue.js powered journal application working with TypeScript.

                    Links
                    
                        Vue Docs: Typing Computed Props`
                },
            ]
        },
    ]
}