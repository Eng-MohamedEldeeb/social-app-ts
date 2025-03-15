type TFile = {
  public_id: string;
  secure_url: string;
};

enum folderTypes {
  avatar = "avatar",
  post = "post",
  comment = "comment",
  groupCover = "groupCover",
}

export { TFile, folderTypes };
