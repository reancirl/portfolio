import React, { useState, useRef } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';

const meta = {
  title: 'Ulam Scan',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  const [imageUrl, setImageUrl] = useState(null);
  const [imageBase64, setImageBase64] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);
  const fileInputCaptureRef = useRef(null); 
  const [apiResponseContent, setApiResponseContent] = useState('');
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  const apiUrl = process.env.REACT_APP_OPENAI_API_URL;
  const model = process.env.REACT_APP_OPENAI_MODEL;
  const textPrompt = process.env.REACT_APP_OPENAI_TEXT;
  
  const handleImageUpload = (event) => {
    setApiResponseContent('');
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result.split(',')[1]; // Extract base64 part
        setImageUrl(reader.result); // Full data URL
        setImageBase64(base64); // Base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const handleScan = async () => {
    setApiResponseContent('');
    if (imageBase64) {
      setIsLoading(true);
  
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: model,
            messages: [
              {
                role: "user",
                content: [
                  {
                    type: "text",
                    text: textPrompt
                  },
                  {
                    type: "image_url",
                    image_url: {
                      url: `data:image/jpeg;base64,${imageBase64}`
                    }
                  }
                ]
              }
            ],
            max_tokens: 300
          })
        });
  
        const data = await response.json();
        if (data.choices && data.choices.length > 0 && data.choices[0].message) {
          const content = data.choices[0].message.content;
          setApiResponseContent(content);
        } else {
          setApiResponseContent('No content found in response');
        }

      } catch (error) {
        console.error('Error making API request:', error);
      }
  
      setIsLoading(false);
    } else {
      console.log("No image uploaded");
    }
  };
  

  const handleClearImage = () => {
    setImageUrl(null);
    setImageBase64(null);
    setApiResponseContent('');
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
    textAlign: 'center',
  };

  const imageBoxStyle = {
    width: '100%',
    maxWidth: '500px',
    height: '500px',
    border: '1px solid #CCFF00',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px auto',
  };

  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  const triggerFileInputUpload = () => {
    fileInputRef.current.click();
  };

  const triggerFileInputCapture = () => {
    fileInputCaptureRef.current.click();
  };

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
        {apiResponseContent && (
          <div style={containerStyle}>
            <div style={{ maxWidth: '600px', margin: '20px auto', textAlign: 'left' }}>
              <ReactMarkdown>{apiResponseContent}</ReactMarkdown>
            </div>
            <button className='inline-block px-8 py-4 text-center text-white hover:text-black tracking-tighter hover:bg-green-400 border-2 border-white focus:border-green-400 focus:border-opacity-40 hover:border-green-400 focus:ring-4 focus:ring-green-400 focus:ring-opacity-40 rounded-full transition duration-300' 
                    onClick={handleClearImage}>
                Clear Result
            </button>
          </div>
        )}
      {isLoading ? (
        <div style={containerStyle}>
          Please wait ...
          <br />
          Currently Talking to AI 🤖🤔💪
        </div>
      ) : (
        <div style={containerStyle}>
          <input type="file" ref={fileInputRef} onChange={handleImageUpload} style={{ display: 'none' }} />
          {isMobile && <input type="file" ref={fileInputCaptureRef} onChange={handleImageUpload} style={{ display: 'none' }} capture="environment" />}
          <button onClick={triggerFileInputUpload} className='inline-block px-8 py-4 text-center text-white hover:text-black tracking-tighter hover:bg-green-400 border-2 border-white focus:border-green-400 focus:border-opacity-40 hover:border-green-400 focus:ring-4 focus:ring-green-400 focus:ring-opacity-40 rounded-full transition duration-300'>
            Upload Image
          </button>
          {isMobile && (
            <button onClick={triggerFileInputCapture} className='inline-block px-8 py-4 text-center text-white hover:text-black tracking-tighter hover:bg-green-400 border-2 border-white focus:border-green-400 focus:border-opacity-40 hover:border-green-400 focus:ring-4 focus:ring-green-400 focus:ring-opacity-40 rounded-full transition duration-300'>
              Capture Image
            </button>
          )}
          {imageUrl ? (
            <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '500px', margin: '20px auto' }} />
          ) : (
            <div style={imageBoxStyle}>
              Empty
            </div>
          )}
          <div>
            <button className='inline-block px-8 py-4 text-center text-white hover:text-black tracking-tighter hover:bg-green-400 border-2 border-white focus:border-green-400 focus:border-opacity-40 hover:border-green-400 focus:ring-4 focus:ring-green-400 focus:ring-opacity-40 rounded-full transition duration-300' 
                    onClick={handleScan}>
                Scan Image
            </button>
            <button className='inline-block px-8 py-4 text-center text-white hover:text-black tracking-tighter hover:bg-green-400 border-2 border-white focus:border-green-400 focus:border-opacity-40 hover:border-green-400 focus:ring-4 focus:ring-green-400 focus:ring-opacity-40 rounded-full transition duration-300' 
                    onClick={handleClearImage}>
                Clear Image
            </button>
          </div>
        </div>
      )}
      
    </React.Fragment>
  );
}
