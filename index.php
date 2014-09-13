<!doctype>
<html>

<head>
    <title>Cocaine & Caviar Text Generator</title>
    <link href="http://fonts.googleapis.com/css?family=Roboto:700,400,300" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="style.css" />

    <script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
    <script src="assets/js/circletype.min.js" type="text/javascript"></script>
    <script src="assets/js/modernizr-2.6.2-respond-1.1.0.min.js"></script>
    <script src="assets/js/plugins.js"></script>
    <script src="assets/js/editor.js"></script>
    <script src="assets/js/base64binary.js"></script>
    <script src="assets/js/facebook.js"></script>
</head>

<body>

    <div class="container">
        <h1>Generate Facebook Cover</h1>

        <div class="cover">

            <div class="user">
                <img class="avatar" src="assets/img/default_avatar.png" />
                <div class="name">John Doe</div>
            </div>

            <div class="dark_bg"></div>

            <?php include 'assets/templates/crooks.php'; ?>

            <svg >
        </div>

        <div class="form">

            <p>
                <label for="first">First line</label>
                <input id="first" placeholder="Cocaine" />
            </p>

            <p>
                <label for="second">Second line</label>
                <input id="second" placeholder="Caviar" />
            </p>

            <p>
                <label for="second">Third line</label>
                <input id="third" placeholder="Crooks&Castles" />
            </p>

            <p>
                <label for="second">Fourth line</label>
                <input id="fourth" placeholder="Est. 2002" />
            </p>

            <p class="full">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve" xmlns:xml="http://www.w3.org/XML/1998/namespace">
                        <path fill="#FFF" d="M398.14,50.5H117.98c-36.408,0-68.48,26.452-68.48,62.86v280.16c0,36.408,32.072,68.98,68.48,68.98h173.466  c-0.325-54,0.077-114.134-0.185-166.387c-11.064-0.112-22.138-0.684-33.202-0.854c0.041-18.467,0.017-37.317,0.024-55.781  c11.057-0.137,22.121-0.163,33.178-0.268c0.338-17.957-0.338-36.025,0.354-53.966c1.103-14.205,6.519-28.563,17.14-38.377  c12.859-12.239,31.142-16.397,48.387-16.912c18.233-0.163,36.468-0.076,54.71-0.068c0.072,19.24,0.072,38.482-0.008,57.722  c-11.789-0.02-23.585,0.023-35.374-0.025c-7.468-0.467-15.145,5.198-16.504,12.609c-0.177,12.875-0.064,25.757-0.057,38.628  c17.285,0.073,34.577-0.02,51.862,0.044c-1.264,18.629-3.581,37.168-6.285,55.637c-15.272,0.137-30.554,1.514-45.818,1.602  c-0.129,52.236,0.04,112.395-0.093,166.395h38.564c36.408,0,63.36-32.572,63.36-68.98V113.36C461.5,76.952,434.548,50.5,398.14,50.5  z" />
                    </svg>Generate and upload to Facebook</button>
            </p>

        </div>

        <p class="copyright">&copy; 2014. Developed by <a href="http://mariusbalaj.com">Marius Balaj</a> and <a href="#">Duckygo</a></p>

    </div>

    <div id="hidden" style="display:none"></div>
    <a id="hidden-link" href="" style="display:none"></a> 
</body>

</html>
