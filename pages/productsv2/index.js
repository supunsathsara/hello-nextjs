function ProductsV2({ data }) {
  return <h1 className="content">{data}</h1>;
}

export default ProductsV2;

export async function getStaticProps(context) {
  console.log('Running getStatic', context.previewData);
  return {
    props: {
      data: context.preview
        ? 'Preview Mode is enabled'
        : 'Preview Mode is disabled',
    },
  };
}
