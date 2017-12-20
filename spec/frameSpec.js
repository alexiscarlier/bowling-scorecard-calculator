describe("A frame of bowling", function(){
  it("calculates a total for two roles", function(){
     var frame = new Frame([2, 4]);
     expect(frame.total()).toEqual(6)
  });
});
