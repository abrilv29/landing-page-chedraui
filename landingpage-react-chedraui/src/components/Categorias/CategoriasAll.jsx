function CategoriasAll() {
  return (
    <section className="font-montserrat font-medium">
    <div className="mx-auto max-w-screen-xl px-4 py-1 sm:px-6 sm:py-2 lg:px-8">
      <header>
        <h2 className="text-xl font-bold text-customBlue sm:text-3xl">Encuentra los mejores productos</h2>
      </header>
  
      <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        <li>
          <a href="#" className="group block overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />
          </a>
        </li>
  
        <li>
          <a href="#" className="group block overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />
          </a>
        </li>
      </ul>
    </div>
  </section>
  )
}

export default CategoriasAll