import React, { useRef, useState } from 'react';
import './DraggableBox.css'; // Assuming you store the CSS in this file

const DraggableBox = ({ setScent3DClick }) => {
    const draggableBoxRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - draggableBoxRef.current.offsetLeft);
        setStartY(e.pageY - draggableBoxRef.current.offsetTop);
        setScrollLeft(draggableBoxRef.current.scrollLeft);
        setScrollTop(draggableBoxRef.current.scrollTop);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - draggableBoxRef.current.offsetLeft;
        const y = e.pageY - draggableBoxRef.current.offsetTop;
        const walkX = (x - startX) * 1; // Adjust the multiplier for faster/slower scrolling
        const walkY = (y - startY) * 1;
        draggableBoxRef.current.scrollLeft = scrollLeft - walkX;
        draggableBoxRef.current.scrollTop = scrollTop - walkY;
    };

    return (
        <div className="container">
            <div
                className="draggable-box"
                ref={draggableBoxRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <div onMouseEnter={() => setScent3DClick(true)}  onMouseLeave={() => setScent3DClick(false)} className="point" style={{ top: '50px', left: '100px' }}></div>
                

                <div  onMouseEnter={() => setScent3DClick(true)}  onMouseLeave={() => setScent3DClick(false)} className="point" style={{ top: '200px', left: '300px' }}></div>
                

                <div onMouseEnter={() => setScent3DClick(true)}  onMouseLeave={() => setScent3DClick(false)} className="point" style={{ top: '400px', left: '50px' }}></div>
                

                <div onMouseEnter={() => setScent3DClick(true)}  onMouseLeave={() => setScent3DClick(false)} className="point" style={{ top: '150px', left: '500px' }}></div>
                

                <div onMouseEnter={() => setScent3DClick(true)}  onMouseLeave={() => setScent3DClick(false)} className="point" style={{ top: '350px', left: '400px' }}></div>
                

                <div onMouseEnter={() => setScent3DClick(true)}  onMouseLeave={() => setScent3DClick(false)} className="point" style={{ top: '60px', left: '200px' }}></div>
                

                <div onMouseEnter={() => setScent3DClick(true)}  onMouseLeave={() => setScent3DClick(false)} className="point" style={{ top: '250px', left: '100px' }}></div>
                

                <div onMouseEnter={() => setScent3DClick(true)}  onMouseLeave={() => setScent3DClick(false)} className="point" style={{ top: '100px', left: '350px' }}></div>
               

                <div onMouseEnter={() => setScent3DClick(true)}  onMouseLeave={() => setScent3DClick(false)} className="point" style={{ top: '300px', left: '200px' }}></div>
                

                <div onMouseEnter={() => setScent3DClick(true)}  onMouseLeave={() => setScent3DClick(false)} className="point" style={{ top: '20px', left: '20px' }}></div>
                

                <div onMouseEnter={() => setScent3DClick(true)}  onMouseLeave={() => setScent3DClick(false)} className="point" style={{ top: '120px', left: '220px' }}></div>
               

                <div onMouseEnter={() => setScent3DClick(true)}  onMouseLeave={() => setScent3DClick(false)} className="point" style={{ top: '370px', left: '300px' }}></div>
                

                <div onMouseEnter={() => setScent3DClick(true)}  onMouseLeave={() => setScent3DClick(false)} className="point" style={{ top: '220px', left: '400px' }}></div>
                

                <div onMouseEnter={() => setScent3DClick(true)}  onMouseLeave={() => setScent3DClick(false)} className="point" style={{ top: '280px', left: '500px' }}></div>
                

                <div onMouseEnter={() => setScent3DClick(true)}  onMouseLeave={() => setScent3DClick(false)} className="point" style={{ top: '50px', left: '500px' }}></div>
                

                <div onMouseEnter={() => setScent3DClick(true)}  onMouseLeave={() => setScent3DClick(false)} className="point" style={{ top: '320px', left: '150px' }}></div>
                

                <div onMouseEnter={() => setScent3DClick(true)}  onMouseLeave={() => setScent3DClick(false)} className="point" style={{ top: '180px', left: '50px' }}></div>
                

                <div onMouseEnter={() => setScent3DClick(true)}  onMouseLeave={() => setScent3DClick(false)} className="point" style={{ top: '340px', left: '450px' }}></div>
                

                <div onMouseEnter={() => setScent3DClick(true)}  onMouseLeave={() => setScent3DClick(false)} className="point" style={{ top: '70px', left: '300px' }}></div>
               

                <div onMouseEnter={() => setScent3DClick(true)}  onMouseLeave={() => setScent3DClick(false)} className="point" style={{ top: '230px', left: '350px' }}></div>
                

                <div onMouseEnter={() => setScent3DClick(true)}  onMouseLeave={() => setScent3DClick(false)} className="point" style={{ top: '60px', left: '60px' }}></div>
                

                <div onMouseEnter={() => setScent3DClick(true)}  onMouseLeave={() => setScent3DClick(false)} className="point" style={{ top: '190px', left: '420px' }}></div>
                

                <div onMouseEnter={() => setScent3DClick(true)}  onMouseLeave={() => setScent3DClick(false)} className="point" style={{ top: '330px', left: '100px' }}></div>
                

                <div onMouseEnter={() => setScent3DClick(true)}  onMouseLeave={() => setScent3DClick(false)} className="point" style={{ top: '410px', left: '470px' }}></div>
                

                <div onMouseEnter={() => setScent3DClick(true)}  onMouseLeave={() => setScent3DClick(false)} className="point" style={{ top: '140px', left: '270px' }}></div>
                
            </div>
        </div>
    );
};

export default DraggableBox;
