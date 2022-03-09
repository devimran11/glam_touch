<html>

<head>

    <title>
        Print
    </title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
    </style>

</head>




<body>
    <div class="page" style="margin-top:5.5%;margin-left:4.5%;width:100%;">
      <?php for($i = 1; $i <= $howmany; $i++): ?>
      <div style="text-align:center;width:23%;display:inline-block;height:9.5%;padding:0;margin:0">
        <b style="float: left;
         margin-left: 25px;margin-top:-20px;
        letter-spacing: 10px"> <?php echo e($product_barcode->barcode_number); ?></b>
          <?php echo $product_barcode->barcode; ?>

          <span style="margin-left:-60px">
              <?php echo e(substr($product->name,0,15)); ?>

          </span>
          <br/>
        <span style="font-size:14px;margin-left:-60px;"> <b>TK. <?php echo e($product->price); ?>.00 </b></span>
         </div>
      <?php endfor; ?>
    </div>
</body>

<script type="text/javascript">
    window.addEventListener('DOMContentLoaded', (event) => {
      window.print();
});
</script>
</html>
<?php /**PATH C:\xampp\htdocs\sufiglobal_web_app\resources\views/admin/pdf/barcode.blade.php ENDPATH**/ ?>