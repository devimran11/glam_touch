<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        body {
            margin-top: 20px;
        }

        * {
            margin: 0;
            padding: 0;

        }


        table {
            padding: 5px 5px;
            text-align: center;
        }

        th {
            border: .1px solid #ddd;
            padding: 1px 1px;
            background: #a616b6;
            color: #fff;
            text-align: center;
        }

        td {
            color: #000;
            padding: 10px 3px;
            text-align: center;
        }

        .address {
            text-align: center;
        }

        .logo {
            font-size: 32px;
            font-weight: bolder;

        }

    </style>
</head>

<body>
    <div class="container">

        <div class="row">
            <div class="col-lg-12">
                <div class="address">

                    <p class="logo"> {{ $outlet->name }} </p>
                    <p> Sales Report  From {{ $start_date }} TO {{  $end_date }} </p>
                    <p> {!! $outlet->address !!} </p>

                    <ul style="text-align: left;margin-left:40%;">
                        <li style=" list-style: square;"> Total Amount<strong> =
                                {{ number_format($total_amount) }}</strong> </li>
                        <li style=" list-style: square;"> Total Discount<strong> =
                                {{ number_format($total_discount) }}</strong> </li>

                        <li style=" list-style: square;"> Total Paid<strong> =
                                {{ number_format($total_paid) }}</strong></li>
                        <li style=" list-style: square;"> Total Due<strong> =
                                {{ number_format($total_due) }}</strong> </strong></li>
                    </ul>



                </div>
            </div>

            <div class="col-lg-12">
                <table class="table table-striped">

                    <tr>
                        <th width="5%">Serial No</th>
                        <th widht="10%">Date</th>
                        <th widht="10%">Customer Info.</th>
                        <th widht="5%">Invoice No</th>
                        <th widht="40%">Product & Quantity </th>
                        <th widht="30%">Payment</th>
                    </tr>

                    <tbody>

                        @foreach ($sales as $key => $sale)
                            <tr>
                                <td> {{ $key + 1 }} </td>
                                 <td> {{ $sale->created_at }} </td>
                                <td>
                                    <div>
                                        <p> {{ $sale->customer_name ? substr($sale->customer_name, 0, 10) : '' }} ,
                                            {{ $sale->customer_phone ? $sale->customer_phone : '' }} </p>
                                    </div>
                                </td>
                                <td> {{ $sale->invoice_no }} </td>
                                <td>
                                    <div>
                                        <ul>
                                            @foreach ($sale->sale_items as $item)
                                                <li style="list-style-type:none;">
                                                    {{ substr($item->product->name, 0, 20) }}.. *
                                                    {{ $item->quantity }} </li>
                                            @endforeach

                                        </ul>
                                    </div>
                                </td>

                                <td>
                                    <div style="text-align: left;margin-left:5px;">
                                        <p> Total : {{ number_format($sale->total) }} </p>
                                        <p> Discount : {{ number_format($sale->discount) }} </p>
                                        <p> Piad : {{ number_format($sale->paid) }} </p>
                                        <p> Due : {{ number_format($sale->due_amount) }} </p>
                                    </div>
                                </td>

                            </tr>

                        @endforeach


                    </tbody>
                </table>

            </div>
        </div>



    </div>

</body>

</html>
