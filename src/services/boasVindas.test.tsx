import { boasVindas } from "./boasVindas";

describe('boasVindas', () => {

    const mockAlert2    = jest.fn();
    window.alert        = mockAlert2;

    it('Verificar se exibir alert Boas Vinda, César Silva', () => {
        boasVindas();
        expect(mockAlert2).toBeCalledWith('Boas Vinda, César Silva');
    })

})