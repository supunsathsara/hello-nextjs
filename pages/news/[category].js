function ArticleListByCategory({ articles, category }) {
  return (
    <>
      <h1>
        Showing News for category <i>{category}</i>
      </h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} <b>{article.title}</b> | {article.category}
            </h2>
            <p>{article.description}</p>
          </div>
        );
      })}
    </>
  );
}

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  //console.log(req.headers.cookie);
  console.log(query);
  res.setHeader('Set-Cookie', ['foo=bar', 'bar=baz']);
  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}
