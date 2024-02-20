import React from 'react';

const Chessboard = () => {
    const pieces = {
        whiteKing: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Chess_klt60.png',
        whiteQueen: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Chess_qlt60.png',
        whiteRook: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Chess_rlt60.png',
        whiteBishop: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Chess_blt60.png',
        whiteKnight: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Chess_nlt60.png',
        whitePawn: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png',
        blackKing: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Chess_kdt60.png',
        blackQueen: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Chess_qdt60.png',
        blackRook: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Chess_rdt60.png',
        blackBishop: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png',
        blackKnight: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Chess_ndt60.png',
        blackPawn: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png',
    };

    const startingPosition = [
        ['blackRook', 'blackKnight', 'blackBishop', 'blackQueen', 'blackKing', 'blackBishop', 'blackKnight', 'blackRook'],
        ['blackPawn', 'blackPawn', 'blackPawn', 'blackPawn', 'blackPawn', 'blackPawn', 'blackPawn', 'blackPawn'],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        ['whitePawn', 'whitePawn', 'whitePawn', 'whitePawn', 'whitePawn', 'whitePawn', 'whitePawn', 'whitePawn'],
        ['whiteRook', 'whiteKnight', 'whiteBishop', 'whiteQueen', 'whiteKing', 'whiteBishop', 'whiteKnight', 'whiteRook'],
    ];

    return (
        <div className="chessboard-container">
            <div className="grid grid-cols-8 gap-0">
                {Array.from({ length: 8 }, (_, rowIndex) => (
                    <div key={rowIndex} className="flex">
                        {Array.from({ length: 8 }, (_, colIndex) => (
                            <div key={colIndex} className={`square ${getSquareColor(rowIndex, colIndex)}`}>
                                {renderChessPiece(rowIndex, colIndex)}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );

    function getSquareColor(rowIndex, colIndex) {
        const isEvenSquare = (rowIndex + colIndex) % 2 === 0;
        return isEvenSquare ? 'bg-gray-300' : 'bg-gray-800';
    }

    function renderChessPiece(rowIndex, colIndex) {
        const pieceType = startingPosition[rowIndex][colIndex];

        if (pieceType) {
            return (
                <img
                    src={pieces[pieceType]}
                    alt={pieceType}
                    className="chess-piece w-full h-full object-contain mx-auto"
                />
            );
        }

        return null;
    }
};

export default Chessboard;
