// const Promise = require('bluebird')
// const path = require('path')
// const { paginate } = require('gatsby-awesome-pagination')
// const axios = require('axios')

// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

// const cockpitToken = `${process.env.COCKPIT_TOKEN}`
// const cockpitUrl = `${process.env.COCKPIT_API_URL}`


// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//     const markdown = path.resolve('./src/templates/markdown.jsx')
//     // const amp = path.resolve('./src/templates/markdown.amp.jsx')
//     const oldPageTemplate = path.resolve('./src/templates/oldpage.jsx')
//     const PaginateTemplate = path.resolve('./src/templates/paginate.jsx')


//     const { createRedirect } = actions;
//     createRedirect({
//       fromPath: '/404/',
//       toPath: '/cari/',
//       isPermanent: true
//     });
//     const desainPageResults = graphql(`
// 		{
// 			desainPageResults: allCockpitMarkdown(filter: {childMarkdownRemark: {frontmatter: {title: {ne: ""}, tags: {eq: "desain"}}}}) {
//         edges {
//           node {
//             childMarkdownRemark {
//               frontmatter {
//                 title
//                 slug
//               }
//             }
//           }
//         }
//       }
// 		}
// 	`).then(result => {
//     // console.log(result)
// 		if (result.errors) {
// 			Promise.reject(result.errors);
// 		}

// 		// Create blog pages
// 		paginate({
//       createPage, 
//       items: result.data.desainPageResults.edges, 
//       itemsPerPage: 5, 
//       pathPrefix: '/desain', 
//       component: path.resolve('./src/templates/desain.jsx'),
//       // const paginateTemplate = path.resolve('./src/templates/paginate.jsx')
//       context: {
//         slug: "desain",
//       },
//     })
//     return null;
//   });
//     const teknologiPageResults = graphql(`
// 		{
// 			teknologiPageResults: allCockpitMarkdown(filter: {childMarkdownRemark: {frontmatter: {title: {ne: ""}, tags: {eq: "teknologi"}}}}) {
//         edges {
//           node {
//             childMarkdownRemark {
//               frontmatter {
//                 title
//                 slug
//               }
//             }
//           }
//         }
//       }
// 		}
// 	`).then(result => {
//     // console.log(result)
// 		if (result.errors) {
// 			Promise.reject(result.errors);
// 		}

// 		// Create blog pages
// 		paginate({
//       createPage, 
//       items: result.data.teknologiPageResults.edges, 
//       itemsPerPage: 5, 
//       pathPrefix: '/teknologi', 
//       component: path.resolve('./src/templates/teknologi.jsx'),
//       // const paginateTemplate = path.resolve('./src/templates/paginate.jsx')
//       context: {
//         slug: "teknologi",
//       },
//     }); return null;
// 	});
//     const coronaPageResults = graphql(`
// 		{
// 			coronaPageResults: allCockpitMarkdown(filter: {childMarkdownRemark: {frontmatter: {title: {ne: ""}, tags: {eq: "desain"}}}}) {
//         edges {
//           node {
//             childMarkdownRemark {
//               frontmatter {
//                 title
//                 slug
//               }
//             }
//           }
//         }
//       }
// 		}
// 	`).then(result => {
// 		if (result.errors) {
// 			Promise.reject(result.errors);
// 		}

// 		// Create blog pages
// 		paginate({
//       createPage, 
//       items: result.data.coronaPageResults.edges, 
//       itemsPerPage: 5, 
//       pathPrefix: '/corona', 
//       component: path.resolve('./src/templates/corona.jsx'),
//       // const paginateTemplate = path.resolve('./src/templates/paginate.jsx')
//       context: {
//         slug: "corona",
//       },
//     });return null
// 	});
//     const statistikPageResults = graphql(`
// 		{
// 			statistikPageResults: allCockpitMarkdown(filter: {childMarkdownRemark: {frontmatter: {title: {ne: ""}, tags: {eq: "statistik"}}}}) {
//         edges {
//           node {
//             childMarkdownRemark {
//               frontmatter {
//                 title
//                 slug
//               }
//             }
//           }
//         }
//       }
// 		}
// 	`).then(result => {
// 		if (result.errors) {
// 			Promise.reject(result.errors);
// 		}


// 		paginate({
//       createPage, 
//       items: result.data.statistikPageResults.edges, 
//       itemsPerPage: 5, 
//       pathPrefix: '/statistik', 
//       component: path.resolve('./src/templates/statistik.jsx'),
//       context: {
//         slug: "statistik",
//       },
  
//     });
//     return null
// 	});
//     const kurikulumPageResults = graphql(`
// 		{
// 			kurikulumPageResults: allCockpitMarkdown(filter: {childMarkdownRemark: {frontmatter: {title: {ne: ""}, tags: {eq: "kurikulum"}}}}) {
//         edges {
//           node {
//             childMarkdownRemark {
//               frontmatter {
//                 title
//                 slug
//               }
//             }
//           }
//         }
//       }
// 		}
// 	`).then(result => {
// 		if (result.errors) {
// 			Promise.reject(result.errors);
// 		}


// 		paginate({
//       createPage, 
//       items: result.data.kurikulumPageResults.edges, 
//       itemsPerPage: 5, 
//       pathPrefix: '/kurikulum', 
//       component: path.resolve('./src/templates/kurikulum.jsx'),
//       context: {
//         slug: "kurikulum",
//       },
  
//     });
//     return null
// 	});
//     const ekonomiPageResults = graphql(`
// 		{
// 			ekonomiPageResults: allCockpitMarkdown(filter: {childMarkdownRemark: {frontmatter: {title: {ne: ""}, tags: {eq: "ekonomi"}}}}) {
//         edges {
//           node {
//             childMarkdownRemark {
//               frontmatter {
//                 title
//                 slug
//               }
//             }
//           }
//         }
//       }
// 		}
// 	`).then(result => {
// 		if (result.errors) {
// 			Promise.reject(result.errors);
// 		}


// 		paginate({
//       createPage, 
//       items: result.data.ekonomiPageResults.edges, 
//       itemsPerPage: 5, 
//       pathPrefix: '/ekonomi', 
//       component: path.resolve('./src/templates/ekonomi.jsx'),
//       context: {
//         slug: "ekonomi",
//       },
  
//     });
//     return null
// 	});
//     const pengembanganDiriPageResults = graphql(`
// 		{
// 			pengembanganDiriPageResults: allCockpitMarkdown(filter: {childMarkdownRemark: {frontmatter: {title: {ne: ""}, tags: {eq: "pengembangan-diri"}}}}) {
//         edges {
//           node {
//             childMarkdownRemark {
//               frontmatter {
//                 title
//                 slug
//               }
//             }
//           }
//         }
//       }
// 		}
// 	`).then(result => {
    
// 		if (result.errors) {
// 			Promise.reject(result.errors);
// 		}


// 		paginate({
//       createPage, 
//       items: result.data.pengembanganDiriPageResults.edges, 
//       itemsPerPage: 5, 
//       pathPrefix: '/pengembangan-diri', 
//       component: path.resolve('./src/templates/pengembangan-diri.jsx'),
//       context: {
//         slug: "pengembangan-diri",
//       },
  
//     });
//     return null
// 	});
//     const islamPageResults = graphql(`
// 		{
// 			islamPageResults: allCockpitMarkdown(filter: {childMarkdownRemark: {frontmatter: {title: {ne: ""}, tags: {eq: "islam"}}}}) {
//         edges {
//           node {
//             childMarkdownRemark {
//               frontmatter {
//                 title
//                 slug
//               }
//             }
//           }
//         }
//       }
// 		}
// 	`).then(result => {
    
// 		if (result.errors) {
// 			Promise.reject(result.errors);
// 		}


// 		paginate({
//       createPage, 
//       items: result.data.islamPageResults.edges, 
//       itemsPerPage: 5, 
//       pathPrefix: '/islam', 
//       component: path.resolve('./src/templates/islam.jsx'),
//       context: {
//         slug: "islam",
//       },
  
//     });
//     return null
// 	});

//     const allItems = graphql(
//         `{
//           allCockpitMarkdown(filter: {childMarkdownRemark: {frontmatter: {title: {ne: ""}}}}) {
//             edges {
//               node {
//                 childMarkdownRemark {
//                   frontmatter {
//                     title
//                     slug
//                   }
//                 }
//               }
//             }
//           }
//             allMarkdownRemark(filter: {frontmatter: {title: {ne: ""}}}) {
//               edges {
//                 node {
//                   frontmatter {
//                     title
//                     slug
//                   }
//                 }
//               }
//             }
//           allCockpitAuthors(filter: {lang: {eq: "id"}}) {
//             edges {
//               node {
//                 title {
//                   slug
//                   value
//                 }
//               }
//             }
//           }
        
//         allCockpitOldpage(filter: {lang: {eq: "id"}}) {
//           edges {
//             node {
//               title {
//                 value
//               }
//             }
//           }
//         }
//         }
//           `
//          ).then(result => {
//         if (result.errors) {
//           console.log(result.errors)
//           reject(result.errors)
//         }

        
//         paginate({
//           createPage, 
//           items: result.data.allCockpitMarkdown.edges, 
//           itemsPerPage: 10, 
//           pathPrefix: '/',  
//           component: PaginateTemplate,
//           context: {
//             slug: "/",
//           },
//         })

//         const pages = result.data.allMarkdownRemark.edges
//         pages.forEach(( post,index ) => {
//           createPage({
//             path: `/${post.node.frontmatter.slug}/`,
//             component: markdown,
//             context: {
//               slug: post.node.frontmatter.slug,
//               previous: index === 0 ? null : pages[index - 1].node,
//               next: index === (pages.length - 1) ? null : pages[index + 1].node,
//               count: result.data.allCockpitMarkdown.edges,
//             },
//           });
//           return null
//           // createPage({
//           //   path: `${post.node.frontmatter.slug}/amp/`,
//           //   component: amp,
//           //   context: {
//           //     slug: post.node.frontmatter.slug,
//           //     previous: index === 0 ? null : pages[index - 1].node,
//           //     next: index === (pages.length - 1) ? null : pages[index + 1].node,
//           //   }
//           // });
//         })
//         const oldpage = result.data.allCockpitOldpage.edges
//         oldpage.forEach(( {node} ) => {
//           createPage({
//             path: `/${node.title.value}`,
//             component: oldPageTemplate,
//             context: {
//               slug: node.title.value
//             },
//           })
//         })
//         return null
    
//       })
    
//   return Promise.all([allItems, desainPageResults,statistikPageResults, kurikulumPageResults, ekonomiPageResults,pengembanganDiriPageResults,coronaPageResults,teknologiPageResults, islamPageResults]);
// }

// exports.sourceNodes = async({ actions, createNodeId, createContentDigest }) => {
//   // const { createNode } = actions
//   const result = await axios({
//     method:'get',
//     url: cockpitUrl+'/api/forms/export/form?token='+cockpitToken,
//     params :{
      
//       // id:  _id,
//     }
//   }).catch(error=>{
//       console.error(error.message) 
//   })

//   // console.log(result.data)


// const mailform = result.data
// // const email = result.data.data.email

// // console.log(mailform)

// mailform.forEach(data=>{
//   const node ={
//     ...data,
//     id: createNodeId(`cockpitmailforms-${data._id}`),
//     internal :{
//       type: 'cockpitmailforms',
//       contentDigest: createContentDigest(data)
//     }
//   }

//   actions.createNode(node)
//   // return
// })
// }

// exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
//   if (getConfig().mode === 'production') {
//     actions.setWebpackConfig({
//       devtool: false
//     });
//   }
// };

// if (process.env.NODE_ENV === 'production'){
//   console.log = function(){
// " "
//   }
// }