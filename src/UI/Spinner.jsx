function Spinner() {
    return (
      <>
        <style>
          {`
            .spinnerContainer {
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            
            .spinner {
              width: 9rem;
              height: 9rem;
              border-radius: 50%;
              background: conic-gradient(white 25%, #0306d6 25%);
              -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
              animation: rotate 1.5s infinite linear;
            }
            
            @keyframes rotate {
              to {
                transform: rotate(1turn);
              }
            }
          `}
        </style>
        <div className="spinnerContainer">
          <div className="spinner"></div>
        </div>
      </>
    );
}
  
export default Spinner;
