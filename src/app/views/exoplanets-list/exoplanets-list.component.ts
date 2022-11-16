import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Exoplanet } from 'src/app/models/exoplanet';
import { ExoplanetService } from 'src/app/services/exoplanet.service';

@Component({
  selector: 'app-exoplanets-list',
  templateUrl: './exoplanets-list.component.html',
  styleUrls: ['./exoplanets-list.component.css']
})
export class ExoplanetsListComponent implements OnInit, AfterViewInit{

    constructor(private exoplanetService: ExoplanetService) {}

    public exoplanets: Exoplanet[] = []
    displayedColumns: string[] = ['name', 'stars', 'planets', 'moons', 'year', 'distance'];
    dataSource = new MatTableDataSource<Exoplanet>(this.exoplanets);
    
    ngAfterViewInit(){
      /*this.dataSource = new MatTableDataSource<Exoplanet>(this.exoplanets);
      this.dataSource.paginator = this.paginator;*/
    }
  
    @ViewChild(MatPaginator) paginator?: MatPaginator;
  
    
    ngOnInit() {
      this.exoplanetService.getAll().subscribe(exoplanets => {
        this.exoplanets = exoplanets;
        this.dataSource = new MatTableDataSource<Exoplanet>(this.exoplanets);
        if(this.paginator){
          this.dataSource.paginator = this.paginator;
        }});
  }}
