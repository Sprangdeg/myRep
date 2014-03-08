<?php
  require_once('model.php');
  
  $allComment = getAllComment($db);

  
?>

<?php 
  forEach($allComment as $comment)
  {
?>
    <section>A new comment as been created</section>
    <p>something here again</p>
    <p>
    <?php 
    echo $comment;
    ?>
    </p>
    <?php 
    //end of the forEach loop
  }
    ?>

