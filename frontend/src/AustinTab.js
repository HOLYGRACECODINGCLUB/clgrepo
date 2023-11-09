import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Austintab.css';

function Any() {
  const [mainheader, setMainheader] = useState('');
  const [subheader, setSubheader] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState(null);
  const [posts, setPosts] = useState([]);
  const [response1data, setResponse] = useState([]);
  const [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('main_head', mainheader);
    formData.append('sub_head', subheader);
    formData.append('content', content);
    formData.append('date', date);
    formData.append('image_url', image);
    try {
      const response1 = await axios.get("event/");
      console.log(response1);
      // Assuming response1.data is an array of arrays, each representing a list of item

    }
    catch (error) {
      console.log(error)
    }
    try {
      const response = await axios.post("eventget", formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set content type for FormData
        }
      });
      console.log(response);
      alert("succesful");
      // window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
// ... (your existing code for form submission)
  };

  const onLoad = async () => {
    try {
      const response1 = await axios.get("event/");
      console.log(response1.data);
      console.log(response1.data.reverse());
      setResponse(response1.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onLoad();
  }, []);

  useEffect(() => {
    if (response1data.length > 0) {
      const updatedInitialData = response1data.map((item, index) => ({
        id: index + 1, // Calculate the id starting from 1
        main_head: item.main_head,
        sub_head: item.sub_head,
        content: item.content,
        image_url: item.image_url,
        date: item.date,
      }));
      setData(updatedInitialData);
    }
  }, [response1data]);

  const handleImageChange = (e) => {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(e.target.files[0]);
    setImage(e.target.files[0]); // Update image state with selected file// ... (your existing code for handling image change)
  };

  const CardList = () => {
    const handleEdit = (id) => {
      console.log(`Edit card with ID: ${id}`);
    };

    const handleDelete = (id) => {
      setData(data.filter(card => card.id !== id));
    };

    return (
      <div>
        {data.map((card) => (
          <div key={card.id} className="card2">
            <img className='imageaus' src={card.image_url} alt={`Card ${card.id}`} />
            <h1>{card.main_head}</h1>
            <h2>{card.sub_head}</h2>
            <h3>{card.date}</h3>
            <p>{card.content}</p>
            <button onClick={() => handleEdit(card.id)}>Edit</button>
            <button onClick={() => handleDelete(card.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div>
      <div className="card" >
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="input-group">
            <label>Main Heading:</label>
            <input type="text" value={mainheader} onChange={(e) => setMainheader(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Sub heading:</label>
            <input type="text" value={subheader} onChange={(e) => setSubheader(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Content:</label>
            <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Date:</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className="input-group image-preview">
            <label>Image:</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <p><img className='imageaus' id="output" width="200" /></p>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <label>On Air</label>
      <div style={{ paddingTop: "100px" }}>

        <CardList />
      </div>
    </div>
  );
}

export default Any;