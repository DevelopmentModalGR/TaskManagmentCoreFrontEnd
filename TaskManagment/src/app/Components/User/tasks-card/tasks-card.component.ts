import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Job } from 'src/app/Models/job.model';

@Component({
  selector: 'app-tasks-card',
  templateUrl: './tasks-card.component.html',
  styleUrls: ['./tasks-card.component.css']
})

export class TasksCardComponent implements OnInit {

  @Input() job!: Job;

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  /* addToCart() {
    CartUtil.add(
      this.product._id,
      this.product.title,
      1,
      this.product.price,
      this.product.images
    )

    this.toastr.success(`${this.product.title} adicionado ao carrinho`, 'Produto Adicionado');
  } */


}
