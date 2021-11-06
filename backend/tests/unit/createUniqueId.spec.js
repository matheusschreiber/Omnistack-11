const createUniqueId = require('../../src/utils/createUniqueId');

describe('Create Unique ID', ()=>{
  it('should generate a unique 8 characters long (4 bytes) id', () =>{
    const id = createUniqueId();
    expect(id).toHaveLength(8);
  })
})