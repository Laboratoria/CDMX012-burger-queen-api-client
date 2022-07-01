export const Descriptions = ({ newProduct }) => {
  return (
    <section className='section_recipes'>
      <img className='img_recipe' src={newProduct.urlImg}></img>
      <h2 className='name_recipe'>{newProduct.name}</h2>
      <p className='recipe_recipe'>{newProduct.description}</p>
      <p className='melPrep_recipe'>Tiempo de preparación: {newProduct.melPrep}</p>
      <p className='category_recipe'>Preparado unicamiente durante: {newProduct.category}</p>
      <p className='price_recipe'> ${newProduct.price}</p>
      <button className="btn_close">Cerrar</button>
    </section>
  )
}
