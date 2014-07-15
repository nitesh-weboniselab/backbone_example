<?php
class Blog extends AppModel {
public function getBlog(){
    return $this->find('all',array('condition'=>array(1 => 1)));
}
    public function saveBlog($post){
        $this->create($post);
        if($this->save()){
            return true;
        }
        return false;
    }
}
