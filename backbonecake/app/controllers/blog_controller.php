<?php
/**
 * Created by JetBrains PhpStorm.
 * User: webonise
 * Date: 15/7/14
 * Time: 9:22 AM
 * To change this template use File | Settings | File Templates.
 */

class BlogController extends AppController {
    var $helpers = array('Form', 'Html', 'Javascript');
   public  $uses = array(
     'Blog'
   );
 public function index(){
     //Configure::write('debug', 2);

 }
    public function listBlog(){
        $this->layout='ajax';
        $this->autoRender = false;
        $res = $this->Blog->getBlog();
        echo json_encode($res);
    }

    public function saveBlog(){
        $this->layout='ajax';

        $this->autoRender = false;
        $data = json_decode(file_get_contents('php://input'));
        $res = $this->Blog->saveBlog($data);
        echo json_encode($res);
    }
}
