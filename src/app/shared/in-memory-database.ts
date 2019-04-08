import { InMemoryDbService } from 'angular-in-memory-web-api';

export class inMemoryDataBase implements InMemoryDbService {
    createDb () {
        const categories = [
            { id: 1, name: 'Moradia', description: 'Pagamentos de Contas da Casa' },
            { id: 2, name: 'Saude', description: 'Plano de Saude e Remedios' },
            { id: 3, name: 'Lazer', description: 'Cinema, Parques, Praias etc' },
            { id: 4, name: 'Salario', description: 'recebimento de salario' },
            { id: 5, name: 'Freelas', description: 'trabalhos como freelancer' }
        ];

        return { categories }
    }
}