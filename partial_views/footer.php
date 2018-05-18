<footer>
<div class="container">
    <div class="row">
        <div class="col-6">
        &copy; Shearings 1903 - <?= date(Y); ?>
        </div>
        <div class="col-6 text-right">
            <small>Commit No: <?= file_get_contents("commit.txt"); ?></small>
        </div>
    </div>
</div>
</footer>