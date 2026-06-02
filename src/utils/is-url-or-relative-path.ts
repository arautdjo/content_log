export const isRelativePathRegex =
  /^\/(?:[A-Za-z0-9-._~!$&'()*+,;=:@]|%[0-9a-fA-F]{2})*(?:\/(?:[A-Za-z0-9-._~!$&'()*+,;=:@]|%[0-9a-fA-F]{2})*)*$/;

export function isUrlOrRelativePath(path: string){

    try{

    new URL(path)
    return true
    }catch(e){
      return isRelativePathRegex.test(path)

    }

}
