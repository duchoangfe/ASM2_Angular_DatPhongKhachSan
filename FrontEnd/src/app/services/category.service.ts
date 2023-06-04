import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICate } from '../interfaces/Category';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    constructor(private http: HttpClient) {}
    getCategory(): Observable<ICate[]> {
        return this.http.get<ICate[]>(`http://localhost:3000/categories`);
    }
    getCategoryById(id: number): Observable<ICate> {
        return this.http.get<ICate>(`http://localhost:3000/categories/${id}`);
    }
    addCategory(product: ICate): Observable<ICate> {
        return this.http.post<ICate>(
            `http://localhost:3000/categories`,
            product
        );
    }
    updateCategory(product: ICate): Observable<ICate> {
        return this.http.put<ICate>(
            `http://localhost:3000/categories/${product.id}`,
            product
        );
    }
    deleteCategory(id: number): Observable<ICate> {
        return this.http.delete<ICate>(
            `http://localhost:3000/categories/${id}`
        );
    }
    relatedCategory(categoryId: number): Observable<any> {
        return this.http.get<any>(
            `http://localhost:3000/categories/${categoryId}?_embed=categories`
        );
    }
}
