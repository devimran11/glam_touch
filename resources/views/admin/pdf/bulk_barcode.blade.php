<html>

<head>

    <title>
        Print
    </title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <style>
        * {
            margin: 0;
            padding: 0;
        }

    </style>

    {{-- @php
        dd($products);
    @endphp --}}

</head>




<body>
    <div class="page" style="margin-top:5.5%;margin-left:4.5%;width:100%;">

        @foreach ($products as $item)

            @for ($i = 1; $i <= $item['total_stock']; $i++)
                <div style="text-align:center;width:23%;display:inline-block;height:9.5%;margin-top:5%;">
                    <b style="float: left;
                          margin-left: 25px;margin-top:-20px;
                          letter-spacing: 10px"> {{ $item['product']['product_barcode']['barcode_number'] }}</b>
                       {!!  $item['product']['product_barcode']['barcode']  !!}
                    <span style="margin-left:-60px">
                        {{ substr( $item['product']['name'], 0, 15) }}
                    </span>
                    <br />
                    <span style="font-size:14px;margin-left:-60px;"> <b>TK. {{   $item['product']['price'] }}.00 </b></span>
                </div>

            @endfor

        @endforeach
    </div>
</body>

<script type="text/javascript">
    window.addEventListener('DOMContentLoaded', (event) => {
        window.print();
    });
</script>

</html>
