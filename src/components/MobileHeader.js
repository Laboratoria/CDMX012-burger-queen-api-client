import '../css/Menu.css'

export default function MobileHeader(){
    return(
        <header className='header-container'>
            <img className="logo" alt='logoBQ' src={require('../assets/burger4.png')}/>
            <section className='search'>
            <img className='Search' alt='searchIcon' src={require('../assets/Search.png')}/>
            <input type='text' placeholder='Search...'/>
            </section>
            <button className="hambMenu"/>
        </header>
    )
}