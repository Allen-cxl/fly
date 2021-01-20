<?php if (!defined('THINK_PATH')) exit(); if(is_array($list)): foreach($list as $key=>$vo): ?><li><a href="/home/index/news/id/<?php echo ($vo["id"]); ?>">
                <img src="/<?php echo ($vo["pic"]); ?>" class="y_fl">
                <span class="y_news_text y_fr">
                    <span class="y_top_title">
                        <b><font color="#000000"><?php echo ($vo["title"]); ?></font></b>
                     </span>
                    <label><?php echo date("Y-m-d",$vo["time"]);?></label>
                    <p><?php echo ($vo["subtitle"]); ?></p>
                </span></a>
            </li><?php endforeach; endif; ?>