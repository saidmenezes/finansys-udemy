import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Category } from '../pages/categories/models/category';

export class InMemoryDataBase implements InMemoryDbService {
    createDb () {
        const CATEGORIES: Category[] = [
            { id: 1, name: 'Moradia', description: 'Pagamentos de Contas da Casa' },
            { id: 2, name: 'Saude', description: 'Plano de Saude e Remedios' },
            { id: 3, name: 'Lazer', description: 'Cinema, Parques, Praias etc' },
            { id: 4, name: 'Salario', description: 'recebimento de salario' },
            { id: 5, name: 'Freelas', description: 'trabalhos como freelancer' }
        ];

        return { CATEGORIES }
    }
}