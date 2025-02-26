<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>토글 카드 웹페이지</title>
    <style>
        body {
            background-color: gray;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }
        #top-image {
            width: 300px;
            height: 150px;
            margin-bottom: 20px;
        }
        .toggle-button {
            margin-bottom: 20px;
        }
        .card-container {
            display: flex;
            justify-content: center;
            gap: 20px;
        }
        .card {
            width: 200px;
            height: 300px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid #000;
            background-color: white;
            text-align: center;
        }
        .card img {
            width: 100%;
            height: auto;
        }
    </style>
</head>
<body>
    <img id="top-image" src="src/card/top-image.png" alt="Top Image">
    <button class="toggle-button" onclick="toggleView()">토글 3카드 / 1카드</button>
    <div id="card-container" class="card-container"></div>
    
    <script src="index.js"></script>
</body>
</html>