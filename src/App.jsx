import logo from './media/logo flores.png';
import './styles/styles.css';
import rosas from './media/rosas.jpg';
import girasoles from './media/girasoles.jpg';

function App() {
  return (
    <div className="App">
         <header>
        <ul className="navbar">
            
            <li>
                <img src={logo} alt="imagen" className="logo" />
            </li>
         
        <li>
            
            <button className="botonGenerico mainButton"> + Nuevo post</button>
        </li>
        
            
        <li>
            <div className="buscar">
                
                <input placeholder="Buscar nombre de flor"  />
                <i className="fas fa-search botonGenerico iconoBusqueda"></i>
            </div>
                </li>
        <li>
            
            
           
            <button className="botonGenerico secondaryButton"> Login</button>
        </li>
        <li>
           
            <button className="botonGenerico mainButton"> Registro</button>
            </li>
        
        </ul>
    </header>
    <main>
        <section>
            <h1>Clases de Flores</h1>
           
                <ul className="breedCardContainer"> 
                   <CardClasesFlores nombreFlor= 'Rosas' imagen={rosas}/>  {/*Aca designo nombre y llamo la imagen */}
                   <CardClasesFlores nombreFlor= 'Girasoles' imagen={girasoles}/>
    </ul>
</section>
<section></section>
</main>
<footer></footer>
</div>
  );
}

function CardClasesFlores(props) {  {/*Aca coloco entre parentesis el props */}
    return (
        <li className="breedCard"> {/*Aca puedo añadir propiedades de cambio a todo si lo requiero */}
            <div className="contenedorImagen">
                <img src={props.imagen} alt={props.nombreFlor} />  {/*Aca para colocar funcion a la imagen */}
            </div>

            <span className="breedTitle">{props.nombreFlor}</span> {/*Aca para colocar la funcion del nombre */}
        </li>
    );
}

export default App;
