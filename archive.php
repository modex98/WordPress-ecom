<?php get_header(); ?>


<div id="archive" class="file">

    <div class="container">

        <?php if(have_posts()): ?>

        <?php while(have_posts()): the_post(); ?>

        <div class="content">
            <?php get_sidebar(); ?>

            <div class="post-content">
                <h1><?php the_title(); ?></h1>
                <?php the_excerpt(); ?>
            </div>
        </div>

        <?php endwhile; ?>

        <?php endif; ?>

    </div>

</div>


<?php get_footer(); ?>