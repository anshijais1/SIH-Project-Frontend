import React from 'react';
import './App.css';

function App() {
  return (
    <><div className="App">
    {/* Video background */}
    <div className="video-background">
      <video autoPlay loop muted>
        <source src="background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    {/* Content over the video */}
    <header className="navigation">
      <nav>
        <ul>
          <li><a href="#home">Home |</a></li>
          <li><a href="#key-benefits">Key Benefits |</a></li>
          <li><a href="#visual-demo">Visual Demo |</a></li>
          <li><a href="#about">About |</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
    <div className="div">
      <h1>Instant Face detection with cutting edge AI</h1>
      <br />
      <h3>"Instant Recognition, Effortless Integration."</h3>
      <br />
      <p id='para'>Experience the future of security with instant face detection powered by cutting-edge AI. Our technology delivers accurate and real-time recognition, ensuring seamless and secure operations. Simplify your processes with effortless integration into any system.</p>
     <br />
      <button type="button" class="btn btn-primary">Try Now</button>
      </div>
   </div>
   <div className="features">
    <h1 id='feat'>Key Features: Deep Face Detection</h1>
    <br />
    <br />
    <div className="div1">
      <div className="text">
        <h2 id='feature'>Accurate Detection</h2>
<p id='featuredescription'> Accurate detection in facial recognition systems refers to the ability to identify and verify facial features with a high degree of precision. This technology uses sophisticated algorithms to analyze facial landmarks, patterns, and unique identifiers, ensuring that each face is recognized correctly, even in complex scenarios such as varying lighting conditions, different angles, and partial obstructions. Accurate detection minimizes false positives and negatives, enhancing security, efficiency, and reliability in applications like surveillance, access control, and identity verification. It is essential for environments where precision is critical, providing confidence that every face is identified with exceptional accuracy.
</p>  </div>
      <div className="img"><img src="" alt="" /></div>
    </div>


    <div className="div1">
      
      <div className="img"><h1>hello</h1></div>
      <div className="text">
        <h2 id='feature'>Accurate Detection</h2>
<p id='featuredescription'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, repudiandae sint quaerat ullam est culpa minus fugit maiores delectus, maxime laborum sapiente eius nemo. Libero aperiam doloribus odio voluptates corrupti reiciendis voluptate similique doloremque! Laudantium!</p>  </div>
    </div>


    <div className="div1">
      <div className="text">
        <h2 id='feature'>Accurate Detection</h2>
<p id='featuredescription'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, repudiandae sint quaerat ullam est culpa minus fugit maiores delectus, maxime laborum sapiente eius nemo. Libero aperiam doloribus odio voluptates corrupti reiciendis voluptate similique doloremque! Laudantium!</p>  </div>
      <div className="img"><h1>hello</h1></div>
    </div>

    <div className="div1">
      
      <div className="img"><h1>hello</h1></div>
      <div className="text">
        <h2 id='feature'>Accurate Detection</h2>
<p id='featuredescription'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, repudiandae sint quaerat ullam est culpa minus fugit maiores delectus, maxime laborum sapiente eius nemo. Libero aperiam doloribus odio voluptates corrupti reiciendis voluptate similique doloremque! Laudantium!</p>  </div>
    </div>
    
   </div>
  
  </>
    
  );
}

export default App;

